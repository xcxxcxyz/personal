import React, { Component } from 'react'

export default class text1 extends Component {
    constructor(props){
    super(props)
}
    render() {
        return (
            <div>
                <h1>text1{this.props.match.params.id}</h1>
            </div>
        )
    }
}
