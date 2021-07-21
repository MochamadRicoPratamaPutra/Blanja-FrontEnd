import React, { Component } from 'react';
import Style from './plus.module.css'
import Plus from '../../assets/plus.svg'
import Minus from '../../assets/minus (2).svg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        if (this.state.clicks===0) {
            this.setState({clicks: this.state.clicks=0})
        }else{
            this.setState({ clicks: this.state.clicks - 1 });
        }
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
        <div className={Style.wrapper}>
            <button onClick={this.DecreaseItem} className={Style.minus}><img src={Minus} alt="plus"/></button>
            { this.state.show ? <p className={Style.number}>{ this.state.clicks }</p> : '' }
            <button onClick={this.IncrementItem} className={Style.plus}><img src={Plus} alt="minus"/></button>
        </div>
        );
    }
}

export default App;
