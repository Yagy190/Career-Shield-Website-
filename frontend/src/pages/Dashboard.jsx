import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  ChevronRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'Applications', value: '12', icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Interviews', value: '3', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
    { label: 'Offers', value: '1', icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-400/10' },
    { label: 'Rejected', value: '4', icon: XCircle, color: 'text-secondary', bg: 'bg-secondary/10' },
  ];

  const recentApplications = [
    { company: 'Google', role: 'SWE Intern', status: 'Interview', date: '2 days ago' },
    { company: 'Microsoft', role: 'AI Intern', status: 'Applied', date: '4 days ago' },
    { company: 'Startup X', role: 'Frontend Dev', status: 'Assessment', date: '1 week ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Welcome back, Student</h2>
          <p className="text-foreground/70 mt-1">Here is what is happening with your career journey.</p>
        </div>
        <Link 
          to="/jobs" 
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/30 px-5 py-2.5 rounded-xl font-medium transition-all"
        >
          Find Opportunities
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-surface/50 backdrop-blur-md rounded-2xl p-6 border border-surface/50 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-500">
                <Icon className="w-24 h-24" />
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-foreground/70 font-medium">{stat.label}</p>
                  <p className="text-4xl font-bold text-foreground mt-2 tracking-tight">{stat.value}</p>
                </div>
                <div className={`p-3.5 rounded-xl ${stat.bg} ${stat.color} shadow-inner`}>
                  <Icon className="w-7 h-7" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface/50 backdrop-blur-md rounded-2xl border border-surface/50 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-surface/50 flex justify-between items-center bg-surface/30">
              <h3 className="text-lg font-bold">Recent Applications</h3>
              <Link to="/tracker" className="text-primary hover:text-accent transition-colors text-sm font-medium">View All</Link>
            </div>
            <div className="divide-y divide-surface/50">
              {recentApplications.map((app, i) => (
                <div key={i} className="p-5 hover:bg-surface/50 transition-all flex items-center justify-between group">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{app.role}</h4>
                    <p className="text-sm text-foreground/60">{app.company} • {app.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      app.status === 'Interview' ? 'bg-accent/10 text-accent border border-accent/20' :
                      app.status === 'Applied' ? 'bg-primary/10 text-primary border border-primary/20' :
                      'bg-secondary/10 text-secondary border border-secondary/20'
                    }`}>
                      {app.status}
                    </span>
                    <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-foreground/80 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-surface to-surface/50 backdrop-blur-md rounded-2xl border border-primary/20 shadow-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <h3 className="text-lg font-bold mb-4 flex items-center relative z-10">
              <div className="p-1.5 rounded-lg bg-primary/20 mr-3">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              AI Insight
            </h3>
            <p className="text-foreground/80 mb-5 text-sm leading-relaxed relative z-10">
              Your strongest match rate is in <strong>AI Internship</strong> roles, but you are frequently missing <span className="text-secondary font-medium">Docker</span> and <span className="text-secondary font-medium">PyTorch</span> in requirements.
            </p>
            <button className="w-full py-2.5 bg-surface/50 hover:bg-primary hover:text-white border border-surface hover:border-primary rounded-xl text-sm font-semibold transition-all relative z-10 shadow-sm">
              View Skill Gap Analysis
            </button>
          </div>

          <div className="bg-surface/50 backdrop-blur-md rounded-2xl border border-surface/50 shadow-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center text-accent">
              <div className="p-1.5 rounded-lg bg-accent/10 mr-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              Action Required
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 bg-background/50 p-3 rounded-xl border border-surface">
                <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(6,182,212,0.6)] shrink-0"></div>
                <p className="text-sm text-foreground/80 font-medium">Interview for Google SWE Intern tomorrow at 11:00 AM.</p>
              </div>
              <div className="flex items-start space-x-3 bg-background/50 p-3 rounded-xl border border-surface">
                <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(236,72,153,0.6)] shrink-0"></div>
                <p className="text-sm text-foreground/80 font-medium">Microsoft AI Intern application deadline in 2 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
