import React from 'react';
import { Search, LogOut, LayoutDashboard } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoClick: () => void;
  onDashboardClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn, 
  onLoginClick, 
  onLogoClick, 
  onDashboardClick,
  onLogout 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black h-16 z-50 flex items-center px-4 md:px-8">
      <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="cursor-pointer flex-shrink-0" onClick={onLogoClick}>
          <img 
            src="https://s3.guicheweb.com.br/nova_marca/logogw.png" 
            alt="Guichê Web" 
            className="h-8 md:h-10"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-xl relative">
          <input
            type="text"
            placeholder="Pesquisar eventos..."
            className="w-full bg-gray-800 text-white rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-auto">
          {isLoggedIn ? (
            <>
              <button 
                onClick={onDashboardClick}
                className="flex items-center gap-2 text-white hover:text-green-500 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="hidden sm:inline">Meus Ingressos</span>
              </button>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </>
          ) : (
            <button
              onClick={onLoginClick}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors text-sm uppercase tracking-wider"
            >
              Entrar
            </button>
          )}
          
          <div className="hidden sm:flex items-center">
             <img src="https://s3.guicheweb.com.br/responsivo/imgs/pt.png" alt="BR" className="w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
