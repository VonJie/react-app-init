import React, { Component } from 'react';

import './index.scss';

class Loading extends Component{
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    let { error, isLoading, timedOut } = this.props;
    return (
      <div className='loading'>
        {error && <div>页面加载错误</div>}
        {timedOut && <div>请求超时，请刷新页面</div>}
        {isLoading && <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>}
      </div>
    )
  }
}

export default Loading;