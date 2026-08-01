import { useState } from "react";

const team = [
  { name: "Franco Alberti", role: "Ingeniería & IA", initials: "FA", photo: "/franco_sin_fondo.svg" },
  { name: "Diego Martucho", role: "Software & Hardware", initials: "DM", photo: "/diego_sin_fondo.svg" },
  { name: "Alejo Petitti", role: "Ingeniería & Metalurgia", initials: "AP", photo: "/alejo_sin_fondo.svg" },
  { name: "Mariano Carri", role: "Ingeniería & Inventario", initials: "MC", photo: "/mariano_sin_fondo.svg" },
  { name: "Giuliana Reginatto", role: "Diseño & Community Manager", initials: "GR", photo: "/giuli_sin_fondo.svg" },
];

export default function TeamSlider() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="team section">
      <div className="teamHead">
        <div><span className="index">07 — NUESTRO EQUIPO</span><h2>Personas detrás<br /><em>de la tecnología.</em></h2></div>
        <div className="sliderControls">
          <button onClick={() => setSlide(Math.max(0, slide-1))} aria-label="Integrantes anteriores">←</button>
          <button onClick={() => setSlide(Math.min(team.length-2, slide+1))} aria-label="Integrantes siguientes">→</button>
        </div>
      </div>
      <div className="teamViewport">
        <div className="teamTrack" style={{transform:`translateX(calc(${slide} * (-50% - 10px)))`}}>
          {team.map((person, i) => (
            <article className="person" key={person.name}>
              <div className={`portrait${person.photo ? " portraitWithPhoto" : ""}`}>
                {person.photo
                  ? <img className="portraitPhoto" src={person.photo} alt={`Retrato de ${person.name}`} />
                  : <span>{person.initials}</span>}
                {!person.photo && <div className="personGrid" />}
                <small>0{ i+1 }</small>
              </div>
              <h3>{person.name}</h3><p>{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
