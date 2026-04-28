import React, { useState } from 'react';
import { X, User, Lock, AlertCircle, CheckCircle2, ShoppingCart, Users } from 'lucide-react';

// Login Modal
export const LoginModal: React.FC<{ onClose: () => void; onLogin: () => void }> = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="bg-black p-8 text-center relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <img src="https://s3.guicheweb.com.br/nova_marca/logogw.png" alt="Logo" className="h-10 mx-auto mb-4" />
          <h2 className="text-white text-xl font-bold">Acesse sua conta</h2>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="E-mail ou CPF" 
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="password" 
                placeholder="Sua senha" 
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all"
              />
            </div>
          </div>
          <button 
            onClick={onLogin}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all active:scale-95"
          >
            ENTRAR
          </button>
          <p className="text-center text-sm text-gray-500">
            Ainda não tem conta? <span className="text-green-600 font-bold cursor-pointer">Cadastre-se</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Transfer Modal
export const TransferModal: React.FC<{ ticketId: string; onClose: () => void; onConfirm: () => void }> = ({ ticketId, onClose, onConfirm }) => {
  const [cpf, setCpf] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  const handleConfirm = () => {
    if (cpf.length >= 11 && agreed) {
      setStep('success');
      setTimeout(() => {
        onConfirm();
      }, 3000);
    }
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl w-full max-w-sm p-8 text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sucesso!</h2>
          <p className="text-gray-600 mb-4">Ingresso transferido com sucesso!</p>
          <div className="bg-blue-50 p-4 rounded-xl text-blue-700 text-sm">
            O destinatário receberá um e-mail com os tickets para acesso.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-bold">Transferir Ingresso</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3 text-amber-800">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-xs leading-relaxed">
              Você está prestes a transferir o ingresso <strong>#{ticketId.slice(0, 8)}</strong>. 
              Certifique-se de que o CPF do destinatário esteja correto.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-gray-700 mb-1 block">CPF do Destinatário</span>
              <input 
                type="text" 
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="000.000.000-00" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500"
              />
            </label>

            <label className="flex gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-xs text-gray-500 leading-snug">
                Estou ciente de que esta operação é irreversível e o ingresso sairá da minha conta.
              </span>
            </label>
          </div>

          <button 
            disabled={!agreed || cpf.length < 11}
            onClick={handleConfirm}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-all"
          >
            CONFIRMAR TRANSFERÊNCIA
          </button>
        </div>
      </div>
    </div>
  );
};

// Purchase Modal
export const PurchaseModal: React.FC<{ onClose: () => void; onConfirm: (quantity: number, sector: string) => void }> = ({ onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);
  const [sector, setSector] = useState('');

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="bg-green-600 p-8 text-white relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="w-6 h-6" />
            <span className="font-bold tracking-widest text-sm uppercase">Adicionar Ingressos</span>
          </div>
          <h2 className="text-2xl font-bold">Manifesto Musical</h2>
          <p className="text-white/80">Escolha os ingressos para sua conta</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-gray-700">
                <Users className="w-5 h-5" />
                Quantidade
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:bg-gray-50"
                >-</button>
                <span className="w-6 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-bold hover:bg-gray-50"
                >+</button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-700">Setor</p>
              <div className="grid grid-cols-1 gap-2">
                {['Camarote - VIP', 'Premium - Open Bar', 'Premium (Inteira)', 'Premium (Solidária)'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSector(s)}
                    className={`text-left px-4 py-3 rounded-xl border-2 transition-all ${
                      sector === s ? 'border-green-500 bg-green-50 text-green-700 font-bold' : 'border-gray-100 hover:border-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            disabled={!sector}
            onClick={() => onConfirm(quantity, sector)}
            className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            CONFIRMAR E ADICIONAR
          </button>
        </div>
      </div>
    </div>
  );
};
