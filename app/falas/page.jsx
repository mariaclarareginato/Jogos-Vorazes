import "./falas.css";

export default function Falas() {
  return (
    <section className="hero">
      <img src="hg2.png" alt="Jogos Vorazes" />

      <div className="hero-content">

        {/* ====================== LIVROS ====================== */}
        
        <div className="cards livros">
          <div className="card">
            <span className="tag">Livro — Jogos Vorazes</span>
            <p className="frase">“Eu me voluntario! Eu me ofereço como tributo!”</p>
            <p className="personagem">— Katniss Everdeen</p>
          </div>

          <div className="card">
            <span className="tag">Livro — Em Chamas</span>
            <p className="frase">“Lembre-se de quem é o verdadeiro inimigo.”</p>
            <p className="personagem">— Haymitch Abernathy</p>
          </div>

          <div className="card">
            <span className="tag">Livro — A Esperança</span>
            <p className="frase">“Tenho uma mensagem para o Presidente Snow: você está vendo? O fogo está se alastrando. Se queimarmos, você queima com a gente.”</p>
            <p className="personagem">— Katniss Everdeen</p>
          </div>

          <div className="card">
            <span className="tag">Livro — A Cantiga dos Pássaros e das Serpentes</span>
            <p className="frase">“O que são os jogos senão a prova de que o controle é tudo?”</p>
            <p className="personagem">— Coriolanus Snow</p>
          </div>

          <div className="card">
            <span className="tag">Livro — Amanhecer na Colheita</span>
            <p className="frase">“Você não acredita mesmo <br></br>nisso, não é? Talvez não. Mas eu tento. Porque o sorteio vai <br></br> acontecer, independente do que eu acredite.”</p>
            <p className="personagem">— Haymitch Abernathy</p>
          </div>
        </div>


          <div className="separator"></div>

        {/* ====================== FILMES ====================== */}
        <h2 className="section-title"></h2>
        <div className="cards filmes">
          <div className="card">
            <span className="tag">Filme — Jogos Vorazes</span>
            <p className="frase">“Que a sorte esteja sempre a seu favor.”</p>
            <p className="personagem">— Effie Trinket</p>
          </div>

          <div className="card">
            <span className="tag">Filme — Em Chamas</span>
            <p className="frase">“A esperança é a única coisa mais forte que o medo.”</p>
            <p className="personagem">— Coriolanus Snow</p>
          </div>

          <div className="card">
            <span className="tag">Filme — A Esperança (Parte 1)</span>
            <p className="frase">“Você precisa cuidar de si mesma também, Katniss.”</p>
            <p className="personagem">— Primrose Everdeen</p>
          </div>

          <div className="card">
            <span className="tag">Filme — A Esperança (Parte 2)</span>
            <p className="frase">“Você me ama. Real ou não-real?”</p>
            <p className="personagem">— Peeta Mellark</p>
          </div>

          <div className="card">
            <span className="tag">Filme — A Cantiga dos Pássaros e das Serpentes</span>
            <p className="frase">“É a natureza humana. Cantamos mesmo quando o mundo está em ruínas.”</p>
            <p className="personagem">— Lucy Gray Baird</p>
          </div>

          <div className="card">
            <span className="tag">Filme — Amanhecer na Colheita</span>
            <p className="frase">“Eu acho que esses jogos serão diferentes.”</p>
            <p className="personagem">— Haymitch Abernathy</p>
          </div>
        </div>

      </div>
    </section>
  );
}
