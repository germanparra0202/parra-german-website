# Professional Portfolio Template

A modern, fast, and responsive personal portfolio website template. Built using **React (Vite)** on the frontend and **FastAPI** on the backend.

---

## Features
- **Single Page Architecture (SPA):** Smooth scroll navigation with scroll spy section highlights (Intersection Observer API).
- **Responsive Layout:** Mobile-first, fully responsive design using **Tailwind CSS**.
- **Dark Mode Support:** Smooth light/dark theme toggling with preference persistence in `localStorage`.
- **Framer Motion Animations:** Subtitle fade-ins and timeline slide-overs.
- **Dynamic Projects Showcase:** Fetches project cards from the FastAPI backend, falling back gracefully to local mockup data if the API is offline.
- **Interactive Contact Form:** Submits inquiries to the backend via POST API requests with Pydantic field validation.

---

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** FastAPI, Uvicorn, Pydantic (with Email validator)

---

## Quick Start (Local Run)

You will need **Node.js** and **Python 3** installed.

### 1. Set Up and Run the Backend (FastAPI)

Navigate to the `backend` directory:
```bash
cd backend
```

#### Option A: Using `uv` (Recommended - extremely fast)
If you have `uv` installed, run:
```bash
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install -r requirements.txt
uv run uvicorn main:app --reload
```

#### Option B: Using standard `pip`
Create a virtual environment and run:
```bash
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will start running on **`http://localhost:8000`**. You can view the interactive OpenAPI documentation at `http://localhost:8000/docs`.

---

### 2. Set Up and Run the Frontend (React)

Open a new terminal window and navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```

The React app will start running on **`http://localhost:5173`**.
Vite is preconfigured with a development proxy, meaning any client fetches made to `/api/*` are automatically forwarded to the backend server running on port 8000.

---

## Customization Instructions

### 1. Replace Text and Personal Content
Look for the `// REPLACE:` comments inside these React components to insert your own bio, skills, and credentials:
- **Hero details:** [`frontend/src/components/Hero.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/Hero.jsx)
- **About Bio & Stats:** [`frontend/src/components/About.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/About.jsx)
- **Technical Skills:** [`frontend/src/components/Skills.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/Skills.jsx)
- **Timeline Experience:** [`frontend/src/components/Experience.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/Experience.jsx)
- **Education Qualifications:** [`frontend/src/components/Education.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/Education.jsx)
- **Social links & email:** [`frontend/src/components/Contact.jsx`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/src/components/Contact.jsx)

### 2. Add Photos & Resume PDF
- **Avatar & About Photos:** Place your image files in `/frontend/public/assets/` (e.g. `headshot.jpg`) and replace the SVG placeholders in `Hero.jsx` and `About.jsx` with standard `<img>` elements.
- **Resume Download:** Place your resume PDF in `/frontend/public/resume.pdf`. The download link is preconfigured to fetch this path.

### 3. Dynamic Projects (Backend Seeds)
To update the projects served dynamically by the API, edit the list array inside [`backend/app/routers/projects.py`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/backend/app/routers/projects.py).

### 4. Enable Contact Form Email Dispatch (SMTP)
To make the contact form send real emails to your inbox:
1. Set the following environment variables in your local `.env` file or deployment settings:
   ```env
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASSWORD="your-app-specific-password"
   CONTACT_RECEIVER_EMAIL="your-destination-email@gmail.com"
   ```
2. Uncomment the SMTP email-sending block in [`backend/app/routers/contact.py`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/backend/app/routers/contact.py).

---

## Design Options & Color Palettes

The layout includes a curated design hierarchy utilizing Google Fonts:
- **Headings:** `Plus Jakarta Sans` (Geometric, premium)
- **Body:** `Inter` (Excellent readability)

### Swapping Color Palettes
To adjust the primary highlight accents, you can customize the `brand` color definition in [`frontend/tailwind.config.js`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/frontend/tailwind.config.js):

#### Option A: Slate & Indigo (Default Software Engineer Theme)
- Light: `#F8FAFC`, Dark: `#0B0F19`
- Accent class: `brand` (Indigo-600)

#### Option B: Obsidian & Gold (Premium/Warm Minimalist Theme)
Adjust tailwind config brand to amber colors:
```js
brand: {
  light: '#F59E0B', // Amber 500
  DEFAULT: '#D97706', // Amber 600
  dark: '#B45309', // Amber 700
}
```

#### Option C: Deep Emerald & Sage (Organic Tech Theme)
Adjust tailwind config brand to emerald colors:
```js
brand: {
  light: '#34D399', // Emerald 400
  DEFAULT: '#059669', // Emerald 600
  dark: '#047857', // Emerald 700
}
```

---

## Next Steps: Adding Database Persistence
If you want to transition from in-memory mock lists to database records (e.g. storing contact submissions or projects in SQLite):
1. Review [`backend/app/database.py`](file:///Users/germanparra/github_repos/personal_website/parra-german-website/backend/app/database.py) for the SQLAlchemy setup guides.
2. Define models in a new directory `/backend/app/models/` inheriting from the `Base` class.
3. Import `get_db` session dependencies into your routers to query/commit database rows.
