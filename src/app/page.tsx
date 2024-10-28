"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Iconos para el menú
import './globals.css';
import favicon from '../public/favicon.ico'; // Asegúrate de la ruta correcta

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 flex items-center shadow-lg">
        <Image src={favicon} alt="Favicon" width={32} height={32} className="mr-3" />
        <h1 className="text-2xl font-bold drop-shadow-md">Aseo Total</h1>
        <button onClick={toggleMenu} className="ml-auto md:hidden">
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
        <nav className={`md:flex md:ml-auto space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a href="#home" className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                Inicio
              </a>
            </li>
            <li>
              <a href="#productos" className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                Productos
              </a>
            </li>
            <li>
              <a href="#carrito" className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                Carrito
              </a>
            </li>
            <li>
              <a href="#mi-cuenta" className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                Mi cuenta
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-grow flex-col md:flex-row">
        <aside className="bg-gradient-to-b from-green-300 to-green-200 w-full md:w-64 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold text-green-800">Categorías</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#detergentes" className="flex items-center p-2 rounded hover:bg-green-400 transition">
                <span role="img" aria-label="Detergentes" className="mr-2">🧴</span>
                Detergentes Ecológicos
              </a>
            </li>
            <li>
              <a href="#desinfectantes" className="flex items-center p-2 rounded hover:bg-green-400 transition">
                <span role="img" aria-label="Desinfectantes" className="mr-2">🧽</span>
                Desinfectantes
              </a>
            </li>
            <li>
              <a href="#cuidado-personal" className="flex items-center p-2 rounded hover:bg-green-400 transition">
                <span role="img" aria-label="Cuidado Personal" className="mr-2">🛁</span>
                Cuidado Personal
              </a>
            </li>
            <li>
              <a href="#limpiadores" className="flex items-center p-2 rounded hover:bg-green-400 transition">
                <span role="img" aria-label="Limpiadores" className="mr-2">🏠</span>
                Limpiadores Multiusos
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-grow p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold text-green-700">Bienvenido a Aseo Total</h2>
          <p className="mt-2 text-gray-700">
            En Aseo Total, estamos comprometidos a ofrecerte los mejores productos de aseo para que mantengas tu hogar limpio y fresco. Explora nuestra variedad de productos que satisfacen todas tus necesidades de limpieza.
          </p>
          
          {/* Sección de publicidad mejorada */}
          <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-600">¡Descubre nuestros productos de aseo!</h3>
            <p className="mt-2 text-gray-600">
              Te ofrecemos una amplia gama de productos de limpieza diseñados para satisfacer todas tus necesidades, tanto en el hogar como en la oficina.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-green-700">🧴 Detergentes Ecológicos</h4>
                <p className="text-gray-600">Potentes y amigables con el medio ambiente, perfectos para cualquier tipo de lavado.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-green-700">🧽 Desinfectantes</h4>
                <p className="text-gray-600">Eficaces contra gérmenes y bacterias, ideales para mantener tu hogar seguro.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-green-700">🛁 Productos de Cuidado Personal</h4>
                <p className="text-gray-600">Jabones y champús de alta calidad que cuidan tu piel y cabello.</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
                <h4 className="font-semibold text-green-700">🏠 Limpiadores Multiusos</h4>
                <p className="text-gray-600">Perfectos para cualquier superficie, te ahorran tiempo y esfuerzo.</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Todos nuestros productos están formulados con ingredientes de alta calidad para asegurar resultados óptimos. Además, nos comprometemos con prácticas sostenibles, por lo que puedes cuidar de tu hogar y del planeta al mismo tiempo.
            </p>
            <p className="mt-2 font-semibold text-green-600">
              ¡No te pierdas nuestras ofertas especiales! Visítanos en nuestra tienda y disfruta de descuentos exclusivos durante este mes.
            </p>
            <a href="#shop" className="mt-4 inline-block bg-green-600 text-white p-3 rounded hover:bg-green-700 transition">
              Explora nuestra tienda
            </a>
          </section>
        </main>
      </div>

      <footer className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 mt-4">
        <p className="text-sm drop-shadow-md">&copy; 2024 Aseo Total. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
