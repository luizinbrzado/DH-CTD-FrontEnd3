import './style.scss';

export default function About() {
    return (
        <>
            <div id="about-me">
                <div className="about-me">
                    <h1>Sobre mim</h1>
                    <p>
                        <span>Apaixonado</span> por <span>games</span> e <span>tecnologia</span>, com uma oportunidade
                        aparecendo de repente, decidi aprender a programar através do curso CTD <span>(Certified Tech
                            Developer)</span> da <span>Digital House</span> em parceria com o <span>Mercado Livre</span> e <span>Globant</span>.
                        Desde então, aprendo tanto em aula quanto sozinho pesquisando como um <span>autodidata</span> que
                        estou me tornando.
                    </p>
                </div>
                <div id="contacts">
                    <div>
                        <i className="far fa-smile-beam"></i>
                        <h3>Meu nome</h3>
                        <p>Luiz Gustavo</p>
                    </div>
                    <div>
                        <i className="fab fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/luizinbrzado">@luizinbrzado</a>
                    </div>
                    <div>
                        <i className="fab fa-github"></i>
                        <h3>GitHub</h3>
                        <a href="https://github.com/luizinbrzado">@luizinbrzado</a>
                    </div>
                    <div>
                        <i className="fab fa-instagram"></i>
                        <h3>Instagram</h3>
                        <a href="https://www.instagram.com/luizinbrzado">@luizinbrzado</a>
                    </div>
                </div>
            </div>
        </>
    )
}