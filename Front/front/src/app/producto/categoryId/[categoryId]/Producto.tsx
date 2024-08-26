// /pages/producto/index.tsx

import React from "react";
import CategoriasGroups from "@/components/Categorias/CategoriasGroups";
import ProductosFindList from "@/components/ProductosFind/ProductosFindList";

const Producto: React.FC = () => {
  return (
    <>
      <ProductosFindList  />
    </>
  );
};

export default Producto;