import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa"
import { SiMysql, SiFirebase, SiFigma } from "react-icons/si"
import './habilidades.css'

function Habilidades() {
  return (
    <section className="habilidades" id="habilidades">

        <h1>Habilidades</h1>

        <div className="habilidades-container">


        <div className="skill-card">
            <h2>Front-end</h2>
            <div className="tech-grid">
                <div className="tech"><FaHtml5 color="#0f0f14"  /><span>HTML</span></div>
                <div className="tech"><FaCss3Alt color="#0f0f14"/><span>CSS</span></div>
                <div className="tech"><FaJs color="#0f0f14"/><span>JavaScript</span></div>
                <div className="tech"><FaReact color="#0f0f14"/><span>React</span></div>
            </div>
        </div>


        <div className="skill-card">
            <h2>Back-end</h2>
            <div className="tech-grid">
                <div className="tech"><FaNodeJs color="#0f0f14"/><span>Node.js</span></div>
                <div className="tech"><FaPython color="#0f0f14"/><span>Python</span></div>
            </div>

        </div>


        <div className="skill-card">
            <h2>Banco de Dados</h2>
            <div className="tech-grid">
                <div className="tech"><SiMysql color="#0f0f14"/><span>MySQL</span></div>
                <div className="tech"><SiFirebase color="#0f0f14"/><span>Firebase</span></div>
            </div>

        </div>



        <div className="skill-card">
        <h2>Ferramentas</h2>
            <div className="tech-grid">
                <div className="tech"><FaGitAlt color="#0f0f14"/><span>Git</span></div>
                <div className="tech"><FaGithub color="#0f0f14"/><span>GitHub</span></div>
                <div className="tech"><SiFigma color="#0f0f14"/><span>Figma</span></div>
            </div>

        </div>

        </div>

    </section>
  )
}

export default Habilidades