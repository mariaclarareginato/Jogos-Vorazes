import './plf.css'

export default function Personagensfilmeselivros() {
  return (
    <>
    

<br></br>

{/* Personagens */}
<section className="personagens">
  <h1 className="titulo">Personagens importantes:</h1>
  <div className="galeria">
    <div className="item">
      <img src="personagens/p1.png" className="imgp" alt="Katniss" />
      <br></br>
      <h4>Katniss Everdeen</h4>
    </div>
    <div className="item">
      <img src="personagens/p2.png" className="imgp" alt="Peeta" />
      <br></br>
      <h4>Peeta Mellark</h4>
    </div>
    <div className="item">
      <img src="personagens/p3.png" className="imgp" alt="Snow" />
      <br></br>
      <h4>Coriolanus Snow</h4>
    </div>
    <div className="item">
      <img src="personagens/p4.png" className="imgp" alt="Prim" />
      <br></br>
      <h4>Primrose Everdeen</h4>
    </div>
    <div className="item">
      <img src="personagens/p5.png" className="imgp" alt="Finnick" />
      <br></br>
      <h4>Finnick Odair</h4>
    </div>
  </div>
</section>
<br></br>

{/* Filmes */}
<br></br>
<section className="filmes">
  <h1 className="titulo">Filmes:</h1>
  <div className="galeria">
    <img src="filmes/f1.png" className="img" alt="Filme 1" />
    <img src="filmes/f2.png" className="img" alt="Filme 2" />
    <img src="filmes/f3.png" className="img" alt="Filme 3" />
    <img src="filmes/f4.png" className="img" alt="Filme 4" />
    <img src="filmes/f5.png" className="img" alt="Filme 5" />
    <img src="filmes/f6.png" className="img" alt="Filme 6" />
  </div>
</section>
<br></br>

{/* Livros */}
<br></br>
<section className="livros">
  <h1 className="titulo">Livros:</h1>
  <div className="galeria">
    <img src="livros/l1.png" className="img" alt="Livro 1" />
    <img src="livros/l2.png" className="img" alt="Livro 2" />
    <img src="livros/l3.png" className="img" alt="Livro 3" />
    <img src="livros/l4.png" className="img" alt="Livro 4" />
    <img src="livros/l5.png" className="img" alt="Livro 5" />
  </div>
</section>
<br></br>


        </>
  );
}
