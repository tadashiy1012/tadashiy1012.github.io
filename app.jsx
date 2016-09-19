import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

const CardTitle = ({icon, text}) => (
  <div className="valign-wrapper" style={{height:'40px'}}>
    <i className="valign medium material-icons">{icon}</i>
    <h3 className="valign" style={{fontSize:'22px', width:'70px', display:'inline'}}>{text}</h3>
  </div>
);

class Card extends React.Component {
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

class Home extends React.Component {
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

class MySelf extends React.Component {
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

class Skill extends React.Component {
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
      </div>
    )
  }
  render() {
    return (
      <Card icon="device_hub" title="skill" content={this.content} />
    );
  }
}

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

class Work extends React.Component {
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