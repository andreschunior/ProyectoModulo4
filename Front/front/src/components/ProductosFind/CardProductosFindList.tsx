"use client"
import React, { useState, useContext, useEffect } from "react";
import { CarritoContext } from "../../app/context/ContextoCarrito";
import Styles from "../../components/CardsHome/CardsHome.module.css";
import { obtenerProductosById } from "@/helpers/ProductsHelpers";
import CardHomeProps from "../CardsHome/Types";

interface CardProductosFindListProps extends CardHomeProps {}

const CardProductosFindList: React.FC<CardProductosFindListProps> = ({
  id,
  name,
  price,
  stock,
  image,
  categoryId,
}) => {
  const { agregarProductoAlCarrito } = useContext(CarritoContext); // Utiliza el contexto del carrito
  const [product, setProduct] = useState<CardHomeProps | undefined>(undefined);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productoObtenido = await obtenerProductosById(id);
        setProduct(productoObtenido);
      } catch (error) {
        console.error(error);
        // Manejar el error como consideres necesario
      }
    };

    fetchProduct();
  }, [id]);

  const handleAgregarAlCarrito = () => {
    // Verifica si el usuario está logueado
    const usuarioLogueado = localStorage.getItem('userdata');

    if (usuarioLogueado) {
      if (product) {
        const productoParaCarrito = {
          ...product,
          description: product.description || "",
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

  if (!product) {
    return <div>No hay Productos Disponibles</div>;
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-8">
      <a href={`/producto/${id}`}>
        <div className={Styles["card-image-container"]}>
          <img
            className={`${Styles["card-image"]} hover:scale-105 transition-transform duration-300`}
            src={image || "error al cargar la imagen"}
            alt={`${name} image`}
          />
        </div>
      </a>
      <div className="px-5 pb-5 flex flex-col justify-between h-full">
        <div>
          <a href={`/producto/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <div className="flex justify-between items-center mt-3 sm:mt-6">
            <div>
              <span className="text-2xl font-bold text-orange-500 mr-2">${price?.toFixed(2)}</span>
              {/* <span className="text-sm font-semibold text-gray-500 line-through">${price * 1.5}</span> */}
            </div>
            <button
              onClick={handleAgregarAlCarrito}
              className="text-white bg-blue-800 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* Aquí puedes agregar las estrellas de valoración */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductosFindList;
