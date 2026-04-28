import React, { useState } from 'react';
import TicketCard from './TicketCard';
import { TransferModal } from './Modals';

interface TicketData {
  id: string;
  eventName: string;
  date: string;
  sector?: string;
}

interface DashboardProps {
  tickets: TicketData[];
  onTransfer: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ tickets, onTransfer }) => {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const handleTransferClick = (id: string) => {
    setSelectedTicket(id);
  };

  const confirmTransfer = () => {
    if (selectedTicket) {
      onTransfer(selectedTicket);
      setSelectedTicket(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-[60vh]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Meus Ingressos</h2>
          <p className="text-gray-500">Gerencie seus tickets e acessos aos eventos.</p>
        </div>
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {tickets.length} Ingressos Disponíveis
        </div>
      </div>

      {tickets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tickets.map((ticket) => (
            <TicketCard 
              key={ticket.id} 
              id={ticket.id}
              eventName={ticket.eventName}
              date={ticket.date}
              onTransfer={handleTransferClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-gray-400 text-lg">Você não possui ingressos no momento.</p>
        </div>
      )}

      {selectedTicket && (
        <TransferModal 
          ticketId={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onConfirm={confirmTransfer}
        />
      )}
    </div>
  );
};

export default Dashboard;
