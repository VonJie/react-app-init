import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './styles/App.module.scss';

import Loadable from 'react-loadable';
import Loading from './components/loading';

import { Button } from 'antd-mobile'

const Home = Loadable({ loader: () => import('./pages/index'), loading: Loading, delay: 500, timedOut: 10000 });
const Profile = Loadable({ loader: () => import('./pages/profile'), loading: Loading, delay: 500, timedOut: 10000 });



class App extends Component{
  state = {
    page: false
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        page: true
      })
    }, 100)
  }
  render(){
    if(!this.state.page) return null;
    return (
      <div>
        <Router>
          <div className={styles.test}>
            <ul className={styles.flex}>
              <li>
                <Link to={{pathname: '/', search: '?sort=name'}}>Home</Link>
              </li>
              <li>
                <Link to="/profile">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <Button>测试</Button>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    )
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
