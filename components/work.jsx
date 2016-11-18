import React from 'react';
import Card from './card.jsx';

const WorkCard = ({picture, text, link}) => (
  <div className="card">
    <div className="card-image">
      <img style={{padding:'14px'}} src={picture} />
    </div>
    <div className="card-content">
      <p>{text}</p>
    </div>
    <div className="card-action">
      <a href={link}>{link}</a>
    </div>
  </div>
);

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.content = this.makeContent();
  }
  makeContent() {
    return (
      <div>
        <WorkCard 
          picture="public/picture/tw.png" 
          text="「electron-twitter-client」 electron製のTwitterクライアントです 使用技術:JS,electron,react,redux" 
          link="https://github.com/tadashiy1012/electron-twitter-client" />
        <WorkCard 
          picture="public/picture/rss.png" 
          text="「rss-reader」 electron製のRSSリーダーです 使用技術:JS,electron,react,redux" 
          link="https://github.com/tadashiy1012/rss-reader" />
        <WorkCard 
          picture="public/picture/pic.png" 
          text="「pict_viewer」 electron製の画像ビューアです 使用技術:JS,electron,react,redux" 
          link="https://github.com/tadashiy1012/pict_viewer" />
        <WorkCard 
          picture="" 
          text="「resumaker」 履歴書を自動作成するライブラリです 使用技術:Node.js" 
          link="https://github.com/tadashiy1012/resumaker" />
      </div>
    )
  }
  render() {
    return (
      <Card icon="work" title="work" content={this.content} />
    );
  }
}