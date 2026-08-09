import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-transparent overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="h-16 border-b border-surface/50 bg-background/50 backdrop-blur-xl flex items-center px-6 shrink-0 sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-foreground">CareerShield</h1>
          <div className="ml-auto flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
              ST
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
