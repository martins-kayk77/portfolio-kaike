import './Sobre.css'

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <h2>Sobre mim</h2>

        <p>
          Técnico em Desenvolvimento de Sistemas pela ETEC e estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Front-End.
        </p>

       

        <p>
          Tenho experiência com React, JavaScript e Node.js, desenvolvendo aplicações web e mobile com integração entre front-end e back-end.
          Já desenvolvi projetos como um catálogo online para confeitaria e uma aplicação mobile com funcionalidades de CRUD e integração com banco de dados.
        </p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Git</span>
        </div>
      </div>
    </section>
  )
}