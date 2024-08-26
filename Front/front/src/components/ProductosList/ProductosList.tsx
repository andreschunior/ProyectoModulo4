"use client"

import React, { useEffect, useState } from "react";
import { CardsHome } from "../CardsHome/CardsHome";
import CardHomeProps from "../CardsHome/Types";
import { obtenerProductos } from "@/helpers/ProductsHelpers";
import { CardProductosList } from "./CardProductosList";


const ProductoList: React.FC = () => {

    const [productos, setProductos] = useState<CardHomeProps[]>([]);

    useEffect(() => {
      const cargarProductos = async () => {
        const productosObtenidos = await obtenerProductos();
      
        setProductos(productosObtenidos);
      };
  
      cargarProductos();
    }, []);
            return (
                <>
                <div className="w-full flex justify-center">
                 
                </div>
                <div className="relative group px-4">
                  {productos.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {productos.map((producto) => (
                        <div className="p-2" key={producto.id}>
                          <CardProductosList
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
                    <div>Cargando productos...</div>
                  )}
                </div>
              </>

            )
}
export default ProductoList