import { Component } from "react";
import Project from "./components/Project";
import './style.scss';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch('./projects.json', {
            headers: {
                Accept: 'application/json'
            }
        }).then(res => res.json()).then(res => {
            this.setState({ data: res.data });
            console.log(res.data);
        })
    }
    // useEffect(() => {
    //     fetch('./projects.json', {
    //         headers: {
    //             Accept: 'application/json'
    //         }
    //     }).then(res => res.json()).then(data => {
    //         this.data = data;
    //     })
    // },[]);

    render() {
        return (
            <>
                <div id="projects">
                    <h1>Projetos</h1>
                    <div id="content-projects">
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <Project key={index} img={item.img.src} alt={item.img.alt} title={item.title} link={item.link.page} techs={item.technologies} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}