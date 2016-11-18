import React from 'react';
import Card from './card.jsx';

export default class MySelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.content = this.makeContent();
  }
  makeContent() {
    return (
      <div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>基本情報</h4>
          <p>
            名前：山崎 義(やまざき ただし)<br />
            生年月日：１９８６年１０月１２日<br />
            最終学歴：岐阜経済大学経営情報学科卒<br />
            座右の銘：「人生は急いでも短くならない」
          </p>
        </div>
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>職歴</h4>
          <ul>
            <li>2011/4 株式会社ニチイ学館入社</li>
            <li>2014/11 株式会社ニチイ学館退社</li>
            <li>2015/1 株式会社ロイド入社</li>
            <li>2015/6 株式会社ロイド退社</li>
            <li>2015/12 株式会社ナックウェブ入社</li>
            <li>2016/2 株式会社ナックウェブ退社</li>
          </ul>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Card icon="face" title="myself" content={this.content} />
    );
  }
}