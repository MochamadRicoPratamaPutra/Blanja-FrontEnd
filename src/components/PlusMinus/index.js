import React, { Component } from 'react';
import Style from './plus.module.css'
import Plus from '../../assets/plus.svg'
import Minus from '../../assets/minus (2).svg'
import { connect } from 'react-redux';
import { quantityPlus, quantityMinus } from '../../configs/redux/action/cartAction'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    // IncrementItem = () => {
    //     this.setState({ clicks: this.state.clicks + 1 });

    // }
    // DecreaseItem = () => {
    //     this.setState((state, props) =>{
    //         if (state.clicks===0) {
    //             return {clicks: state.clicks=0}
    //         }else{
    //             return { clicks: state.clicks - 1 }
    //         }
    //     })
    // }
    // ToggleClick = () => {
    //     this.setState({ show: !this.state.show });
    // }
    render() {
        return (
        <div className={Style.wrapper}>
            <button onClick={() => {this.props.DecreaseItem()}} className={Style.minus}><img src={Minus} alt="plus"/></button>
            { this.state.show ? <p className={Style.number}>{this.props.quantity}</p> : '' }
            <button onClick={() => this.props.IncrementItem()} className={Style.plus}><img src={Plus} alt="minus"/></button>
        </div>
        );
    }
}
const mapStateToProps = (state)=>({
    quantity: state.cart.quantity
})
const mapDispatchToProps = (dispatch) => {
    return {
        IncrementItem: () => {
            dispatch(quantityPlus())
        },
        DecreaseItem: () => {
            dispatch(quantityMinus())
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps )(App)
