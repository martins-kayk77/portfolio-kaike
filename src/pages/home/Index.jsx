import './home.css';

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
          <a href="#projetos" className="btn segundo">Ver projetos</a>
          <a href="#contato" className="btn terceiro">Contato</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Index