import React from 'react';
import * as Icons from 'lucide-react';

const Instagram = (Icons as any).Instagram || Icons.Camera;
const Facebook = (Icons as any).Facebook || Icons.Share2;
const Youtube = (Icons as any).Youtube || Icons.Play;
const Twitter = (Icons as any).Twitter || (Icons as any).X || Icons.MessageSquare;

interface FooterProps {
  onSocialClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSocialClick }) => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Institucional */}
        <div>
          <h4 className="font-bold text-lg mb-4">Institucional</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">Contato</li>
            <li className="hover:text-green-500 cursor-pointer">Nossa Marca</li>
            <li className="hover:text-green-500 cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Minha Conta */}
        <div>
          <h4 className="font-bold text-lg mb-4">Minha Conta</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Meus pedidos</li>
            <li className="hover:text-green-500 cursor-pointer">Alterar Senha</li>
            <li className="hover:text-green-500 cursor-pointer">Lembrar Senha</li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h4 className="font-bold text-lg mb-4">Ajuda</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-500 cursor-pointer">Dúvidas frequentes</li>
            <li className="hover:text-green-500 cursor-pointer">Termos e políticas</li>
            <li className="hover:text-green-500 cursor-pointer">Antifraude</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
          <div className="flex gap-4 mb-6">
            <button onClick={onSocialClick} className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button onClick={onSocialClick} className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button onClick={onSocialClick} className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </button>
            <button onClick={onSocialClick} className="bg-gray-800 p-2 rounded-full hover:bg-black transition-colors border border-gray-700">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <img src="https://logodownload.org/wp-content/uploads/2017/05/google-play-badge.png" alt="Google Play" className="h-10 cursor-pointer" />
            <img src="https://logodownload.org/wp-content/uploads/2017/05/app-store-badge.png" alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>Guichê Web Comercialização de Ingressos Ltda - CNPJ: 18.797.249/0001-35</p>
        <p className="mt-2">Todos os preços e condições comerciais estão sujeitos a alteração comercial sem aviso prévio.</p>
        <p className="mt-1">© Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
