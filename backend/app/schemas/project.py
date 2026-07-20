from pydantic import BaseModel
from typing import List, Optional

class ProjectBase(BaseModel):
    title: str
    description: str
    tech_stack: List[str]
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True
        json_schema_extra = {
            "example": {
                "id": 1,
                "title": "E-Commerce Platform",
                "description": "Full-stack online shop built using FastAPI and React.",
                "tech_stack": ["React", "FastAPI", "PostgreSQL"],
                "image_url": "https://example.com/project1.png",
                "demo_url": "https://demo.example.com",
                "github_url": "https://github.com/user/project1"
            }
        }
