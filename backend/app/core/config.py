import os
from typing import List

# Load local .env file key-value pairs into environment variables
env_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), ".env")
if os.path.exists(env_path):
    with open(env_path, "r") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip().strip('"').strip("'")

class Settings:
    PROJECT_NAME: str = "Portfolio API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api"

    # CORS Origins (React frontend dev server runs on http://localhost:5173 by default)
    # Accepts comma-separated list of origins via environment variables
    BACKEND_CORS_ORIGINS: List[str] = [
        origin.strip() for origin in os.getenv(
            "BACKEND_CORS_ORIGINS", 
            "http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173"
        ).split(",") if origin.strip()
    ]

    # SMTP Configuration for Contact Form
    # REPLACE: Set these environment variables in your hosting provider (Vercel, Render, Heroku) or a local .env file.
    SMTP_HOST: str = os.getenv("SMTP_HOST", "smtp.gmail.com")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER: str = os.getenv("SMTP_USER", "your-email@gmail.com")
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "your-app-specific-password")
    
    # Destination email where the contact form submissions will be sent
    CONTACT_RECEIVER_EMAIL: str = os.getenv("CONTACT_RECEIVER_EMAIL", "germanparra321@gmail.com")

settings = Settings()
