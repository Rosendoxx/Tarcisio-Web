"use client";

import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed sm:hidden z-30"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Navigation */}
      <nav className={`fixed top-0 right-0 h-screen w-40 bg-theme text-white transform transition-transform duration-300 z-40 sm:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="pt-20 px-6 flex flex-col space-y-6 text-xl font-bold">
          <Link 
            href="/" 
            className="hover:text-yellow transition-colors"
            onClick={onClose}
          >
            Inicio
          </Link>
          <Link 
            href="/escalas" 
            className="hover:text-yellow transition-colors"
            onClick={onClose}
          >
            Escalas
          </Link>
          <Link 
            href="/coroinhas" 
            className="hover:text-yellow transition-colors"
            onClick={onClose}
          >
            Coroinhas
          </Link>
          <Link 
            href="/perfil" 
            className="hover:text-yellow transition-colors"
            onClick={onClose}
          >
            Perfil
          </Link>
        </div>
      </nav>
    </>
  );
} 