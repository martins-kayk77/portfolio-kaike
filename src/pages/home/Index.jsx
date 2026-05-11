import './home.css';
import foto from '../../assets/imgKaike.jpeg'

function Index() {
  return (
    <>
      <section className="home" id="home">
      <div className="home-content">
        <h1 id='name'>Kaike Martins</h1>
        <h2>Web Developer</h2>

        <p>
          Técnico em Desenvolvimento de Sistemas e estudante de ADS, com foco em desenvolvimento web
        </p>

        <div className="home-buttons">
          <a href="#sobre" className="btn primeiro">Sobre mim</a>
          <a href="#habilidades" className="btn segundo">Habilidades</a>
          <a href="#projetos" className="btn terceiro">Ver Projetos</a>
          <a href="#experiencia" className="btn quarto">Minha Jornada</a>
          <a href="#contato" className="btn quarto">Contato</a>
          
        </div>
      </div>

      <div className="hero-img">        
        <img src={foto} alt="Kaike Martins" />        
      </div>
    </section>
    </>
  )
}

export default Index