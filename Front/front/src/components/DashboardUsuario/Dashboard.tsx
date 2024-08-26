"use client";
import React, { useState, useEffect } from "react";
import profilePhoto from "../../Pics/avatarLogin1.png";
import IUser from "../../../interface/Interface/IUser"
import Link from "next/link";

const Dashboard: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [userData, setUserData] = useState<IUser | null>(null); 

  useEffect(() => {
    const userDataString = localStorage.getItem('userdata');
    if (userDataString) {
      const userDataObject = JSON.parse(userDataString);
      setUserData(userDataObject.user);
    }
  }, []);

  const handleRevealClick = () => {
    setIsRevealed(true);
  };

  const handleHideClick = () => {
    setIsRevealed(false);
  };
  return (
    <>
      <div className="flex justify-center">
        <img className="rounded w-80 h-80" src={profilePhoto.src} alt="Extra large avatar" />
      </div>

      {/* datos del usuario */}
      <form className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <div className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600">
          {userData && isRevealed ? userData.email : '*****@*****.com'} {/* Verificación de userData y isRevealed */}
          </div>
          <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
            Correo Electronico
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          {/* <div className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600">
          {userData && isRevealed ? userData.password : '*******'} 
          </div>
          <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
            Contraseña
          </label> */}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <div className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600">
          {userData && isRevealed ? userData.name : '**********'} {/* Verificación de userData y isRevealed */}
          </div>
          <label htmlFor="floating_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
            Nombre
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <div className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600">
          {userData && isRevealed ? userData.address : '**********'} {/* Verificación de userData y isRevealed */}
          </div>
          <label htmlFor="floating_address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
            Direccion
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <div className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600">
          {userData && isRevealed ? userData.email : '**********'} {/* Verificación de userData y isRevealed */}
          </div>
          <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]">
            Numero de telefono
          </label>
        </div>
        <div className="flex justify-center space-x-5">
          {isRevealed ? (
            <button
              type="button"
              onClick={handleHideClick}
              className="flex-1 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Esconder
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRevealClick}
              className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Mostrar
            </button>
          )}
          <Link href="/usuario/orders" className="flex-1 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
            Orders
          </Link>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
