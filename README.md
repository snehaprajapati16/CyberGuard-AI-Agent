# CyberGuard AI

CyberGuard AI is a professional, futuristic, and AI-powered cybersecurity learning platform. It features a dark-mode cyberpunk UI, an integrated FastAPI backend with the Google Gemini API, and interactive learning tools designed to mentor users in cybersecurity concepts.

## Features

*   **AI Cybersecurity Mentor**: Powered by Google's Gemini 1.5 Flash model, the AI mentor provides concise, helpful, and cyber-themed answers to your questions.
*   **Futuristic UI**: A sleek, dark-mode cyberpunk interface built with HTML, CSS, and JavaScript.
*   **AI Memory Bank**: Tracks your progress, weak areas, completed topics, and quiz accuracy to provide a personalized learning experience.
*   **FastAPI Backend**: A high-performance Python backend serving the API and web pages.

## Technologies Used

*   **Backend**: Python, FastAPI, Uvicorn
*   **AI Integration**: Google Generative AI (`gemini-1.5-flash`)
*   **Frontend**: HTML, CSS, JavaScript, Jinja2 Templates
*   **Environment Management**: `python-dotenv`

## Getting Started

### Prerequisites

*   Python 3.8+
*   A Google Gemini API Key

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd CyberGuard-AI-Agent
    ```

2.  **Install dependencies**:
    It is recommended to use a virtual environment.
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up Environment Variables**:
    Create a `.env` file in the root directory (if it doesn't exist) and add your Gemini API Key:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

### Running the Application

Start the development server using Uvicorn:

```bash
python main.py
```
*(Alternatively, run `uvicorn main:app --reload`)*

The application will be available at `http://localhost:8000`.

## Project Structure

*   `main.py`: The FastAPI application and core logic, including the Gemini API integration.
*   `requirements.txt`: Python package dependencies.
*   `static/`: Contains static assets like CSS stylesheets, JavaScript files, and images.
*   `templates/`: Contains Jinja2 HTML templates (e.g., `index.html`).
*   `.env`: Environment variables configuration file.

## Acknowledgements

Developed as part of an AI-powered cybersecurity platform initiative.
