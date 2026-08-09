import { useState } from 'react';
import { Mic, Video, MessageSquare, Play, Square, Loader2 } from 'lucide-react';

const InterviewPrep = () => {
  const [isInterviewing, setIsInterviewing] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const startInterview = () => {
    setIsInterviewing(true);
    setMessages([
      { role: 'ai', text: "Hello! I'm your AI Interviewer. Today we'll be conducting a technical interview for the AI Engineering Intern role. Are you ready to begin?" }
    ]);
  };

  const endInterview = () => {
    setIsInterviewing(false);
    setMessages([]);
  };

  const handleSend = () => {
    if (!currentInput.trim()) return;
    
    const userMessage = currentInput;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setCurrentInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = "Can you explain the difference between overfitting and underfitting in a machine learning model?";
      if (messages.length > 2) {
        aiResponse = "That's a good explanation. Now, how would you address overfitting in a deep neural network?";
      }
      if (messages.length > 4) {
        aiResponse = "Excellent. Let's move on to a coding problem. Can you describe how you would implement a hash table?";
      }
      
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 flex flex-col h-[calc(100vh-8rem)]">
      <div>
        <h2 className="text-2xl font-bold text-foreground">AI Interview Simulator</h2>
        <p className="text-foreground/60 mt-1">Practice technical and HR interviews with real-time feedback.</p>
      </div>

      {!isInterviewing ? (
        <div className="flex-1 bg-surface border border-surface/50 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <Mic className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Technical Interview: AI Intern</h3>
            <p className="text-foreground/60 max-w-md mx-auto">
              This session will cover Machine Learning fundamentals, Python, and system design basics. The AI will evaluate your answers and provide feedback at the end.
            </p>
          </div>
          <button 
            onClick={startInterview}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Interview Simulation
          </button>
        </div>
      ) : (
        <div className="flex-1 bg-surface border border-surface/50 rounded-xl flex flex-col overflow-hidden">
          <div className="h-16 border-b border-surface/50 px-6 flex items-center justify-between bg-background/50">
            <div className="flex items-center space-x-3 text-sm font-medium">
              <span className="flex items-center text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                Interview in Progress
              </span>
            </div>
            <button 
              onClick={endInterview}
              className="text-red-400 hover:bg-red-400/10 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <Square className="w-4 h-4 mr-2" />
              End Session
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-tr-none' 
                    : 'bg-background border border-surface/80 rounded-tl-none text-foreground/90'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-background border border-surface/80 rounded-2xl rounded-tl-none p-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-surface/50 bg-background/50">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your answer..." 
                  className="w-full bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary pr-12"
                />
              </div>
              <button 
                onClick={handleSend}
                disabled={!currentInput.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-xl transition-colors disabled:opacity-50"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
