import './header.css'


export default function Header({ children }) {
  return (
    <>
      {/* Navbar */}

      <section>
        <header>
          <nav className='navbar'>
            <a href='/'><img className="logo" src='navbar/logo1.png' alt="logo1" /></a>
            <a href='/personagensfilmeselivros'><img className="logo" src='navbar/logo2.png' alt="logo2"/></a>
            <a href='/autora'><img className="logo" src='navbar/logo3.png' alt="logo3" /></a>
            <a href='/curiosidades'><img className="logo" src='navbar/logo4.png' alt="logo4" /></a>
            <a href='/falas'><img className="logo" src='navbar/logo5.png' alt="logo5" /></a>
          </nav>
        </header>
      </section>
      
      {children} 
    </>
  );
}
