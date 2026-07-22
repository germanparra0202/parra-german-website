from fastapi import APIRouter
from typing import List
from app.schemas.project import Project

router = APIRouter(prefix="/projects", tags=["projects"])

# Mock database of seed project data
# In a production app, these would be fetched from a database (e.g. SQLite via SQLAlchemy)
SEED_PROJECTS = [
  {
    "id": 1,
    "title": "Real Estate Startup",
    "description": "SaaS MVP to ingest property-management emails, classify them, create/update cases, and draft automated responses for human approval.",
    "tech_stack": ["Next.js", "FastAPI", "Supabase", "TypeScript", "PostgreSQL"],
    "image_url": "/leasepilot.png", 
    "demo_url": "https://prop.domec.dev/",
    "github_url": "https://github.com/germanparra0202/real-estate-professional-project",
    "roadmap": [
      "v1.0 Foundation (DONE): Singular account structure, core entities (Properties, Units, Tenants, Leases), decimal financial ledger.",
      "v1.1 Operational Excellence (IN PROGRESS): Portfolio command center (KPI widgets), automated rent engine, migration import wedge.",
      "v2.0 Enterprise & Hierarchy (TARGETED): Multi-Type Identity, PM parent-child relationships, scoped RLS access, aggregated KPI rollup."
    ],
    "structure": [
      "apps/web – Next.js + TypeScript frontend (Tailwind-ready)",
      "apps/api – FastAPI backend with modular router layout",
      "packages/shared – Shared contracts and utilities (placeholder)"
    ],
    "next_steps": [
      "Wire Postmark inbound webhook to POST /webhooks/email/inbound.",
      "Add schema/migration tooling for Postgres.",
      "Implement auth module and shared identity resolver.",
      "Connect Celery/Redis for async jobs and S3 for storage."
    ]
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
