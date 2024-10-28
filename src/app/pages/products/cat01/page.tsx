"use client";
import React from "react";
import Image from "next/image";

const inicio = 0;

const products = Array.from({ length: 5 }, (_, index) => ({
  id: inicio + index + 1,
  name: `Producto ${inicio +index + 1}`,
  price: (Math.random() * 20 + 5).toFixed(2), // Precios entre 5 y 25
  stock: Math.floor(Math.random() * 100) + 1, // Stock entre 1 y 100
  image: `/images/product${((inicio + index) % 10) + 1}.webp`, // Asumiendo que tienes 10 imágenes
}));

const Inicio: React.FC = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Detergentes ecológicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-700">${product.price}</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              <button className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-400 transition">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inicio;
