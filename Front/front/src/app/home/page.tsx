// src/app/home/page.tsx

import React from "react";
import Banner from "@/components/Banner/Banner";
import BannerOferta from "@/components/BannerOfertas/BannerOferta";// Importa el componente BannerCredito
import CarrouselProducs from "@/components/CarouselProductos/CarouselProductos";
import { Carrousel } from "@/components/Carrousel/Carrousel";
import credito from "../../Pics/Banner Credito 2 .png"
import ofertaRelampago from "../../Pics/ofertasRelampago.png"


import ProductoList from "@/components/ProductosList/ProductosList";
import CategoriasGroups from "@/components/Categorias/CategoriasGroups";


const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <CategoriasGroups/>
      <Carrousel/>
      <BannerOferta imageUrl={ofertaRelampago.src} />
      <CarrouselProducs /> 
      <BannerOferta imageUrl={credito.src} />
      <ProductoList/>
     
  
    </>
  );
};

export default Home;
