from fastapi import APIRouter
from typing import List
from app.schemas.project import Project

router = APIRouter(prefix="/projects", tags=["projects"])

# Mock database of seed project data
# In a production app, these would be fetched from a database (e.g. SQLite via SQLAlchemy)
SEED_PROJECTS = [
  {
    "id": 1,
    "title": "E-Commerce Microservices Platform",
    "description": "A robust online shopping backend engineered using FastAPI microservices. It features complete order pipelines, inventory sync controls, and containerized deployment.",
    "tech_stack": ["FastAPI", "PostgreSQL", "Docker", "Redis"],
    "image_url": "", # Left empty to display the modern CSS gradient placeholder
    "demo_url": "https://demo.example.com",
    "github_url": "https://github.com/your-username/ecommerce-microservices"
  },
  {
    "id": 2,
    "title": "Task Orchestration Dashboard",
    "description": "A sleek Kanban board workspace utilizing React and Tailwind CSS. Built with responsive drag-and-drop actions, local storage state persistence, and beautiful glassmorphism overlays.",
    "tech_stack": ["React", "Tailwind CSS", "Framer Motion", "Zustand"],
    "image_url": "",
    "demo_url": "https://demo.example.com",
    "github_url": "https://github.com/your-username/task-dashboard"
  },
  {
    "id": 3,
    "title": "Real-Time IoT Monitor",
    "description": "A telemetry dashboard displaying real-time metrics for simulated IoT sensors. Uses FastAPI WebSocket connections and animated React SVG graphs for interactive charting.",
    "tech_stack": ["FastAPI", "WebSockets", "React", "Chart.js"],
    "image_url": "",
    "demo_url": "https://demo.example.com",
    "github_url": "https://github.com/your-username/iot-telemetry"
  }
]

@router.get("/", response_model=List[Project])
async def get_projects():
    """
    Get all portfolio projects.
    
    This route currently serves static seed projects in memory. It can easily
    be modified to query a database model (like SQLite/SQLAlchemy) in the future.
    """
    return SEED_PROJECTS
