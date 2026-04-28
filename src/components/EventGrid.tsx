import React from 'react';

const eventImages = [
  'https://s3.guicheweb.com.br/imagenseventos/30-03-2023_19-29-56.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/22-04-2026_12-23-28.png',
  'https://s3.guicheweb.com.br/imagenseventos/07-04-2026_11-11-33.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/07-04-2026_11-59-45.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/07-04-2026_12-04-39.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/06-04-2026_10-36-17.jpeg',
  'https://s3.guicheweb.com.br/imagenseventos/26-04-2026_15-44-17.png',
  'https://s3.guicheweb.com.br/imagenseventos/17-04-2026_15-59-39.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_11-42-16.png',
  'https://s3.guicheweb.com.br/imagenseventos/27-04-2026_16-53-25.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_14-48-43.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/26-04-2026_15-44-44.png',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_23-37-37.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/27-04-2026_11-35-44.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/12-12-2025_09-06-30.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/22-04-2026_15-14-00.png',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_11-43-24.png',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_15-46-25.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/09-03-2026_17-12-01.jpg',
  'https://s3.guicheweb.com.br/imagenseventos/24-04-2026_23-49-52.jpg',
];

const EventGrid: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {eventImages.map((image, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
              <img 
                src={image} 
                alt={`Evento ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <button className="w-full bg-white text-black py-2 rounded-lg font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  Ver Ingressos
                </button>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-semibold truncate text-gray-800">Evento Especial {index + 1}</h3>
              <p className="text-xs text-gray-500">Cidade, UF</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-lg font-bold transition-colors uppercase text-sm tracking-widest">
          Carregar mais eventos
        </button>
      </div>
    </>
  );
};

export default EventGrid;
