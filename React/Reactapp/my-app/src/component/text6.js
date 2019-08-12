import React, { Component } from 'react'
import axios from "axios"
export default class text6 extends Component {
    componentDidMount(){
        let url="https://api.myjson.com/bins/fp5ml"
        axios.get(url).then((res)=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
