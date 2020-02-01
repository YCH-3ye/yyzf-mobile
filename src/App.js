import React from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import './index.css'
import Home from './pages/home'
import Map from './pages/map'
import City from './pages/city'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact path="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/map" component={Map}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App