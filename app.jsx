import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import MySelf from './components/myself.jsx';
import Skill from './components/skill.jsx';
import Work from './components/work.jsx';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="container">
        {this.props.content}
      </section>
    );
  }
}

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <br />
        <ContentContainer content={this.props.children} />
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MyApp}>
      <IndexRoute component={Home} />
      <Route path="hoem" component={Home} />
      <Route path="myself" component={MySelf} />
      <Route path="skill" component={Skill} />
      <Route path="work" component={Work} />
    </Route>
  </Router>
), document.getElementById('root'));