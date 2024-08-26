"use client"
import React, { useEffect, useState, useContext } from "react";
import { CarritoContext } from "../../app/context/ContextoCarrito"
import Styles from "./CardsHome.module.css";
import { CardHomeProps } from "./Types";
import { obtenerProductosById } from "@/helpers/ProductsHelpers"; 

export const CardsHome: React.FC<CardHomeProps> = ({ id, name, price, stock, image, categoryId }) => {
  // Verificación básica para asegurarse de que los props necesarios están presentes
  if (!id || !name || !price) {
    return <div>Cargando...</div>; // O puedes renderizar un componente de carga aquí
  }
  const productId = Number(id);
  const [product, setProduct] = useState<CardHomeProps | undefined>(undefined);
  const { agregarProductoAlCarrito } = useContext(CarritoContext); // Utiliza el contexto del carrito

  const handleAgregarAlCarrito = () => {
    // Verifica si el usuario está logueado
    const usuarioLogueado = localStorage.getItem('userdata');
  
    if (usuarioLogueado) {
      if (product) {
        const productoParaCarrito = {
          ...product,
          description: product.description
        };
        agregarProductoAlCarrito(productoParaCarrito);
        alert('Producto agregado al carrito');
      } else {
        console.log('No hay producto para agregar al carrito');
      }
    } else {
      alert('Debes iniciar sesión para agregar productos al carrito');
    }
  };
  
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productoObtenido = await obtenerProductosById(productId);
        setProduct(productoObtenido);
      } catch (error) {
        console.error(error);
        // Manejar el error como consideres necesario
      }
    };
  

    fetchProduct();
  }, [productId]); // Dependencia del efecto

  if (!product) {
    return <div>Producto no encontrado </div>; // O manejar la carga de otra manera
  }
  
  

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
      <a href={`/producto/${id}`}>
        <div className={Styles["card-image-container"]}>
          <div className={Styles["image-overlay"]} style={{ zIndex: 10 }}></div>
          <img className={`${Styles["card-image"]} hover:scale-105 transition-transform duration-300`} src={image || "error al cargar la imagen"} alt={`${name} image`} />
        </div>
      </a>
      <div className="px-5 pb-5 flex flex-col justify-between h-full">
        <div>
          <a href={`/producto/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <div className="flex justify-between items-center mt-3 sm:mt-6">
            <div>
              <span className="text-2xl font-bold text-orange-500 mr-2">${price}</span>
              <span className="text-sm font-semibold text-gray-500 line-through">${price * 1.5}</span>
            </div>

           <button 
            onClick={handleAgregarAlCarrito}
            className="text-white bg-blue-800 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
  Add to cart
</button>

          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
           
          </div>
        </div>
      </div>
    </div>
  );
};
