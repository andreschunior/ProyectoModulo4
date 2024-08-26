// /components/Categorias/CategoriasGroups.tsx

"use client"
import React, { useState } from "react";
import Categorias from "./CategoriasButtons";
import Smartphone from "../../Pics/smartphone.png";
import laptops from "../../Pics/laptops.png";
import tablets from "../../Pics/tablets.png";
import audifonos from "../../Pics/audifonos.png";
import camaras from "../../Pics/camaras.png";
import impresoras from "../../Pics/impresoras.png";
import monitores from "../../Pics/monitores.png";
import almacenamiento from "../../Pics/almacenamiento.png";
import accesorios from "../../Pics/accesorios.png";
import Link from "next/link"; // Importa Link de Next.js

const CategoriasGroups: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleFilter = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className="mb-4 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Categorias
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4 md:gap-8 ">
        <Link href={`/producto/categoryId/${1}`}>
          <Categorias imagen={Smartphone.src} name="Smartphone" categoryId={1} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${2}`}>
          <Categorias imagen={laptops.src} name="Laptops" categoryId={2} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${3}`}>
          <Categorias imagen={tablets.src} name="Tablets" categoryId={3} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${4}`}>
          <Categorias imagen={audifonos.src} name="Audífonos" categoryId={4} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${5}`}>
          <Categorias imagen={camaras.src} name="Cámaras" categoryId={5} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${6}`}>
          <Categorias imagen={impresoras.src} name="Impresoras" categoryId={6} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${7}`}>
          <Categorias imagen={monitores.src} name="Monitores" categoryId={7} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${8}`}>
          <Categorias imagen={almacenamiento.src} name="Almacenamiento" categoryId={8} onFilter={handleFilter} />
        </Link>
        <Link href={`/producto/categoryId/${9}`}>
          <Categorias imagen={accesorios.src} name="Accesorios" categoryId={9} onFilter={handleFilter} />
        </Link>
      </div>
    </>
  );
};

export default CategoriasGroups;
