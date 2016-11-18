import React from 'react';
import Card from './card.jsx';

export default class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.content = this.makeContent();
  }
  makeContent() {
    return (
      <div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>経験職務</h4>
          <ul>
            <li>実装、テスト、運用</li>
          </ul>
        </div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>得意な言語</h4>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>Java</li>
            <li>C#</li>
            <li>HTML,CSS</li>
          </ul>
          <h4 style={{fontSize:'18px'}}>得意なツール、フレームワーク</h4>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>Backbone.js</li>
            <li>jquery</li>
            <li>Browserify</li>
            <li>Babel</li>
            <li>Electron</li>
          </ul>
        </div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>分野別</h4>
          <ul>
            <li>
              <span>■ウェブ・フロントエンド</span>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML,CSS</li>
                <li>React.js</li>
                <li>Redux</li>
                <li>Backbone.js</li>
                <li>jquery</li>
              </ul>
            </li>
          </ul><ul>
            <li>
              <span>■ウェブ・サーバサイド</span>
              <ul>
                <li>Node.js</li>
                <li>PHP</li>
                <li>Java</li>
              </ul>
            </li>
          </ul><ul>
            <li>
              <span>■デスクトップアプリ</span>
              <ul>
                <li>C#</li>
                <li>Electron</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>苦手なこと</h4>
          <ul>
            <li>デザイン（ノンデザイナーズデザインブックの知識しかない）</li>
          </ul>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Card icon="device_hub" title="skill" content={this.content} />
    );
  }
}