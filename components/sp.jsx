import React from 'react';

const Line = ({label, value}) => (
  <div className="row" style={{marginBottom:'2px'}}>
    <div className="col s6">{label}</div>
    <div className="col s6">{value}</div>
  </div>
);

export default class Sp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.content = this.makeContent();
  }
  makeContent() {
    return (
      <div className="card-panel">
        <h4 style={{fontSize:'18px'}}>S.P.E.C.I.A.L</h4>
        <div>
          <Line label="Strength"      value="4" />
          <Line label="Perception"    value="5" />
          <Line label="Endurance"     value="4" />
          <Line label="Charisma"      value="1" />
          <Line label="Intelligence"  value="7" />
          <Line label="Agility"       value="6" />
          <Line label="Luck"          value="2" />
        </div>
        <h4 style={{fontSize:'18px'}}>Perk</h4>
        <div>
          <Line label="Awareness" value="" />
          <Line label="Night Person" value="" />
          <Line label="Lone Wanderer" value="" />
          <Line label="Hacker" value="" />
          <Line label="Science" value="" />
          <Line label="Nerd Rage!" value="" />
          <Line label="Robot Sympathy" value="" />
        </div>
      </div>
    );
  }
  render() {
    return this.content;
  }
}