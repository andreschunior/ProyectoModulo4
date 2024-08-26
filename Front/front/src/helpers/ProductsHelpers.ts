// helpers/api.js
import IProduct from '../../interface/IProducts';
import { CardHomeProps } from '../components/CardsHome/Types';


export async function obtenerProductos(): Promise<CardHomeProps[]> {
  try {
    const respuesta = await fetch('http://localhost:3000/products',{
        next: {revalidate: 3600}
    })
    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos');
    }
    const productos: CardHomeProps[] = await respuesta.json();
    return productos;
  } catch (error) {
    console.error('Hubo un problema con la petición al servidor:', error);
    return []; // Devuelve un array vacío en caso de error
  }
}

export async function obtenerProductosById(id: number): Promise<CardHomeProps | undefined> {
  try {
    const products = await obtenerProductos(); 
    const productoDetail = products.find((product) => product.id === id);

    if (!productoDetail) throw new Error("producto no encontrado");
    return productoDetail;
   
  } catch (error: any) {
    throw new Error(error.message);
  }
}





export async function obtenerProductosPorCategoria(categoryId: number): Promise<CardHomeProps[]> {
  try {
    const products = await obtenerProductos();
    const productosFiltrados = products.filter((product) => product.categoryId === categoryId);
    return productosFiltrados;
  } catch (error: any) {
    throw new Error(error.message);
  }
}







