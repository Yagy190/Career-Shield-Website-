import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  ShieldAlert, 
  UserCircle,
  FileText,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Opportunities', path: '/jobs', icon: Search },
    { name: 'Scam Checker', path: '/verify', icon: ShieldAlert },
    { name: 'Profile & Skills', path: '/profile', icon: UserCircle },
    { name: 'Resume Builder', path: '/resume', icon: FileText },
    { name: 'Interview Prep', path: '/interview', icon: MessageSquare },
  ];

  return (
    <aside className="w-64 bg-surface/80 backdrop-blur-xl border-r border-surface/50 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-surface/50 shrink-0">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          CareerShield
        </span>
      </div>
      <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive 
                  ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground shadow-sm border border-primary/20' 
                  : 'text-foreground/70 hover:bg-surface/50 hover:text-foreground'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : ''}`} />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
