import { useState } from 'react';
import { User, Book, Code2, Briefcase, Plus, Save } from 'lucide-react';

const Profile = () => {
  const [skills, setSkills] = useState(['Python', 'Machine Learning', 'TensorFlow', 'SQL']);
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Student Profile</h2>
        <p className="text-foreground/60 mt-1">Manage your education, skills, and experience to get better job matches.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-surface border border-surface/50 rounded-xl p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
              <User className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-foreground/60 text-sm">B.Tech CSE Student</p>
            <div className="mt-4 pt-4 border-t border-surface/50">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground/60">Profile Completion</span>
                <span className="text-primary font-medium">85%</span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          {/* Education */}
          <div className="bg-surface border border-surface/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              <div className="bg-background border border-surface/50 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech in Computer Science</h4>
                    <p className="text-sm text-foreground/60">University of Technology</p>
                  </div>
                  <span className="text-sm text-foreground/50">2023 - 2027</span>
                </div>
              </div>
              <button className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                <Plus className="w-4 h-4 mr-1" /> Add Education
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-surface border border-surface/50 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-primary" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, i) => (
                <span key={i} className="bg-background border border-surface/80 px-3 py-1.5 rounded-lg text-sm text-foreground/80">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="Add a skill..." 
                className="flex-1 bg-background border border-surface/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center">
                Add
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors flex items-center shadow-lg shadow-primary/20">
              <Save className="w-4 h-4 mr-2" />
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
