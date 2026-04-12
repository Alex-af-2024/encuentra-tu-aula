import { useRef } from "react";
import Home, { HomeHandle } from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Aula } from "./types";

function App() {
  const homeRef = useRef<HomeHandle>(null);

  const handleNavigateHome = () => {
    if (homeRef.current) {
      homeRef.current.resetSearch();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectFromHistory = (codigo: string, aulaData: Aula) => {
    if (homeRef.current) {
      homeRef.current.displayAula(codigo, aulaData);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full pb-20 relative">
      <div className="max-w-md mx-auto w-full pt-4 px-4 pb-20 min-h-screen flex flex-col relative z-10">
        <Home ref={homeRef} />
      </div>
      
      {/* Background decorations for larger screens */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-200/50 blur-[100px] -z-10 pointer-events-none hidden md:block"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/50 blur-[100px] -z-10 pointer-events-none hidden md:block"></div>

      <Navbar
        onNavigateHome={handleNavigateHome}
        onSelectFromHistory={handleSelectFromHistory}
        onResetInput={() => homeRef.current?.resetSearch()}
      />
    </div>
  );
}

export default App;
