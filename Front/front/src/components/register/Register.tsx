"use client"

import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica
    for (const key in form) {
      if (form[key as keyof typeof form] === '') {
        alert('Por favor completa todos los campos');
        return;
      }
    }

    // Validar que el email sea un correo electrónico
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      alert('Por favor ingresa un correo electrónico válido');
      return;
    }

    // Validar que el teléfono sea un número
    if (isNaN(Number(form.phone))) {
      alert('El teléfono debe ser un número');
      return;
    }

    // Validar que las contraseñas coincidan
    if (form.password !== form.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          address: form.address,
          phone: form.phone,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registro exitoso');
        // reestablecer los campos del formulario
        setForm({
          name: '',
          email: '',
          address: '',
          phone: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        throw new Error(data.message || 'Error en el registro');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocurrió un error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black text-lg mb-2" htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full p-2 rounded text-lg bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-lg mb-2" htmlFor="address">Dirección</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-lg mb-2" htmlFor="phone">Teléfono</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2" htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-black mb-2" htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña"
            className="w-full p-2 rounded bg-white text-black"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Registrarse'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
