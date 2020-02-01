import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'
import Home from './pages/home'
import Map from './pages/map'
import City from './pages/city'
import NoMatch from './pages/NoMatch'
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact path="/" to="/home"></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/map" component={Map}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    )
  }
}
export default App