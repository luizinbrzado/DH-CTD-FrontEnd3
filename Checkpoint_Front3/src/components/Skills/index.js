import './style.scss';

export default function Skills() {
    return (
        <>
            <div id="skills">
                <div id="content-skills">
                    <h1 className="show-on-scroll">Minhas skills:</h1>
                    <ul>
                        <li className="show-on-scroll"><i className="fab fa-html5"></i></li>
                        <li className="show-on-scroll"><i className="fab fa-css3-alt"></i></li>
                        <li className="show-on-scroll"><i className="fab fa-js-square"></i></li>
                        <li className="show-on-scroll"><i className="fab fa-react"></i></li>
                        <li className="show-on-scroll"><img src="./img/mysql.svg" alt="" /></li>
                        <li className="show-on-scroll"><img src="./img/Robot-framework.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}