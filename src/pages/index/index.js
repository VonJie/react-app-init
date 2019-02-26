import React, { Component } from 'react';
import { withRouter } from 'react-router'

import styles from './index.module.scss';

class Index extends Component{
  state = {
    arys: new Array(100).fill(null)
  }
  componentDidMount(){
    console.log(this.props);
    // console.log(GlobalApp.state);
  }
  render(){
    return (
      <div className='container'>
        <input type="text"/>
        {this.state.arys.map((item, index) => {
          return <div className={styles.title} key={index}>首页</div>
        })}
        <div className={styles.footer}>底部</div>
      </div>
    )
  }
}

export default withRouter(Index);