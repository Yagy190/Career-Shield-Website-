import { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertOctagon, ArrowRight, Loader2 } from 'lucide-react';

const ScamChecker = () => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate API call for AI Risk Analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // Basic mock logic based on keywords
      const lowerText = text.toLowerCase();
      if (lowerText.includes('pay') || lowerText.includes('fee') || lowerText.includes('registration')) {
        setResult({
          risk: 'High',
          indicators: [
            { name: 'Upfront Payment Required', level: '🔴' },
            { name: 'Urgency / Immediate Action', level: '🔴' },
            { name: 'Unverified Contact Info', level: '🟠' }
          ],
          recommendation: 'Verify independently before proceeding. Do not pay any registration fees.',
        });
      } else if (lowerText.includes('urgent') || lowerText.includes('whatsapp')) {
        setResult({
          risk: 'Medium',
          indicators: [
            { name: 'Urgency', level: '🟠' },
            { name: 'Unofficial Communication Channel', level: '🟠' }
          ],
          recommendation: 'Proceed with caution. Ensure you correspond through official channels.',
        });
      } else {
        setResult({
          risk: 'Low',
          indicators: [
            { name: 'Official Listing', level: '✅' },
            { name: 'No Payment Requested', level: '✅' }
          ],
          recommendation: 'This listing appears genuine. You can proceed with the application.',
        });
      }
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">Scam Checker (Risk Analysis)</h2>
        <p className="text-foreground/60 mt-2 max-w-2xl">
          Received a suspicious internship offer? Paste the message or email below and our AI will analyze it for common recruitment scam indicators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-surface rounded-xl border border-surface/50 shadow-sm p-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Message or Job Description
            </label>
            <textarea
              className="w-full h-64 bg-background border border-surface/50 rounded-lg p-4 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              placeholder="e.g., Congratulations! You have been selected. Pay ₹1,999 for registration..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !text.trim()}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-primary/20"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing Risk...
              </>
            ) : (
              <>
                Analyze Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>

        <div>
          {result ? (
            <div className={`rounded-xl border shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 ${
              result.risk === 'High' ? 'bg-red-400/5 border-red-400/20' : 
              result.risk === 'Medium' ? 'bg-yellow-400/5 border-yellow-400/20' : 
              'bg-green-400/5 border-green-400/20'
            }`}>
              <div className="flex items-center space-x-3">
                {result.risk === 'High' ? (
                  <AlertOctagon className="w-8 h-8 text-red-400" />
                ) : result.risk === 'Medium' ? (
                  <ShieldAlert className="w-8 h-8 text-yellow-400" />
                ) : (
                  <ShieldCheck className="w-8 h-8 text-green-400" />
                )}
                <div>
                  <h3 className="text-lg font-bold">
                    {result.risk} Risk Detected
                  </h3>
                  <p className="text-sm text-foreground/70">AI Analysis Complete</p>
                </div>
              </div>

              <div className="space-y-3 bg-background/50 rounded-lg p-4 border border-surface/50">
                <h4 className="font-semibold text-sm">Risk Indicators:</h4>
                <ul className="space-y-2">
                  {result.indicators.map((ind, idx) => (
                    <li key={idx} className="flex justify-between items-center text-sm">
                      <span>{ind.name}</span>
                      <span className="text-base">{ind.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-surface/50">
                <h4 className="font-semibold text-sm mb-1">Recommendation:</h4>
                <p className="text-foreground/80 text-sm leading-relaxed">{result.recommendation}</p>
              </div>
            </div>
          ) : (
            <div className="h-full bg-surface/30 rounded-xl border border-surface/30 border-dashed flex flex-col items-center justify-center p-8 text-center text-foreground/40">
              <ShieldAlert className="w-12 h-12 mb-4 opacity-50" />
              <p>Paste a message and click analyze to see risk indicators.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScamChecker;
