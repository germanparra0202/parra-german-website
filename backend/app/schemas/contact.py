from pydantic import BaseModel, EmailStr, Field

class ContactBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Your full name")
    email: EmailStr = Field(..., description="Valid email address")
    message: str = Field(..., min_length=5, max_length=2000, description="Detailed email body content")

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Sarah Jenkins",
                "email": "sarah.jenkins@example.com",
                "message": "Hello German, we would love to discuss a consulting opportunity for our backend team."
            }
        }

class ContactResponse(BaseModel):
    success: bool
    message: str
