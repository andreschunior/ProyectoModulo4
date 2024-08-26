import React, { useState, useEffect } from "react";
import tiempoRestante from "./Type"

const ContadorTiempo: React.FC = () => {
  const calculatetiempoRestante = (): tiempoRestante => {
    const difference = +new Date("2024-07-10") - +new Date();
    let tiempoRestante: tiempoRestante = {
     dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };

    if (difference > 0) {
      tiempoRestante = {
       dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return tiempoRestante;
  };

  const [tiempoRestante, settiempoRestante] = useState<tiempoRestante>(calculatetiempoRestante());

  useEffect(() => {
    const timer = setTimeout(() => {
      settiempoRestante(calculatetiempoRestante());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(tiempoRestante).forEach((interval) => {
    if (!tiempoRestante[interval as keyof tiempoRestante]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {tiempoRestante[interval as keyof tiempoRestante]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <div>
          Termina en: {timerComponents}
        </div>
      ) : (
        <div>La oferta ha terminado</div>
      )}
    </div>
  );
};

export default ContadorTiempo;


          
                                                            