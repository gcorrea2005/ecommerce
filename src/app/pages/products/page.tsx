"use client";
import React from "react";
import Link from "next/link"; // Importa el componente Link

const Inicio: React.FC = () => {
  return (
    <main className="flex-grow p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-green-700">
        Bienvenido a Aseo Total
      </h2>
      <p className="mt-2 text-gray-700">
        En Aseo Total, estamos comprometidos a ofrecerte los mejores productos
        de aseo para que mantengas tu hogar limpio y fresco. Explora nuestra
        variedad de productos que satisfacen todas tus necesidades de limpieza.
      </p>

      {/* Sección de publicidad mejorada */}
      <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-green-600">
          ¡Descubre nuestros productos de aseo!
        </h3>
        <p className="mt-2 text-gray-600">
          Te ofrecemos una amplia gama de productos de limpieza diseñados para
          satisfacer todas tus necesidades, tanto en el hogar como en la
          oficina.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-green-700">
              🧴 Detergentes Ecológicos
            </h4>
            <p className="text-gray-600">
              Potentes y amigables con el medio ambiente, perfectos para
              cualquier tipo de lavado.
            </p>
            <Link href="/pages/products/cat01">
              <span className="mt-4 inline-block bg-green-300 text-white p-1 rounded hover:bg-green-400 transition cursor-pointer">
                Ver Productos...
              </span>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-green-700">🧽 Desinfectantes</h4>
            <p className="text-gray-600">
              Eficaces contra gérmenes y bacterias, ideales para mantener tu
              hogar seguro.
            </p>
            <Link href="/pages/products/cat02">
              <span className="mt-4 inline-block bg-green-300 text-white p-1 rounded hover:bg-green-400 transition cursor-pointer">
                Ver Productos...
              </span>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-green-700">
              🛁 Productos de Cuidado Personal
            </h4>
            <p className="text-gray-600">
              Jabones y champús de alta calidad que cuidan tu piel y cabello.
            </p>
            <Link href="/pages/products/cat03">
              <span className="mt-4 inline-block bg-green-300 text-white p-1 rounded hover:bg-green-400 transition cursor-pointer">
                Ver Productos...
              </span>
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-green-700">
              🏠 Limpiadores Multiusos
            </h4>
            <p className="text-gray-600">
              Perfectos para cualquier superficie, te ahorran tiempo y esfuerzo.
            </p>
            <Link href="/pages/products/cat04">
              <span className="mt-4 inline-block bg-green-300 text-white p-1 rounded hover:bg-green-400 transition cursor-pointer">
                Ver Productos...
              </span>
            </Link>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Todos nuestros productos están formulados con ingredientes de alta
          calidad para asegurar resultados óptimos. Además, nos comprometemos
          con prácticas sostenibles, por lo que puedes cuidar de tu hogar y del
          planeta al mismo tiempo.
        </p>
        <p className="mt-2 font-semibold text-green-600">
          ¡No te pierdas nuestras ofertas especiales! Visítanos en nuestra
          tienda y disfruta de descuentos exclusivos durante este mes.
        </p>
      </section>
    </main>
  );
};

export default Inicio;
