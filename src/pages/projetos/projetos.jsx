import './projetos.css'

const projetos = [
  {
    id: 1,
    titulo: 'Rose Bolos – Catálogo',
    descricao: 'Catálogo online de bolos com foco em UI simples e integração com WhatsApp.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/martins-kayk77/roseBolos',
    demo: 'https://martins-kayk77.github.io/roseBolos/'
  },
  {
    id: 2,
    titulo: 'Juri Solutions',
    descricao: 'Software Jurídico com CRUD. Esta aplicação foi desenvolvida com o intuito de otimizar a vida de um cliente, tendo como objetivo administrar processos judiciais.',    
    tecnologias: ['Flutter', 'Firebase'],
    github: 'https://github.com/martins-kayk77/Juri-Solutions',
    demo: '#'
  },
  {
    id: 3,
    titulo: 'Portfólio Pessoal',
    descricao: 'Portfólio desenvolvido em React com layout responsivo e mobile first.',
    tecnologias: ['React'],
    github: 'https://github.com/martins-kayk77/portfolio-kaike',
    demo: '#'
  }
  
]

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <h2>Projetos</h2>

      <div className="projetos-grid">
        {projetos.map(projeto => (
          <div className="projeto-card" key={projeto.id}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>

            <div className="tecnologias">
              {projeto.tecnologias.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <div className="projeto-links">
              <a href={projeto.github} target="_blank">GitHub</a>
              <a href={projeto.demo} target="_blank">Ver online</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default Projetos