import { FaGithub, FaLinkedin, FaEnvelope, FaFile, FaFileAlt  } from "react-icons/fa"
import "./contato.css"
import curriculo from '../../assets/curriculoKaikeMartins.pdf'

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato-container">
        <h2>Contato</h2>
        <p>
          Estou aberto a novas oportunidades e desafios, entre em contato
        </p>

        <div className="contato-botoes">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kaikesilvamartins10@gmail.com"
            target="_blank"
            className="botao-contato"

          ><FaEnvelope className="icone" /> 
             Enviar Email
          </a>

          <a 
            href={curriculo}
            target="_blank"
            className="botao-contato"

          ><FaFileAlt className="icone" /> 
             Currículo
          </a>

          <a 
            href="https://www.linkedin.com/in/kaikemartins"
            target="_blank"
            rel="noopener noreferrer"
            className="botao-contato"
          ><FaLinkedin className="icone" /> 
             LinkedIn
          </a>

          <a 
            href="https://github.com/martins-kayk77"
            target="_blank"
            rel="noopener noreferrer"
            className="botao-contato"
          ><FaGithub className="icone" /> 
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contato