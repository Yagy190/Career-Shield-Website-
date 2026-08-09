import { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertTriangle, ArrowRight, Loader2, File } from 'lucide-react';

const ResumeAnalysis = () => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        score: 72,
        strengths: [
          'Clear education section',
          'Good use of action verbs',
          'Technical skills well categorized'
        ],
        weaknesses: [
          'Missing measurable outcomes in projects',
          'Lacks PyTorch experience for AI roles',
          'Contact info doesn\'t include LinkedIn'
        ],
        recommendations: [
          'Add metrics to your Machine Learning project (e.g., "improved accuracy by 15%").',
          'Move the Python skill higher since it is a core requirement for your target roles.',
          'Add a link to your GitHub repository for the listed projects.'
        ]
      });
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">AI Resume Analysis</h2>
        <p className="text-foreground/60 mt-1">Upload your resume to get job-specific optimization feedback.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-surface border border-surface/50 rounded-xl p-8 text-center border-dashed">
            {file ? (
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <File className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{file.name}</p>
                  <p className="text-sm text-foreground/50">{(file.size / 1024).toFixed(1)} KB</p>
                </div>
                <button 
                  onClick={() => setFile(null)}
                  className="text-sm text-red-400 hover:underline"
                >
                  Remove File
                </button>
              </div>
            ) : (
              <label className="cursor-pointer space-y-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto transition-transform hover:scale-110">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Click to upload your resume</p>
                  <p className="text-sm text-foreground/50 mt-1">PDF or DOCX (Max 5MB)</p>
                </div>
                <input type="file" className="hidden" onChange={handleUpload} accept=".pdf,.docx" />
              </label>
            )}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!file || isAnalyzing}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-primary/20"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Analyzing Resume...
              </>
            ) : (
              <>
                Analyze Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>

        <div>
          {result ? (
            <div className="bg-surface border border-surface/50 rounded-xl p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between pb-6 border-b border-surface/50">
                <div>
                  <h3 className="text-lg font-bold">Resume Score</h3>
                  <p className="text-sm text-foreground/60">Based on industry standards</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-yellow-400 flex items-center justify-center text-xl font-bold text-yellow-400">
                  {result.score}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm flex items-center text-green-400 mb-2">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {result.strengths.map((str, i) => (
                      <li key={i} className="text-sm text-foreground/80 pl-6 relative">
                        <span className="absolute left-2 top-2 w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        {str}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-sm flex items-center text-red-400 mb-2">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Areas to Improve
                  </h4>
                  <ul className="space-y-2">
                    {result.weaknesses.map((weak, i) => (
                      <li key={i} className="text-sm text-foreground/80 pl-6 relative">
                        <span className="absolute left-2 top-2 w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        {weak}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-surface/50">
                  <h4 className="font-semibold text-sm mb-3">AI Recommendations</h4>
                  <div className="space-y-3">
                    {result.recommendations.map((rec, i) => (
                      <div key={i} className="bg-background/50 border border-surface/50 p-3 rounded-lg text-sm text-foreground/80">
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full bg-surface/30 rounded-xl border border-surface/30 border-dashed flex flex-col items-center justify-center p-8 text-center text-foreground/40">
              <FileText className="w-12 h-12 mb-4 opacity-50" />
              <p>Upload a resume and click analyze to see job-specific feedback and optimizations.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;
