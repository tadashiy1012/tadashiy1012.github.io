import React from 'react';
import {Link} from 'react-router';

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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
        <SubHeader />
      </div>
    );
  }
}