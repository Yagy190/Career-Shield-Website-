from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Token Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

# User Schemas
class UserCreate(BaseModel):
    email: str
    password: str
    full_name: str

class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    education: Optional[str] = None

    class Config:
        from_attributes = True

# Job Schemas
class JobResponse(BaseModel):
    id: int
    title: str
    company: str
    location: str
    job_type: str
    stipend: str
    is_verified: bool
    required_skills: str

    class Config:
        from_attributes = True

# Application Schemas
class ApplicationCreate(BaseModel):
    job_id: int

class ApplicationResponse(BaseModel):
    id: int
    job_id: int
    status: str
    applied_on: datetime

    class Config:
        from_attributes = True
