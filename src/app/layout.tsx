"use client";
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import favicon from "../../public/favicon.ico";
import Link from "next/link"; // Importa el componente Link

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          <header className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 flex items-center shadow-lg">
            <Image
              src={favicon}
              alt="Favicon"
              width={32}
              height={32}
              className="mr-3"
            />
            <h1 className="text-2xl font-bold drop-shadow-md">Aseo Total</h1>
            <button onClick={toggleMenu} className="ml-auto md:hidden">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
            <nav
              className={`md:flex md:ml-auto space-x-6 ${
                isOpen ? "block" : "hidden"
              } md:block`}
            >
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <li>
                  <Link href="/" onClick={handleLinkClick}>
                    <span className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                      Inicio
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/products" onClick={handleLinkClick}>
                    <span className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                      Productos
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/cart" onClick={handleLinkClick}>
                    <span className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                      Carrito
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/account" onClick={handleLinkClick}>
                    <span className="hover:underline transition text-white p-2 rounded hover:bg-green-600">
                      Mi cuenta
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <div className="flex flex-grow flex-col md:flex-row">
            <aside className="bg-gradient-to-b from-green-300 to-green-200 w-full md:w-64 p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-green-800">Categorías</h2>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/pages/products/cat01" onClick={handleLinkClick}>
                    <span className="flex items-center p-2 rounded hover:bg-green-400 transition">
                      <span role="img" aria-label="Detergentes" className="mr-2">🧴</span>
                      Detergentes Ecológicos
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/products/cat02" onClick={handleLinkClick}>
                    <span className="flex items-center p-2 rounded hover:bg-green-400 transition">
                      <span role="img" aria-label="Desinfectantes" className="mr-2">🧽</span>
                      Desinfectantes
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/products/cat03" onClick={handleLinkClick}>
                    <span className="flex items-center p-2 rounded hover:bg-green-400 transition">
                      <span role="img" aria-label="Cuidado Personal" className="mr-2">🛁</span>
                      Cuidado Personal
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/products/cat04" onClick={handleLinkClick}>
                    <span className="flex items-center p-2 rounded hover:bg-green-400 transition">
                      <span role="img" aria-label="Limpiadores" className="mr-2">🏠</span>
                      Limpiadores Multiusos
                    </span>
                  </Link>
                </li>
              </ul>
            </aside>

            <main className="flex-grow p-6 bg-gray-50">
              {children} {/* Renderiza el contenido de las páginas */}
            </main>
          </div>

          <footer className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 mt-4">
            <p className="text-sm drop-shadow-md">
              &copy; 2024 Aseo Total. Todos los derechos reservados.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
