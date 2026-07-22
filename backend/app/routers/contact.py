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

    # 2. SMTP dispatch
    # If SMTP settings are configured, try to send a real email.
    # Otherwise, log a developer warning and succeed (allowing local testing).
    if settings.SMTP_USER and settings.SMTP_USER != "your-email@gmail.com" and settings.SMTP_PASSWORD and settings.SMTP_PASSWORD != "your-app-specific-password":
        try:
            # Create message container
            msg = MIMEMultipart()
            msg['From'] = settings.SMTP_USER
            msg['To'] = settings.CONTACT_RECEIVER_EMAIL
            msg['Subject'] = f"Portfolio Contact: {contact_in.name}"
            
            # Set email body text
            body_text = f"You received a new message from your portfolio website:\n\n" \
                        f"Name: {contact_in.name}\n" \
                        f"Email: {contact_in.email}\n\n" \
                        f"Message:\n{contact_in.message}"
            msg.attach(MIMEText(body_text, 'plain'))
            
            # Connect to SMTP server
            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT)
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            
            # Send email
            server.sendmail(settings.SMTP_USER, settings.CONTACT_RECEIVER_EMAIL, msg.as_string())
            server.quit()
            logger.info(f"Contact form email sent successfully to {settings.CONTACT_RECEIVER_EMAIL}!")
            
            return {
                "success": True,
                "message": "Thank you! Your message has been sent successfully."
            }
            
        except Exception as e:
            logger.error(f"Failed to dispatch contact email: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Failed to send email: {str(e)}"
            )
    else:
        logger.warning(
            "SMTP credentials not configured (SMTP_USER or SMTP_PASSWORD is placeholder). "
            "Message logged to console. To send real emails, set the SMTP environment variables."
        )
        return {
            "success": True,
            "message": "Message logged successfully (SMTP not configured)."
        }
