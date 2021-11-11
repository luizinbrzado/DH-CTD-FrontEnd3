import './style.scss';

export default function Project({ img, alt, title, link, techs }) {
    return (
        <>
            <a className="link-project" href={link}>
                <div>
                    <div className="projects-img">
                        <img className="img-fluid" img={img} alt={alt} />
                    </div>
                    <div className="projects-text">
                        <h3>
                            {title}
                            <i className="fas fa-arrow-right"></i>
                        </h3>
                        <p>{techs}</p>
                    </div>
                </div>
            </a>
        </>
    )
}