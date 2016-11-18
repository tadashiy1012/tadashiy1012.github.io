import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import Home from './components/home.jsx';
import MySelf from './components/myself.jsx';
import Skill from './components/skill.jsx';
import Work from './components/work.jsx';

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ulStyle = {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    };
  }
  render() {
    return (
      <nav className="hide-on-large-only">
        <div className="nav-wrapper teal lighten-2">
          <ul style={this.ulStyle}>
            <li><Link to="/">home</Link></li>
            <li><Link to="myself">myself</Link></li>
            <li><Link to="skill">skill</Link></li>
            <li><Link to="work">work</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <a className="brand-logo">Tadashi Yamazaki's Portfolio Site</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">home</Link></li>
            <li><Link to="myself">myself</Link></li>
            <li><Link to="skill">skill</Link></li>
            <li><Link to="work">work</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

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
        <SubHeader />
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