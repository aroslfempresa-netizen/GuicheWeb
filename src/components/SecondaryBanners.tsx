import React from 'react';

const secondaryBanners = [
  'https://s3.guicheweb.com.br/banners/23-02-2026_11-47-41.jpg',
  'https://cdn.guicheweb.com.br/gw-bucket/imagenseventos/05-02-2026_11-57-08.jpg',
  'https://cdn.guicheweb.com.br/gw-bucket/imagenseventos/09-04-2026_10-40-04.png',
];

const SecondaryBanners: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {secondaryBanners.map((banner, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <img 
              src={banner} 
              alt={`Promocional ${index + 1}`} 
              className="w-full h-full object-cover aspect-[16/9]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryBanners;
