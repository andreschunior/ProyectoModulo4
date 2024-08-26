"use client"
import React, { useState } from 'react';
import CarritoComprasCard from '../CardCarritoCompras/CardCarritoCompras';
import { CarritoCompraCardsProps } from '../CardCarritoCompras/Types'; // Supongamos que tienes un tipo Producto definido en Types.ts

const CarritoDeCompras: React.FC = () => {
  const [carrito, setCarrito] = useState<CarritoCompraCardsProps[]>([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto: CarritoCompraCardsProps) => {
    setCarrito([...carrito, producto]);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (index: number) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      {/* Renderizar los productos en el carrito */}
      {carrito.map((producto, index) => (
        <div key={index}>
          <CarritoComprasCard
            id={producto.id}          
            name={producto.name}
            price={producto.price}
            image={producto.image}
            description={producto.description}
            soldRecently={producto.soldRecently ?? 0}
          />
          <button onClick={() => eliminarDelCarrito(index)}>Eliminar del carrito</button>
        </div>
      ))}
    </div>
  );
};

export default CarritoDeCompras;
