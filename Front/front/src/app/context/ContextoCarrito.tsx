"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CarritoCompraCardsProps } from "../../components/CardCarritoCompras/Types";

interface CarritoProviderProps {
    children: React.ReactNode;
}

interface CarritoContextProps {
    productosEnCarrito: CarritoCompraCardsProps[];
    agregarProductoAlCarrito: (producto: CarritoCompraCardsProps) => void;
}

const CarritoContext = createContext<CarritoContextProps>({
    productosEnCarrito: [],
    agregarProductoAlCarrito: () => {}
});

const CarritoProvider: React.FC<CarritoProviderProps> = ({ children }) => {
    const [productosEnCarrito, setProductosEnCarrito] = useState<CarritoCompraCardsProps[]>(() => {
        if (typeof window !== 'undefined') {
            const carritoGuardado = localStorage.getItem('productosEnCarrito');
            return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        }
        return [];
    });

    const agregarProductoAlCarrito = (producto: CarritoCompraCardsProps) => {
        setProductosEnCarrito(productosActuales => {
            const carritoActualizado = [...productosActuales, producto];
            if (typeof window !== 'undefined') {
                localStorage.setItem('productosEnCarrito', JSON.stringify(carritoActualizado));
            }
            return carritoActualizado;
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
        }
    }, [productosEnCarrito]);

    return (
        <CarritoContext.Provider value={{ productosEnCarrito, agregarProductoAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
