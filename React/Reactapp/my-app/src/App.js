import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,//使用html5提供的history API来保持UI和URL的同步
  Route,  //路由界面 path代表路径 component路径所对应的界面。
  Link,//Link是react路由中的点击切换到哪一个组件的链接
  Switch,
  Redirect
} from "react-router-dom"
import text1 from "./component/text1"
import text2 from "./component/text2"
import text4 from "./component/text4"
import text5 from "./component/text5"
import text6 from "./component/text6"
import state from "./store"
import {Provider} from "react-redux"
const Foo=({match})=>{
  return (
    <h1>hello{match.params.id}</h1>
  )
}
const Foo2=({match})=>{
  return(
    <h1>world{match.params.id}</h1>
  )
}
const Foo3=({match})=>{
  return(
    <h1>xuxuxuxuxuxxuux{match.params.id}</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Provider store={state}>
      <Router>
      <Link to="/foo2/这是foo2">foo2</Link>|
      <Link to="/这是text1">test1</Link>|
      <Link to="/text2/这是text2">text2</Link>|
      <Link to="/foo/这是foo">foo</Link>|
      <Link to="/redirect">redirect</Link>|
      <Link to="/text4">text4</Link>|
      <Link to="/text5">text5</Link>|
      <Link to="/text6">text6</Link>|
      <Link to="/Foo3/这是foo3">Foo3</Link>
      <Switch>
      <Route path="/text2/:id" component={text2}/> 
      <Route path="/foo/:id" component={Foo}/>
      <Route path="/foo2/:id" component={Foo2}/>
      <Route path="/text4" component={text4}/>
      <Route path="/text5" component={text5}/>
      <Route path="/text6" component={text6}/>
      <Route path="/Foo3/:id" component={Foo3}></Route>
      <Route path="/redirect" render={()=>{
        return(
          <Redirect to="/888"/>
        )
      }}/>
      <Route path="/:id" component={text1}/>
      </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
