import "./plf.css";

export default function Personagensfilmeselivros() {
  return (
    <>
      {/* PERSONAGENS */}
      <section className="personagens bloco">
        <h1 className="titulo">Personagens importantes</h1>

        <div className="galeria">
          <div className="item"><h4>Katniss Everdeen</h4></div>
          <div className="item"><h4>Peeta Mellark</h4></div>
          <div className="item"><h4>Coriolanus Snow</h4></div>
          <div className="item"><h4>Primrose Everdeen</h4></div>
          <div className="item"><h4>Finnick Odair</h4></div>
          <div className="item"><h4>Haymitch Abernathy</h4></div>
        </div>
      </section>

      {/* FILMES */}
     <section className="filmes bloco">
  <h1 className="titulo">Filmes</h1>

  <div className="filmes-grid">

    <div className="filme-card">
      <h3>Jogos Vorazes</h3>
      <p className="ano">| 2012 |</p>
      <p className="slogan">O Mundo Estará Assistindo!</p>
    </div>

    <div className="filme-card">
      <h3>Jogos Vorazes: Em Chamas</h3>
      <p className="ano">| 2013 |</p>
      <p className="slogan">Lembre-se de quem é o Inimigo</p>
    </div>

    <div className="filme-card">
      <h3>Jogos Vorazes: A Esperança - Parte 1</h3>
      <p className="ano">| 2014 |</p>
      <p className="slogan">A Coragem de uma Pessoa Mudará o Mundo</p>
    </div>

    <div className="filme-card">
      <h3>Jogos Vorazes: A Esperança - O Final</h3>
      <p className="ano">| 2015 |</p>
      <p className="slogan">O Fogo Queimará para Sempre</p>
    </div>

    <div className="filme-card">
      <h3>Jogos Vorazes: A Cantiga dos Pássaros e das Serpentes</h3>
      <p className="ano">| 2023 |</p>
      <p className="slogan">Todos São Vorazes por Algo</p>
    </div>

    <div className="filme-card">
      <h3>Jogos Vorazes: Amanhecer na Colheita</h3>
      <p className="ano">| 2025 |</p>
      <p className="slogan">Os Jogos Serão Diferentes</p>
    </div>

  </div>
</section>

      {/* LIVROS */}
      <section className="livros bloco">
        <h1 className="titulo">Livros</h1>

        <div className="lista">
          <p className="l1">Jogos Vorazes</p>
          <p className="l2">Em Chamas</p>
          <p className="l3">A Esperança</p>
          <p className="l4">A Cantiga dos Pássaros e das Serpentes</p>
          <p className="l5">Amanhecer na Colheita</p>
        </div>
      </section>
    </>
  );
}
