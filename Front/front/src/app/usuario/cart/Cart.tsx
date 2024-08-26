"use client";
import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '@/app/context/ContextoCarrito';
import CarritoComprasCard from '../../../components/CardCarritoCompras/CardCarritoCompras';
import MetodosDePago from "../../../Pics/metodosPago.png";
import CertificadosSeguridad from "../../../Pics/CertificadosSeguridad.png";
import { createOrder } from '@/helpers/OrdersHelpers';
import { useRouter } from 'next/navigation';

const CarritoCompras: React.FC = () => {
  const { productosEnCarrito } = useContext(CarritoContext);
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Acceder a 'userdata' desde localStorage y actualizar el estado
    const storedUserData = localStorage.getItem('userdata');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const generateRandomSold = (): number => {
    return Math.floor(Math.random() * 200) + 1;
  };

  const handlePago = async () => {
    if (!userData || !userData.token) {
      alert('Error: Usuario no autenticado.');
      return;
    }
    if (productosEnCarrito.length <= 0) {
      alert('su carrito está vacío');
      return;
    }

    const idProducts = productosEnCarrito
      .map((product) => product.id)
      .filter((id): id is number => id !== undefined);

    try {
      await createOrder(idProducts, userData.token);
      alert("La compra se realizó con éxito");
      router.push('http://localhost:3001/home');
      localStorage.removeItem('productosEnCarrito');
    } catch (error) {
      alert('Error al procesar el pago. Por favor, inténtelo de nuevo.');
    }
  };

  const totalSumSinDescuento = productosEnCarrito.reduce((sum, item) => sum + item.price * 1.5, 0);
  const TotalDescuento = productosEnCarrito.reduce((sum, item) => sum + item.price * 0.5, 0);
  const TotalCarrito = productosEnCarrito.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 h-screen">
      <div className="md:w-3/4 order-2 md:order-1 overflow-y-auto space-y-4">
        {productosEnCarrito.length > 0 ? (
          productosEnCarrito.map((item) => (
            <CarritoComprasCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
              categoryId={item.categoryId}
              description={item.description}
              soldRecently={generateRandomSold()}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-xl">No hay nada en el carrito</p>
          </div>
        )}
      </div>

      <div className="md:w-1/4 order-1 md:order-2 bg-white rounded-lg shadow-md p-4 overflow-y-auto sticky top-0 min-h- md:min-h-0">
        <h1 className="text-2xl font-semibold mb-4">Resumen del pedido</h1>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total Articulos</h2>
          <p className="text-xl font-bold text-gray-500 line-through">${totalSumSinDescuento.toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg font-semibold">Descuento de Articulos</h2>
          <p className="text-xl font-bold text-orange-500">- ${TotalDescuento.toFixed(2)}</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg font-semibold">Total Estimado</h2>
          <p className="text-2xl font-bold text-orange-500">${TotalCarrito.toFixed(2)}</p>
        </div>

        <div className='justify-center flex mt-6 mb-6'>
          <button
            onClick={handlePago}
            type="button"
            className=" text-xl justify-center w-4/5 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-red-500 dark:hover:bg-red-800 hover:scale-105 transition-transform duration-300 relative">
            <div className="flex items-center">
              <svg className="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
              Pagar
            </div>
          </button>
        </div>

        <p className="text-xs font-bold text-gray-500 mt-2">La disponibilidad y el precio de los artículos no están garantizados hasta que se finalice el pago.</p>
        <p className="text-xl font-bold text-black mt-2">No se te cobrará hasta que revises este pedido en la página siguiente</p>
        <p className="text-base font-bold text-green-600 mt-2">Henry se compromete a proteger su información de pago.</p>
        <p className="text-lg text-gray-800 mt-2">Seguimos los estándares PCI DSS, utilizamos un cifrado sólido y realizamos revisiones periódicas de su sistema para proteger su privacidad.</p>
        <p className="text-xl font-bold text-black mt-2">1. Metodos de Pago</p>
        <div className='w-80'>
          <img src={MetodosDePago.src} alt={"metodos de pago"} className="w-full h-auto rounded-md mt-4" />
          <p className="text-xl font-bold text-black mt-2">2. Certificación de seguridad</p>
          <img src={CertificadosSeguridad.src} alt={"metodos de pago"} className="w-full h-auto rounded-md mt-4" />
        </div>
        <p className="text-2xl font-bold text-black mt-4">Entrega Garantizada</p>
        <p className="text-base font-bold text-gray-500 mt-2">$5.00 de crédito por retraso</p>
        <p className="text-base font-bold text-gray-500 mt-2">Reembolso por 15 días sin actualizaciones</p>
        <p className="text-base font-bold text-gray-500 mt-2">Devolución si el articulo está dañado</p>
        <p className="text-base font-bold text-gray-500 mt-2">Reembolso por 30 días sin entrega</p>
      </div>
    </div>
  );
};

export default CarritoCompras;

