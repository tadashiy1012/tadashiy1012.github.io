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

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-panel">
        <div className="row">
          <div className="col s12 m4 l3" style={{display: 'flex', justifyContent: 'center'}}>
            <CardTitle icon={this.props.icon} text={this.props.title} />
          </div>
          <div className="col s12 m8 l9">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}