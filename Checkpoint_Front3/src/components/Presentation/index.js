// import presentation from  './img/presentation.png';
import './style.scss';

export default function Presentation() {

    return (
        <div id="presentation" >
            <div>
                <div className="presentation-title">
                    <h1>Opa, eu sou o</h1>
                    <h1>Luiz Gustavo :)</h1>
                    <h3>Sou Desenvolvedor Web Full Stack Junior em <span>constante aprendizado</span></h3>
                </div>
                <div className="presentation-buttons">
                    <a href="./archives/Curriculo.pdf" download>
                        <i className="fas fa-download"></i>
                        Download CV
                    </a>
                    <a href="#about-me">
                        Entrar em contato
                    </a>
                </div>
            </div>
            <div className="presentation-img">
                <img src="ds" alt="imagem ilustrativa" />
            </div>
        </div>
    );
}