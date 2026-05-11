import './sobre.css'

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <h2>Sobre mim</h2>

        <p>
          Meu nome é Kaike, tenho 20 anos e moro na zona sul de São Paulo. Sou Técnico em Desenvolvimento de Sistemas pela ETEC e estudante
           de Análise e Desenvolvimento de Sistemas na UniFECAF.
        </p>

        <p>
          Estou em busca de oportunidades de trabalho em desenvolvimento de software, onde possa aplicar os conhecimentos tecnicos,
           evoluir profissionalmente e contribuir com soluções eficientes.
        </p>

        <p>
          Tenho experiência com React, JavaScript e Node.js, desenvolvendo aplicações web e mobile com integração entre front-end e back-end.
          Já desenvolvi projetos como um catálogo online para confeitaria,e uma aplicação mobile onde fiz em grupo com funcionalidades de CRUD e integração com banco de dados,
          onde fiquei encarregado do front-end.
        </p>

        
      
        <div className="skills">
          <span>Organização</span>
          <span>Comunicação</span>
          <span>Resolução de Problemas</span>
          <span>Colaboração</span>
        </div>
      </div>
    </section>
  )
}