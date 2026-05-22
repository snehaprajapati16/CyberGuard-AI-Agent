document.addEventListener('DOMContentLoaded', () => {
    
    // --- Memory System Data Fetching (Mocking API Call) ---
    async function loadMemoryData() {
        try {
            const response = await fetch('/api/memory');
            const data = await response.json();
            
            // Animate Streak Counter
            animateValue("streak-counter", 0, data.streak, 1500, " Days");
            
            // Animate Accuracy Counter
            animateValue("accuracy-counter", 0, data.quiz_accuracy, 1500, "%");
            
            // Set Favorite Domain
            document.getElementById('fav-domain').textContent = data.favorite_domain;
            
            // Populate Weak Areas
            const weakAreasList = document.getElementById('weak-areas-list');
            weakAreasList.innerHTML = ''; // Clear loading
            data.weak_areas.forEach(area => {
                const li = document.createElement('li');
                li.textContent = area;
                weakAreasList.appendChild(li);
            });
            
        } catch (error) {
            console.error("Error loading memory data:", error);
            document.getElementById('fav-domain').textContent = "Ethical Hacking";
            document.getElementById('weak-areas-list').innerHTML = "<li>SQL Injection</li><li>Buffer Overflow</li>";
            animateValue("streak-counter", 0, 14, 1500, " Days");
            animateValue("accuracy-counter", 0, 87, 1500, "%");
        }
    }

    loadMemoryData();

    // --- Number Animation Utility ---
    function animateValue(id, start, end, duration, suffix = "") {
        if (start === end) return;
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // --- Chat Assistant Logic ---
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatInput = document.getElementById('chatInput');
    const sendMsgBtn = document.getElementById('sendMsg');
    const chatBody = document.getElementById('chatBody');

    // Toggle Chat visibility
    document.getElementById('chatHeader').addEventListener('click', (e) => {
        if (e.target.id !== 'chatToggle') {
            chatWidget.classList.toggle('minimized');
            chatToggle.classList.toggle('fa-chevron-down');
            chatToggle.classList.toggle('fa-chevron-up');
        }
    });
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('minimized');
        chatToggle.classList.toggle('fa-chevron-down');
        chatToggle.classList.toggle('fa-chevron-up');
    });

    // Send Message
    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message to UI
        appendMessage(text, 'user');
        chatInput.value = '';

        // Add typing indicator
        const typingId = showTypingIndicator();

        try {
            // Send to FastAPI backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            const data = await response.json();

            // Remove typing indicator and add AI response
            removeTypingIndicator(typingId);
            appendMessage(data.reply, 'ai');

        } catch (error) {
            console.error("Chat error:", error);
            removeTypingIndicator(typingId);
            appendMessage("Error connecting to CyberMentor API. Retrying connection...", 'ai');
        }
    }

    sendMsgBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        msgDiv.innerHTML = `<div class="msg-content">${text}</div>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ai`;
        msgDiv.id = id;
        msgDiv.innerHTML = `<div class="msg-content typing-indicator"><span></span><span></span><span></span></div>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    // --- Login Modal Logic ---
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // --- Generic Button Click Handler for Prototype ---
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(btn => {
        // Skip buttons that already have specific event listeners
        if (btn.id === 'loginBtn' || btn.id === 'sendMsgBtn') return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const btnText = btn.textContent.trim();
            
            // Map specific buttons to scroll actions
            if (btnText === 'Start Learning') {
                document.querySelector('#roadmap').scrollIntoView({ behavior: 'smooth' });
                return;
            }
            if (btnText === 'Try Demo') {
                document.querySelector('#labs').scrollIntoView({ behavior: 'smooth' });
                return;
            }
            if (btn.classList.contains('btn-google') || btn.textContent.includes('Login with Google')) {
                alert("Google OAuth integration coming soon!");
                return;
            }
            
            // Default response for other buttons
            alert(`"${btnText}" feature is coming soon!`);
        });
    });

});
