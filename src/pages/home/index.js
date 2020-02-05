import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// 引入子组件
import House from './House'
import Index from './Index/index'
import News from './News'
import My from './My'

// 引入react组件
import { TabBar } from 'antd-mobile';

import './index.scss'

const navBarList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/my' }
]


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.location.pathname
    }
  }
  renderNavBar() {
    return navBarList.map(item => (
        <TabBar.Item
          title={item.title}
          key={item.title}
          icon={ <i className={`iconfont ${item.icon}`}></i>
          }
          selectedIcon={<i className={`iconfont ${item.icon}`}></i>
          }
          selected={this.state.selectedTab === item.path}
          onPress={() => {
            this.props.history.push(item.path)
            this.setState({
              selectedTab: item.path
            });
          }}
        >
        </TabBar.Item>
      ))
  }
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={Index} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/my" component={My} />
        </Switch>
        <div className="NavBar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {this.renderNavBar()}
          </TabBar>
        </div>

      </>
    )
  }
}

export default Home