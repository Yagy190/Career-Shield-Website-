from sqlalchemy import Boolean, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    full_name = Column(String)
    education = Column(String, nullable=True)
    
    applications = relationship("Application", back_populates="owner")
    skills = relationship("UserSkill", back_populates="user")

class UserSkill(Base):
    __tablename__ = "user_skills"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    skill_name = Column(String)

    user = relationship("User", back_populates="skills")

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    company = Column(String)
    location = Column(String)
    job_type = Column(String)
    stipend = Column(String)
    is_verified = Column(Boolean, default=False)
    required_skills = Column(String) # Comma separated for MVP simplicity

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    job_id = Column(Integer, ForeignKey("jobs.id"))
    status = Column(String, default="Applied")
    applied_on = Column(DateTime, default=datetime.utcnow)

    owner = relationship("User", back_populates="applications")
