import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import APIRouter, HTTPException, status
from app.schemas.contact import ContactBase, ContactResponse
from app.core.config import settings

router = APIRouter(prefix="/contact", tags=["contact"])
logger = logging.getLogger("uvicorn")

@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(contact_in: ContactBase):
    """
    Submits a contact request message.
    
    This endpoint validates the schema and logs the submission. 
    It includes commented-out code showing how to dispatch emails to an SMTP server 
    once real SMTP environment configurations are added.
    """
    # 1. Log the submission (always active for validation/testing purposes)
    logger.info(f"New portfolio contact submission: Name={contact_in.name}, Email={contact_in.email}")
    logger.info(f"Message contents: {contact_in.message}")

    # 2. SMTP dispatch template (commented out by default)
    # To enable, uncomment this section and configure your SMTP environment variables.
    """
    try:
        # Create message container
        msg = MIMEMultipart()
        msg['From'] = settings.SMTP_USER
        msg['To'] = settings.CONTACT_RECEIVER_EMAIL
        msg['Subject'] = f"Portfolio Contact: {contact_in.name} ({contact_in.email})"
        
        # Set email HTML body
        body_text = f"You received a new message from your portfolio website:\n\n" \
                    f"Name: {contact_in.name}\n" \
                    f"Email: {contact_in.email}\n\n" \
                    f"Message:\n{contact_in.message}"
        msg.attach(MIMEText(body_text, 'plain'))
        
        # Connect to SMTP server
        server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
        server.starttls() # Enable security handshake
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        
        # Send mail and terminate session
        server.sendmail(settings.SMTP_USER, settings.CONTACT_RECEIVER_EMAIL, msg.as_string())
        server.quit()
        logger.info("Contact form email sent successfully!")
        
    except Exception as e:
        logger.error(f"Failed to dispatch contact email: {str(e)}")
        # In development, we raise an HTTP warning, or fallback to logging.
        # Raise HTTP exception only if you want the frontend to know the email dispatch failed.
        # raise HTTPException(
        #     status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        #     detail="Message logged, but failed to send email via SMTP."
        # )
    """

    return {
        "success": True,
        "message": "Thank you! Your message was received and logged."
    }
