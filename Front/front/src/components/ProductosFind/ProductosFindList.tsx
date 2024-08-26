// pages/producto.tsx
"use client"
import React, { useEffect, useState, } from "react";
import { useParams } from "next/navigation";

import CardHomeProps from "@/components/CardsHome/Types";
import { obtenerProductosPorCategoria } from "@/helpers/ProductsHelpers";
import CardProductosFindList from "./CardProductosFindList";


const CategoriaProductos: React.FC = () => {
    const { categoryId } = useParams();
    const categoryIdNumber = categoryId ? Number(categoryId) : undefined;
  
    console.log("Category ID:", categoryIdNumber); // Verificar si el categoryId se está obteniendo correctamente
  
    const [productos, setProductos] = useState<CardHomeProps[]>([]);
    const [filteredProductos, setFilteredProductos] = useState<CardHomeProps[]>([]);
  
    useEffect(() => {
      const cargarProductos = async () => {
        if (categoryIdNumber !== undefined) {
          try {
            const productosObtenidos = await obtenerProductosPorCategoria(categoryIdNumber);
            setProductos(productosObtenidos);
          } catch (error) {
            console.error(error);
          }
        }
      };
  
      cargarProductos();
    }, [categoryIdNumber]);
  
    useEffect(() => {
      if (categoryIdNumber === undefined) {
        setFilteredProductos(productos);
      } else {
        const filtered = productos.filter((producto) => producto.categoryId === categoryIdNumber);
        setFilteredProductos(filtered);
      }
    }, [categoryIdNumber, productos]);
  return (
    <>
      <div className="w-full flex justify-center"></div>
      <div className="relative group px-4">
        {filteredProductos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProductos.map((producto) => (
              <div className="p-2" key={producto.id}>
                <CardProductosFindList
                  id={producto.id}
                  name={producto.name}
                  price={producto.price}
                  stock={producto.stock}
                  image={producto.image}
                  categoryId={producto.categoryId}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>No hay Productos Disponibles</div>
        )}
      </div>
    </>
  );
};

export default CategoriaProductos;

