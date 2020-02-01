import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

// 引入子组件
import House from './House'
import Index from './Index/index'
import News from './News'
import My from './My'

import './index.scss'


class Home extends Component {
  render() {
    return (
      <>
        <ul className="navClass">
          <li>
            <NavLink exact to="/home">
              <i className="iconfont icon-ind" />
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/house">
              <i className="iconfont icon-findHouse" />
              <p>找房</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/news">
              <i className="iconfont icon-infom" />
              <p>资讯</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/my">
              <i className="iconfont icon-my" />
              <p>我的</p>
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/my" component={My} />
        </Switch>
      </>
    )
  }
}

export default Home