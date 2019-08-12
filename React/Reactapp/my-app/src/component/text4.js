import React, { Component } from 'react'
import text1 from "../component/text1"
import text2 from "../component/text2"
import {
    BrowserRouter as Router,//使用html5提供的history API来保持UI和URL的同步
    Route,  //路由界面 path代表路径 component路径所对应的界面。
    Link,//Link是react路由中的点击切换到哪一个组件的链接
  } from "react-router-dom"
export default class text4 extends Component {
    constructor(props){
            super(props)
        }
    render() {
        return (
            <div>
                <Router>
                <Link to="/text1">text1</Link>
                <Link to="/text2">text2</Link>
                <Route path="/text1" component={text1}/>
                <Route path="/text2" component={text2}/>
                </Router>
            </div>
        )
    }
}
