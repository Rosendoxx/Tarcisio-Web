"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* ── DESKTOP LAYOUT ── */}
      <div className="desktopLeft">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 22V11"/>
          <path d="M6 22V11"/>
          <path d="M2 11l10-8 10 8"/>
          <path d="M12 22V11"/>
          <path d="M10 22v-4a2 2 0 0 1 4 0v4"/>
        </svg>
        <h1 className="headerTitle">Escala dos Coroinhas</h1>
      </div>

      <nav className="desktopNav">
        <Link href="/" className="navLink">Início</Link>
        <Link href="/escalas" className="navLink">Escalas</Link>
        <Link href="/coroinhas" className="navLink">Coroinhas</Link>
      </nav>

      <div className="desktopRight">
        <div className="profileInfo">
          <span className="profileName">João Silva</span>
          <span className="profileTitle">Coordenador</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
          alt="Perfil do Usuário"
          width={40}
          height={40}
          className="profileImage"
        />
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="mobileBar">
        <button
          className="mobileMenuBtn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            /* X icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>

        <span className="mobileTitle">Escalas</span>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="mobileDropdown">
          <Link href="/" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link href="/escalas" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>Escalas</Link>
          <Link href="/coroinhas" className="mobileNavLink" onClick={() => setIsMenuOpen(false)}>Coroinhas</Link>

          <div className="mobileProfileRow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
              alt="Perfil do Usuário"
              width={40}
              height={40}
              className="profileImage"
            />
            <div>
              <p className="profileName">João Silva</p>
              <p className="profileTitle">Coordenador</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
