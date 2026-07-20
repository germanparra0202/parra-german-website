"""
Database Configuration Template

This file provides the boilerplate required to connect your FastAPI application 
to a persistent SQLite database using SQLAlchemy.

To implement persistence in the future, follow these steps:

1. Add dependency requirements to backend/requirements.txt:
   sqlalchemy>=2.0.0

2. Uncomment the SQLAlchemy session boilerplates below.

3. Create schemas/models in backend/app/models/ (e.g. database model instances).

4. Update your router routes (projects.py/contact.py) to query data using the Session local dependency.
"""

# import os
# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker

# # SQLite database file location
# SQLITE_DATABASE_URL = "sqlite:///./portfolio.db"

# # Engine instance managing connection pools
# engine = create_engine(
#     SQLITE_DATABASE_URL, 
#     connect_args={"check_same_thread": False} # Required for SQLite threading
# )

# # SessionLocal classes represents discrete transactional connections
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# # Base model class that other models inherit from
# Base = declarative_base()

# # Dependency utility function to grab database sessions per-request
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()
