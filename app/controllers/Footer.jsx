import "./footer.css";

export default function Footer({ children }) {
  const year = new Date().getFullYear();

  return (
    <>
      <section>
        <header>
          <nav className="footer">
            <h1>&copy; {year} — Todos os direitos reservados</h1>
             
            <div className="marcas">
              Lionsgate  •  Rocco  •  Suzanne Collins  •  Jogos Vorazes  •  Unsplash
            </div>
          </nav>
        </header>
      </section>

      {children}
    </>
  );
}

