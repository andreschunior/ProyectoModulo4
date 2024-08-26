"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginUser = () => {
  
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validacion basica
    for (let key in form) {
      if (form[key] === '') {
        alert('Por favor completa todos los campos');
        return;
      }
    }

    // Validar que el email no tenga espacios en blanco
    if (/\s/.test(form.email)) {
      alert('El email no debe contener espacios en blanco');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {

        // Guardar el token en localStorage
        localStorage.setItem('userdata', JSON.stringify(data));

        console.log(localStorage);
        alert('Login successful');

        // Redirigir al usuario al homepage
         router.push('http://localhost:3001/home');
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            value={form.password} 
            onChange={handleChange} 
            placeholder="Password" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-center">
          <button 
            className="bg-red-500 hover:bg-red-800 text-white hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" 
            type="submit" 
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
