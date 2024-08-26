import React from 'react';
import { CarritoCompraCardsProps } from './Types';

const CarritoComprasCard: React.FC<CarritoCompraCardsProps & { soldRecently: number }> = ({ name, price, image, description, soldRecently }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row">

      <div className="md:w-1/4 flex-shrink-0">
        <img
          src={image || "imagen no encontrada"}
          alt={name}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="w-full pl-4 flex flex-col justify-between">
        <div>
          <div className="bg-green-300 p-4 text-sm font-bold top-0 left-0 right-0 flex justify-between z-10 flex-wrap">
            <p>Envío gratis</p>
            <p className="text-gray-600">Oferta especial para ti</p>
          </div>
          <h2 className="text-xl font-semibold mt-4">{name}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-4 flex justify-end">
            <div className="flex flex-col items-end">
              <span className="text-red-500 font-semibold text-2xl">Hoy ${price}</span>
              <span className="text-sm font-semibold text-gray-500 line-through">${(price * 1.5).toFixed(2)}</span>
            </div>
          </div>
          <div className="p-2 text-sm font-bold top-0 left-0 right-0 flex justify-between z-10 w-full mt-4">
            <p className="bg-red-400 inline-block p-2">Vendidos hace poco: {soldRecently}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoComprasCard;