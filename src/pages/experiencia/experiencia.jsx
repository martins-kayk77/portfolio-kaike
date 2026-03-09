import "./experiencia.css";

function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">

      <h2 className="titulo">Minha Jornada</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024</h3>
            <h4>Início no curso Técnico</h4>
            <p>
              Iniciei o curso técnico em Desenvolvimento de Sistemas na ETEC de Embu,
              marcando meu primeiro contato com a programação.
              
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025</h3>
            <h4>Jovem Aprendiz</h4>
            <p>
              Iniciei minha trajetória profissional como Jovem Aprendiz,
              com contrato vinculado à ETEC.
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025</h3>
            <h4>Fim de um ciclo</h4>
            <p>
              Em dezembro de 2025, concluí o contrato de Jovem Aprendiz e me formei no curso técnico
              em Desenvolvimento de Sistemas.
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2026</h3>
            <h4>Efetivado</h4>
            <p>
              Após o término do contrato de aprendizagem, fui efetivado na mesma empresa.
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2026</h3>
            <h4>Início da Faculdade</h4>
            <p>
              Em março de 2026, iniciei a graduação em Análise e Desenvolvimento de Sistemas.
            </p>
          </div>
        </div>


      </div>

    </section>
  );
}

export default Experiencia;