from database import SessionLocal, engine
import models

def seed_db():
    models.Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # Check if jobs already exist
    if db.query(models.Job).first():
        print("Database already seeded.")
        db.close()
        return

    jobs = [
        models.Job(
            title="AI Engineering Intern",
            company="TechNova",
            location="Remote",
            job_type="Internship",
            stipend="$3000/mo",
            is_verified=True,
            required_skills="Python,Machine Learning,TensorFlow,SQL"
        ),
        models.Job(
            title="Python Developer",
            company="DataFlow Inc",
            location="San Francisco, CA",
            job_type="Entry Level",
            stipend="$80,000/yr",
            is_verified=True,
            required_skills="Python,Django,SQL"
        ),
        models.Job(
            title="Data Analyst",
            company="MetricsCorp",
            location="New York, NY",
            job_type="Internship",
            stipend="$2500/mo",
            is_verified=True,
            required_skills="SQL,Python,Tableau"
        ),
        models.Job(
            title="ML Engineer",
            company="FutureSystems",
            location="Austin, TX",
            job_type="Entry Level",
            stipend="$100,000/yr",
            is_verified=False,
            required_skills="Machine Learning,Python"
        )
    ]
    
    db.add_all(jobs)
    db.commit()
    print("Database seeded with mock jobs.")
    db.close()

if __name__ == "__main__":
    seed_db()
