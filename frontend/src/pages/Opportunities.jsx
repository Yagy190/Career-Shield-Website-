import { useState, useEffect } from 'react';
import { Search, MapPin, Building, GraduationCap, Code, CheckCircle, ShieldCheck, ChevronRight, Loader2 } from 'lucide-react';

const Opportunities = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterVerified, setFilterVerified] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/jobs');
        if (response.ok) {
          const data = await response.json();
          // Transform required_skills from string to array for frontend
          const formattedJobs = data.map(job => ({
            ...job,
            skills: job.required_skills ? job.required_skills.split(',') : [],
            missingSkills: [], // Mocking missing skills for simplicity in this demo
            matchScore: Math.floor(Math.random() * 40) + 60 // Mock match score
          }));
          setJobs(formattedJobs);
        }
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = filterVerified ? jobs.filter(j => j.isVerified) : jobs;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-primary">
        <Loader2 className="w-8 h-8 animate-spin" />
        <span className="ml-2 font-medium">Fetching verified opportunities...</span>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Opportunities</h2>
          <p className="text-foreground/60 mt-1">Discover verified roles matched to your skills.</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search roles..." 
              className="pl-10 pr-4 py-2 bg-surface border border-surface/50 rounded-lg text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <label className="flex items-center space-x-2 cursor-pointer bg-surface px-4 py-2 border border-surface/50 rounded-lg select-none">
            <input 
              type="checkbox" 
              checked={filterVerified} 
              onChange={(e) => setFilterVerified(e.target.checked)}
              className="rounded text-primary focus:ring-primary bg-background border-surface"
            />
            <span className="text-sm font-medium flex items-center">
              <ShieldCheck className="w-4 h-4 text-green-400 mr-1.5" />
              Verified Only
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-surface border border-surface/50 rounded-xl p-6 hover:border-primary/50 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{job.title}</h3>
                    {job.isVerified && (
                      <span className="flex items-center text-xs font-medium bg-green-400/10 text-green-400 px-2 py-0.5 rounded-full">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center text-sm text-foreground/60 gap-4">
                    <span className="flex items-center"><Building className="w-4 h-4 mr-1.5" /> {job.company}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {job.location}</span>
                    <span className="flex items-center"><GraduationCap className="w-4 h-4 mr-1.5" /> {job.type}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="flex items-center text-xs bg-background border border-surface/80 px-2.5 py-1 rounded-md text-foreground/80">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-1.5" />
                        {skill}
                      </span>
                    ))}
                    {job.missingSkills.map((skill, i) => (
                      <span key={i} className="flex items-center text-xs bg-background border border-surface/80 px-2.5 py-1 rounded-md text-foreground/60 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></div>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end justify-between md:h-full gap-4 md:gap-0 border-t md:border-t-0 md:border-l border-surface/50 pt-4 md:pt-0 md:pl-6 min-w-[200px]">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-sm font-medium text-foreground/60">Smart Match</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-3xl font-bold ${
                      job.matchScore >= 90 ? 'text-green-400' :
                      job.matchScore >= 80 ? 'text-blue-400' :
                      job.matchScore >= 70 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {job.matchScore}%
                    </span>
                  </div>
                </div>
                
                <button className="w-full md:w-auto bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
