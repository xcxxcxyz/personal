import React, { Component } from 'react'
import state from  "../store"
const add =() =>{
    console.log(123);
    return {
        type:"ADD"
    }
}
export default class text5 extends Component {
    constructor(props) {
        super(props);
    }
    addClick(){
        state.dispatch(add());
    }
    render() {
        return (
            <div>
                <h1>{0}</h1>
                <button onClick={this.addClick.bind(this)}>add</button>
            </div>
        )
    }
}
