import React from "react";

const Footer: React.FC = () => {
            return (
                    <>
                    

<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.soyhenry.com" className="hover:underline">SoyHenry™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="http://localhost:3001/home" className="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Mas Vendidos</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Categorias</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Ofertas</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Servicio al Cliente</a>
        </li>
    </ul>
    </div>
</footer>

                    </>
                                                                       

            )
}

export default Footer