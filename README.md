# CyberGuard AI - Your Personalized Cybersecurity Mentor

![CyberGuard AI](https://img.shields.io/badge/Status-Active-brightgreen)
![Python Version](https://img.shields.io/badge/Python-3.8%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688)
![Gemini API](https://img.shields.io/badge/Gemini-1.5_Flash-orange)

## 🛡️ Overview
**CyberGuard AI** is a futuristic, intelligent cybersecurity learning platform and personalized mentor. It helps users master Ethical Hacking, Network Security, Web Security, and Forensics through an AI that adapts to individual learning styles, remembers weaknesses, and dynamically generates custom roadmaps. 

Whether you're a beginner exploring the basics or an advanced user practicing SQL injection in interactive labs, CyberGuard AI provides real-time guidance, gamified progress tracking, and hands-on exercises.

## ✨ Key Features
- 🧠 **AI Memory System:** Remembers your weak areas, tracks your learning streak, and adapts roadmaps based on your performance.
- 🗺️ **Personalized Roadmap:** Dynamically generated timelines indicating completed topics and suggesting targeted labs based on weaknesses.
- 💻 **Interactive Labs:** Practice real-world scenarios including a Phishing Simulator, Password Cracker, and SQLi Demo.
- 🏆 **Gamification & Analytics:** Earn badges, level up your Hacker rank, and view performance analytics to stay motivated.
- 💬 **Integrated AI Chat (CyberMentor):** Powered by **Google's Gemini 1.5 Flash API**, offering contextual cybersecurity advice, recaps, and on-the-fly mentoring.
- 🎨 **Futuristic UI:** A sleek, responsive, cyberpunk-inspired glassmorphism design with particle backgrounds.

## 🛠️ Technology Stack
- **Backend:** Python, FastAPI, Uvicorn
- **AI Core:** Google Generative AI (Gemini 1.5 Flash)
- **Frontend:** HTML5, CSS3 (Vanilla, Glassmorphism), Vanilla JavaScript, FontAwesome
- **Templating:** Jinja2
- **Environment Management:** python-dotenv

## 🚀 Getting Started

### Prerequisites
Make sure you have Python 3.8+ installed on your system.

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/CyberGuard-AI-Agent.git
cd CyberGuard-AI-Agent
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Set up Environment Variables
Create a `.env` file in the root of your project directory and add your Google Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
> **Note:** If you don't provide a valid key, the app will run in "Offline Mode" with placeholder responses.

### 4. Run the Application
Start the FastAPI server using Uvicorn:
```bash
python main.py
```
Alternatively, you can run:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 5. Access the Platform
Open your web browser and navigate to:
```
http://localhost:8000
```

## 📁 Project Structure
```text
CyberGuard-AI-Agent/
│
├── static/                  # Static assets
│   ├── css/                 # CSS stylesheets (style.css)
│   ├── js/                  # JavaScript files (script.js)
│   └── images/              # Image assets
│
├── templates/               # HTML Templates
│   └── index.html           # Main application interface
│
├── .env                     # Environment variables (API Keys)
├── main.py                  # FastAPI application entry point
├── requirements.txt         # Python dependencies
└── README.md                # Project documentation
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/CyberGuard-AI-Agent/issues).

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
