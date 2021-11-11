/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

function Header() {
    return (
        <>
            <header className="sticky-top">
                <nav className="navbar p-4 navbar-expand navbar-light bg-light">
                    <div className="nha">
                        <a className="navbar-brand" href="/">LuizIn<span>B</span><span>R</span>zado</a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#about-me">Sobre mim</a>
                                <a className="nav-link" href="#">Projetos</a>
                                <a className="nav-link" href="#">Contate-me</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;