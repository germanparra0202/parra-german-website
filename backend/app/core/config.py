import os
from typing import List
from pydantic import EmailStr

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
    CONTACT_RECEIVER_EMAIL: str = os.getenv("CONTACT_RECEIVER_EMAIL", "your-receiving-email@gmail.com")

settings = Settings()
