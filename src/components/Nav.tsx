import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  const scrollTo = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav" aria-label="Navegación principal">
      <button className="brand" onClick={() => scrollTo("inicio")} aria-label="Ir al inicio">
        <span className="brandLogo" aria-hidden="true">
          <img className="brandLogoLight" src="/logos/logo a color.svg" alt="" />
          <img className="brandLogoDark" src="/logos/logo sin fondo.svg" alt="" />
        </span>
        <span><b>Alberti</b> Technology</span>
      </button>
      <button className="menuButton" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Abrir menú">
        <i /><i /><i />
      </button>
      <div className={`navLinks ${menu ? "open" : ""}`}>
        <button onClick={() => scrollTo("soluciones")}>Soluciones</button>
        <button onClick={() => scrollTo("industrias")}>Industrias</button>
        <button onClick={() => scrollTo("socios")}>Nuestros Socios</button>
        <button onClick={() => scrollTo("acerca")}>Acerca de</button>
        <button className="navCta" onClick={() => scrollTo("contacto")}>Contacto <span>↗</span></button>
      </div>
    </nav>
  );
}
