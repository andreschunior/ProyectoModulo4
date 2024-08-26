"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import { CarritoContext } from "../../context/ContextoCarrito"
import BannerOferta from "@/components/BannerOfertas/BannerOferta";
import credito from "../../../Pics/Banner Credito 2 .png"
import sinIntereses from "../../../Pics/pagoSinIntereses.png"
import ContadorTiempo from "@/components/ContadorTiempo/ContadorTiempo";
import { obtenerProductosById } from "@/helpers/ProductsHelpers";
import CardHomeProps from "@/components/CardsHome/Types";


const DetalleProducto: React.FC = () => {
  const { id } = useParams();
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
          descripcion: product.description // Asegúrate de que 'description' se pase como 'descripcion'
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
  }, [productId]); 

  if (!product) {
    return <div>Producto no encontrado </div>; // O manejar la carga de otra manera
  }
  


  // Generar un número aleatorio entre 3 y 5
  const rating = Math.round(Math.random() * (5 - 3) + 3);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center ml-2">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        {Array(5 - rating)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              className="w-4 h-4 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        <span className="ml-2 text-sm font-semibold">{rating}.0</span>
      </div>
    );
  };

  return (
    <>
      
      <div className="container mx-auto mt-8 relative">
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mr-10">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="flex-grow relative ml-6">
            <div className="bg-green-300 p-4 text-sm font-bold top-0 left-0 right-0 flex justify-between z-10">
              <p>Envío gratis</p>
              <p className="text-gray-600">Oferta especial para ti</p>
            </div>
            <h1 className="text-2xl font-bold mb-4 relative z-0 mt-2">
              {product.name}
              <div className="mt-2">
              {renderStars(rating)}
              </div>
            </h1>
            <div className="flex items-center text-2xl text-orange-500 mb-2">
              <p>Precio: ${product.price}</p>
              <p className="text-lg text-black ml-2 ">Pagar</p>
              <p className="ml-1">${product.price/5}</p>
              <p className="text-lg text-black ml-2 " >hoy</p>
              
            </div>
            <img className="mt-2 ml-4" src={sinIntereses.src}  />
            <p className="text-gray-700 mb-2">
              Descripción: {product.description}
            </p>
            <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            <select className="mt-2 border rounded-md px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            <div className="flex flex-col items-center mt-4">
  {/* Botón */}
  <button  onClick={handleAgregarAlCarrito}
    type="button"className=" rounded-xl text-xl justify-center w-4/5 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-500 dark:hover:bg-red-800 hover:scale-105 transition-transform duration-300 relative  " >
    {/* Contenedor del icono y el texto "Buy now" */}
    <div className="flex items-center">
      {/* Icono de carrito */}
      <svg
        className="w-5 h-5 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 21"
      >
        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
      </svg>
      {/* Texto "Buy now" */}
      Buy now
    </div>
  </button>
  {/* Texto "Casi agotado" debajo del botón */}
  <span className="text-sm text-red-500 mt-2">Casi agotado</span>
</div> 
<div className="bg-pink-200 p-4 text-sm font-bold top-0 left-0 right-0 flex justify-center z-10  ">
    
              <ContadorTiempo/>
            </div>
 
            {/* Otros elementos de la página */}
            <BannerOferta imageUrl={credito.src} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default DetalleProducto;






//codigo para utilizar datos mock

// const DetalleProducto: React.FC = () => {
//   const { id } = useParams();
//   const productId = Number(id);
//   const product = cardsMock.find((card) => card.id === productId);

//   if (!product) {
//     return <div>Producto no encontrado</div>;
//   }

//   // Generar un número aleatorio entre 3 y 5
//   const rating = Math.round(Math.random() * (5 - 3) + 3);

//   const renderStars = (rating: number) => {
//     return (
//       <div className="flex items-center ml-2">
//         {Array(rating)
//           .fill(0)
//           .map((_, index) => (
//             <svg
//               key={index}
//               className="w-4 h-4 text-yellow-300"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           ))}
//         {Array(5 - rating)
//           .fill(0)
//           .map((_, index) => (
//             <svg
//               key={index}
//               className="w-4 h-4 text-gray-200"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 22 20"
//             >
//               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//             </svg>
//           ))}
//         <span className="ml-2 text-sm font-semibold">{rating}.0</span>
//       </div>
//     );
//   };

//   return (
//     <>
      
//       <div className="container mx-auto mt-8 relative">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="object-cover w-full h-auto"
//             />
//           </div>
//           <div className="flex-grow relative ml-5">
//             <div className="bg-green-300 p-4 text-sm font-bold top-0 left-0 right-0 flex justify-between z-10">
//               <p>Envío gratis</p>
//               <p className="text-gray-600">Oferta especial para ti</p>
//             </div>
//             <h1 className="text-2xl font-bold mb-4 relative z-0 mt-2">
//               {product.name}
//               <div className="mt-2">
//               {renderStars(rating)}
//               </div>
//             </h1>
//             <div className="flex items-center text-2xl text-orange-500 mb-2">
//               <p>Precio: ${product.price}</p>
//               <p className="text-lg text-black ml-2 ">Pagar</p>
//               <p className="ml-1">${product.price/5}</p>
//               <p className="text-lg text-black ml-2 " >hoy</p>
              
//             </div>
//             <img className="mt-2 ml-4" src={sinIntereses.src}  />
//             <p className="text-gray-700 mb-2">
//               Descripción: {product.descripcion}
//             </p>
//             <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
//             <select className="mt-2 border rounded-md px-2 py-1">
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//               </select>
//             <div className="flex flex-col items-center mt-4">
//   {/* Botón */}
//   <button
//     type="button"className=" rounded-xl text-xl justify-center w-4/5 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-500 dark:hover:bg-red-800 hover:scale-105 transition-transform duration-300 relative  " >
//     {/* Contenedor del icono y el texto "Buy now" */}
//     <div className="flex items-center">
//       {/* Icono de carrito */}
//       <svg
//         className="w-5 h-5 me-2"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 18 21"
//       >
//         <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//       </svg>
//       {/* Texto "Buy now" */}
//       Buy now
//     </div>
//   </button>
//   {/* Texto "Casi agotado" debajo del botón */}
//   <span className="text-sm text-red-500 mt-2">Casi agotado</span>
// </div> 
// <div className="bg-pink-200 p-4 text-sm font-bold top-0 left-0 right-0 flex justify-center z-10  ">
    
//               <ContadorTiempo/>
//             </div>
 
//             {/* Otros elementos de la página */}
//             <BannerOferta imageUrl={credito.src} />
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default DetalleProducto;








// "use client";

// import React from "react";
// import { useParams } from "next/navigation";
// import { cardsMock } from "@/components/CardsHome/dataBaseHome";
// import { Navbar } from "@/components/navbar";
// import DetalleProducto from "@/components/DetalleProducto/DetallePRoducto";

// const DetalleProductoVista: React.FC = () => {

//   return (
//     <>
//       <DetalleProducto/>
//       </>
//   );
// };

// export default DetalleProductoVista;
