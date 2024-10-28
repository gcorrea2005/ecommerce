"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import Link from "next/link"; // Importa el componente Link

const Inicio: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-200 to-green-300 text-white p-10 rounded-lg shadow-xl mt-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/background.jpg" // Ruta de la imagen en la carpeta pública
          alt="Background"
          layout="fill" // Asegura que la imagen cubra todo el contenedor
          objectFit="cover" // Mantiene la proporción de la imagen
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          ¡Bienvenido a Aseo Total!
        </h2>
        <p className="mt-2 text-lg max-w-3xl mx-auto mb-6 text-gray-800">
          Descubre nuestra amplia gama de productos de aseo ecológicos y efectivos. Desde detergentes hasta limpiadores multiusos, tenemos todo lo que necesitas para mantener tu hogar limpio y fresco.
        </p>
        <p className="mt-6 font-semibold text-lg text-gray-800">
          🌟 **¡Ofertas especiales este mes!** 🌟
        </p>

        <h3 className="text-3xl font-semibold mb-6 text-gray-800">
          ¿Por qué elegir productos ecológicos?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-green-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-green-700">Seguridad</h4>
            <p className="text-gray-700">Libres de químicos dañinos, ideales para tu familia y mascotas.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-green-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-green-700">Efectividad</h4>
            <p className="text-gray-700">Limpieza profunda sin comprometer el medio ambiente.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <FaCheckCircle className="text-green-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold text-green-700">Sostenibilidad</h4>
            <p className="text-gray-700">Productos biodegradables en envases reciclables.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/pages/products" className="bg-blue-600 text-white font-bold p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
            Explora nuestros productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
