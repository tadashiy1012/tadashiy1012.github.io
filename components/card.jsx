import React from 'react';

const titleStyle = {fontSize:'22px', display:'inline'};

const CardTitle = ({icon, text}) => (
  <div>
    <div className="hide-on-small-only" style={{marginBottom:'44px'}}></div>
    <div className="valign-wrapper">
      <i className="valign medium material-icons">{icon}</i>
      <h3 className="valign" style={titleStyle}>{text}</h3>
    </div>
  </div>
);

const leftStyle = {display: 'flex', justifyContent: 'center'};

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-panel">
        <div className="row">
          <div className="col s12 m3 l3" style={leftStyle}>
            <CardTitle icon={this.props.icon} text={this.props.title} />
          </div>
          <div className="col s12 m9 l9">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}