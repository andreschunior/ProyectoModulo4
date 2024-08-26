"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CardsHome } from "../CardsHome/CardsHome";
import { obtenerProductos } from "../../helpers/ProductsHelpers";
import CardHomeProps from "../../components/CardsHome/Types"

// Definición de los botones de navegación personalizados
const PrevButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-gray-100 text-black cursor-pointer z-10 drop-shadow-xl"
  >
    <BsChevronCompactLeft size={40} />
  </button>
);

const NextButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-gray-100 text-black cursor-pointer z-10 drop-shadow-xl "
  >
    <BsChevronCompactRight size={40} />
  </button>
);

const CarrouselProducs: React.FC = () => {
  const [productos, setProductos] = useState<CardHomeProps[]>([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const productosObtenidos = await obtenerProductos();
      
      setProductos(productosObtenidos);
    };

    cargarProductos();
  }, []);
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Mostrar 4 tarjetas a la vez
    slidesToScroll: 1,
    prevArrow: <PrevButton />, // Uso del botón personalizado de retroceso
    nextArrow: <NextButton />, // Uso del botón personalizado de avance
    responsive: [
       {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        afterChange: () => console.log('Breakpoint 1600: Showing 4 slides'),
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        afterChange: () => console.log('Breakpoint 1400: Showing 3 slides'),
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        afterChange: () => console.log('Breakpoint 1024: Showing 3 slides'),
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        afterChange: () => console.log('Breakpoint 768: Showing 1 slide'),
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        afterChange: () => console.log('Breakpoint 480: Showing 1 slide'),
      },
    },
    ],
  };

  return (
    <div className="relative group px-4">
      <Slider {...settings}>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className="p-2" key={producto.id}>
              <CardsHome
                id={producto.id}
                name={producto.name}
                price={producto.price}
                stock={producto.stock}
                image={producto.image}
                categoryId={producto.categoryId}
              />
            </div>
          ))
        ) : (
          <div>Cargando productos...</div> // Puedes mostrar un spinner o mensaje de carga aquí
        )}
      </Slider>
    </div>
  );
};

export default CarrouselProducs;
