"use client";
import { getOrders } from "@/helpers/OrdersHelpers";
import React, { useEffect, useState } from "react";
import IOrder from "../../../interface/Interface/IOrder";
import IProduct from "../../../interface/IProducts";

export const OrdersView: React.FC = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const storedUserData = localStorage.getItem('userdata');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                setUserData(userData); // Actualiza el estado con los datos del usuario

                if (userData.token) {
                    const ordersResponse = await getOrders(userData.token);
                    setOrders(ordersResponse); // Actualiza el estado con las órdenes
                }
            }
        };

        fetchData(); // Llama a la función para obtener los datos
    }, []); // Asegúrate de pasar un array vacío como segundo argumento para que esto se ejecute una vez al montar el componente

    console.log(orders);

    return (
       <>
       <h1 className="text-2xl font-semibold mt-10 ml-10">Bienvenido {userData && userData.user.name}</h1>
       
       <div className="flex justify-center mt-4 ">
        
            <div className="max-w-xl w-full space-y-4  ">
                
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500 text-xl">No tienes órdenes</p>
                ) : (
                    <>
                        <h1 className="text-2xl font-semibold mt-10 ml-10">Tus Órdenes</h1>
                        {orders.map(order => (
                            <div key={order.id} className="bg-white rounded-lg shadow-md p-6 mb-6  ">
                                <h2 className="text-2xl font-semibold">Orden #{order.id}</h2>
                                <p className="text-gray-500 text-xl">Fecha: {new Date(order.date).toLocaleDateString()}</p>
                                <p className="text-gray-500 text-xl">Estado: {order.status}</p>
                                <h3 className="text-2xl font-semibold mt-4">Productos:</h3>
                                <ul className="list-disc list-inside ml-6">
                                    {order.products.map((product: IProduct) => (
                                        <li key={product.id} className="mb-4 ">
                                            <div className="flex items-center space-x-6">
                                                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-md" />
                                                <div>
                                                    <p className="text-gray-700 text-lg">Producto: {product.name}</p>
                                                    <p className="text-gray-700 text-lg">Precio: ${product.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
        </>
    );
};
