// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { cardsMock } from "@/components/CardsHome/dataBaseHome";
// import { Navbar } from "@/components/navbar";

// const DetalleProducto: React.FC = () => {
//   const { id } = useParams();
//   const productId = Number(id);
//   const product = cardsMock.find((card) => card.id === productId);

//   const [rating, setRating] = useState<number>(0);

//   useEffect(() => {
//     // Generar un número aleatorio entre 3 y 5
//     const randomRating = Math.random() * (5 - 3) + 3;
//     setRating(parseFloat(randomRating.toFixed(1)));
//   }, []);

//   if (!product) {
//     return <div>Producto no encontrado</div>;
//   }

//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <div className="flex items-center ml-2">
//         {Array(fullStars)
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
//         {halfStar && (
//           <svg
//             className="w-4 h-4 text-yellow-300"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 22 20"
//           >
//             <path d="M11 16.5L6.518 18.875a1.534 1.534 0 0 1-2.226-1.617l.863-5.031-3.656-3.563a1.535 1.535 0 0 1 .868-2.62l5.051-.734L9.36 1.27a1.534 1.534 0 0 1 2.752 0l2.259 4.577 5.051.734a1.523 1.523 0 0 1 .868 2.62l-3.656 3.563.863 5.031a1.532 1.532 0 0 1-2.226 1.616L11 16.5Z" />
//           </svg>
//         )}
//         {Array(emptyStars)
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
//         <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
//           {rating.toFixed(1)}
//         </span>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />
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
//             </h1>
//             <div className="flex items-center text-2xl text-orange-500 mb-2">
//               <p>Precio: ${product.price}</p>
//               {renderStars(rating)}
//             </div>
//             <p className="text-gray-700 mb-2">
//               Descripción: {product.descripcion}
//             </p>
            
//             <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
            
//             <button
//               type="button"
//               className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-500 dark:hover:bg-red-800 hover:scale-105 transition-transform duration-300"
//             >
//               <svg
//                 className="w-3.5 h-3.5 me-2"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 18 21"
//               >
//                 <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//               </svg>
//               Buy now
//             </button>
//             {/* Otros elementos de la página */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetalleProducto;
