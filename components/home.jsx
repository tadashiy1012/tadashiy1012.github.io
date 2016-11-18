import React from 'react';
import Card from './card.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.content = this.makeContent();
  }
  makeContent() {
    return (
      <div>
        <h4 style={{fontSize:'18px'}}>はじめに</h4>
        <p>ここは山崎義（やまざき ただし）のポートフォリオサイトです。</p>
        <p>このサイトにある各種ページを見ることで、山崎が過去に作ったものや、
        今現在の山崎が出来ることを知ることができます。<br />
        各ページへはヘッダメニューのリンクを選択することで閲覧可能です。</p>
        <p>サイトは随時に更新されます。更新履歴は以下からご覧ください。</p>
        <br />
        <div className="card-panel">
          <h4 style={{fontSize:'18px'}}>更新履歴</h4>
          <ul>
            <li>2016/11/18 skillに苦手なことを追加しました</li>
            <li>2016/9/19 サイトを公開しました</li>
          </ul>
        </div>
      </div>
    )
  }
  render() {
    return (
      <Card icon="home" title="home" content={this.content} />
    );
  }
}