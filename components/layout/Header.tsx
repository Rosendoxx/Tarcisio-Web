"use client";

import { Church, Menu, User, X } from 'lucide-react';
import { useState } from "react";
import { MobileNav } from './MobileNav';
import { NavBar } from './NavBar';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-theme w-screen h-12 sm:h-14">
      <div className="container mx-auto h-full flex items-center sm:justify-between px-4">
        <h1 className="text-white text-xl font-bold flex gap-2">
          <Church className="hidden sm:block"/>
          Tarcisio Web
        </h1>
        <div className="flex items-center justify-self-end gap-4">
          {isMenuOpen ? (
            <X className="text-white sm:hidden bg-theme cursor-pointer" onClick={toggleMenu} />
          ) : (
            <Menu className="text-white sm:hidden bg-theme cursor-pointer" onClick={toggleMenu} />
          )}
          <NavBar />
        </div>
        <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <div className="text-white font-bold hidden md:flex items-center gap-4 cursor-pointer">
          <User className="border-2 border-yellow rounded-full"/>
          <div className="text-sm">
            <h1>Matheus</h1>
            <p className="text-yellow text-xs">Coordenador</p>
          </div>
        </div>
      </div>
    </header>
  );
}
