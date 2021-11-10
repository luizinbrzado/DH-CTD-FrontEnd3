import { Component } from 'react';
import './style.scss';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 60 };
  }

  componentDidMount() {
    this.time = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    this.state.time === 0 && (
      clearInterval(this.time)
    )
  }

  tick() {
    this.setState({ time: this.state.time - 1 });
  }

  render() {
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>Cronômetro: {this.state.time}</h2>
      </div>
    );
  }
}