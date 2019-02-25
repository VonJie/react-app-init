import React, { Component } from 'react';
import { withRouter } from 'react-router'

import styles from './index.module.scss';

class Profile extends Component{
  componentDidMount(){
    console.log(this.props);
    // console.log(GlobalApp.state);
  }
  render(){
    return (
      <div className={styles.title}>个人中心</div>
    )
  }
}

export default withRouter(Profile);