import './home.css';
import kaikeFoto from '../../assets/kaikeFoto.jpeg';

function Index() {
  return (
    <>
      <section className="home" id="home">
      <div className="home-content">
        <h1 id='name'>Kaike Martins</h1>
        <h2>Desenvolvedor Front-end</h2>

        <p>
          Técnico em Desenvolvimento de Sistemas, cursando ADS, com foco em
          criação de interfaces modernas.
        </p>

        <div className="home-buttons">
          <a href="#sobre" className="btn primeiro">Sobre</a>
          <a href="#habilidades" className="btn segundo">Habilidades</a>
          <a href="#projetos" className="btn terceiro">Ver projetos</a>
          <a href="#contato" className="btn quarto">Contato</a>
          
        </div>
      </div>

      <div className="hero-img">
        <img src={kaikeFoto} alt="Kaike Martins"/>
      </div>
    </section>
    </>
  )
}

export default Index