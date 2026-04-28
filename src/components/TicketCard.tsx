import React from 'react';
import { Share2, Calendar, MapPin, Ticket } from 'lucide-react';

interface TicketProps {
  id: string;
  eventName: string;
  date: string;
  onTransfer: (id: string) => void;
}

const TicketCard: React.FC<TicketProps> = ({ id, eventName, date, onTransfer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
      <div className="bg-green-600 p-4 text-white flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Ticket className="w-5 h-5" />
          <span className="font-bold text-sm tracking-widest">INGRESSO DIGITAL</span>
        </div>
        <span className="text-xs opacity-80">#{id.slice(0, 8)}</span>
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{eventName}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <Calendar className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-sm">Goiânia Arena, GO</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`} 
            alt="QR Code" 
            className="w-32 h-32 mix-blend-multiply"
          />
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">Apresente este código na portaria</p>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
        <button 
          onClick={() => onTransfer(id)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-green-600 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Transferir Ingresso
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
