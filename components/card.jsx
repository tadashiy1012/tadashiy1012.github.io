import React from 'react';

const CardTitle = ({icon, text}) => (
  <div className="valign-wrapper" style={{height:'40px'}}>
    <i className="valign medium material-icons">{icon}</i>
    <h3 className="valign" style={{fontSize:'22px', width:'70px', display:'inline'}}>{text}</h3>
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
          <div className="col s12 m4 l3">
            <div className="hide-on-small-only" style={{marginBottom:'44px'}}></div>
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