import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="contact" id="contacto">
      <div className="contactCopy">
        <span className="index">08 — CONTACTO</span>
        <h2>Su proceso ya genera datos.<br /><em>Empecemos a usarlos.</em></h2>
        <p>Cuéntenos qué necesita medir, controlar o automatizar. Diseñamos una prueba de concepto sobre su operación real.</p>
        <a href="mailto:albertifranco97@gmail.com">albertifranco97@gmail.com ↗</a>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
        <label>Nombre y empresa<input required placeholder="Su nombre / Empresa" /></label>
        <label>Email corporativo<input required type="email" placeholder="nombre@empresa.com" /></label>
        <label>¿Qué desafío quiere resolver?<textarea required placeholder="Cuéntenos brevemente sobre su proceso..." /></label>
        <button className="primary" type="submit">{sent ? "Consulta recibida ✓" : "Enviar consulta →"}</button>
        {sent && <p className="formNotice">Gracias. Este prototipo deja lista la experiencia; conectaremos aquí su canal de contacto definitivo.</p>}
      </form>
    </section>
  );
}
