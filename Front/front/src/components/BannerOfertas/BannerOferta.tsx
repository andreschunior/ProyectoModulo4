"use client";
import React from "react";
import { BannerOfertaProps } from "./Types";

const BannerOferta: React.FC<BannerOfertaProps> = ({ imageUrl }) => {
    return (
        <div className="xl (1280px) width: 100vw ; ">
            <button
                className="mt-16 width: 100vw"
                style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                }}
                onClick={() => {
                    // Agrega aquí la lógica para manejar el clic en el botón
                    console.log("Botón de imagen clicado");
                }}
                
            >
                
                <img
                    src={imageUrl}
                    alt="Banner de Crédito"
                    style={{
                        width: "100%",
                        height: "auto",
                        transition: "filter 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        if (e.target instanceof HTMLElement) {
                            e.target.style.filter = "brightness(1.2)";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (e.target instanceof HTMLElement) {
                            e.target.style.filter = "brightness(1)";
                        }
                    }}
                />
            </button>
        </div>
    );
};

export default BannerOferta;
