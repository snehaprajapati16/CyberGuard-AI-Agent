from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY and GEMINI_API_KEY != "your_gemini_key_here":
    genai.configure(api_key=GEMINI_API_KEY)
    # Using a modern model
    model = genai.GenerativeModel('gemini-1.5-flash')
    # Store chat history (in-memory for prototype)
    chat_session = model.start_chat(history=[
        {"role": "user", "parts": "You are CyberGuard AI, a personalized cybersecurity mentor. Keep answers concise, helpful, and cyber-themed. Use simple markdown formatting when needed."}
    ])
else:
    model = None
    chat_session = None
app = FastAPI(title="CyberGuard AI")

# Ensure static and templates directories exist for the mount to work
os.makedirs("static", exist_ok=True)
os.makedirs("templates", exist_ok=True)

# Mount static files (CSS, JS, images)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Setup Jinja2 templates
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/api/chat")
async def chat(message: dict):
    user_msg = message.get("message", "")
    
    if chat_session:
        try:
            # Send message to Gemini
            response = chat_session.send_message(user_msg)
            reply = response.text
        except Exception as e:
            reply = f"Error communicating with AI core: {str(e)}"
    else:
        # Fallback if API key is missing or invalid
        reply = f"AI Mentor (Offline Mode): I received your message '{user_msg}'. Please add a valid Gemini API key to the .env file to enable live AI!"
        
    return {"reply": reply}

@app.get("/api/memory")
async def get_memory():
    # Placeholder for AI Memory Bank data
    return {
        "weak_areas": ["SQL Injection", "Buffer Overflow"],
        "completed_topics": ["Phishing", "Password Cracking", "Networking Basics"],
        "streak": 14,
        "favorite_domain": "Ethical Hacking",
        "quiz_accuracy": 87
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
