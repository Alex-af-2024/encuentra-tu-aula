import { useState } from "react";
import HistoryModal from "../History/HistoryModal";
import HelpModal from "../Help/HelpModal";
import { Aula } from "../../types";

interface NavbarProps {
  onNavigateHome: () => void;
  onSelectFromHistory: (codigo: string, aulaData: Aula) => void;
  onResetInput: () => void;
}

const Navbar = ({ onNavigateHome, onSelectFromHistory, onResetInput }: NavbarProps) => {
  const [showHistory, setShowHistory] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handleHomeClick = () => {
    if (onResetInput) onResetInput();
    onNavigateHome();
  };

  const NavButton = ({ onClick, icon, label }: { onClick: () => void, icon: React.ReactNode, label: string }) => (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className="flex flex-col items-center justify-center p-2 text-slate-500 hover:text-accent transition-colors active:scale-95 group"
    >
      <div className="bg-slate-100 group-hover:bg-teal-50 group-hover:shadow-sm rounded-full p-3 transition-all mb-1">
        {icon}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </button>
  );

  return (
    <>
      {/* Desktop / Mobile container centered within max-w-md */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none z-40">
        <div className="w-full max-w-md pointer-events-auto">
          <nav className="glass-card m-4 px-6 py-2 flex justify-between items-center shadow-2xl border-white/40">
            <NavButton 
              onClick={handleHomeClick} 
              label="Inicio" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              } 
            />

            <NavButton 
              onClick={() => setShowHistory(true)} 
              label="Historial" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              } 
            />

            <NavButton 
              onClick={() => setShowHelp(true)} 
              label="Ayuda" 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              } 
            />
          </nav>
        </div>
      </div>

      {showHistory && (
        <HistoryModal
          onClose={() => setShowHistory(false)}
          onSelectSearch={onSelectFromHistory}
        />
      )}

      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
};

export default Navbar;
