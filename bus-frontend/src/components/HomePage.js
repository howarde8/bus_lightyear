import React, { Component } from 'react';
import '../styles/HomePage.css';

import Footer from './Footer';
import Navbar from './Navbar';
import ItemList from '../containers/ItemList';
import SearchBar from '../containers/SearchBar';
import SelectionItem from '../containers/SelectionItem';
import SelectPage from '../components/SelectPage';


class Jumbotron extends React.Component{
  render(){
    const h1 = {fontSize: 80};
    const h4 = {fontSize: 30};
    const IMG = {
      width: '100%',
      height: 650,
      backgroundImage: "url('https://i.imgur.com/Qj2onou.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    const coverBlock = {
      zIndex: '1',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
    };
    const textBlock = {
      zIndex: '2',
      marginTop: 200,
      color: 'white',
    };
    return (
      <div className="row">
        <div className="IMG col-xs-12" style={{...IMG}}>
          <div className="coverBlock" style={{...coverBlock,opacity: '0.3'}} ></div>
          <div className="textBlock" style={{...textBlock,textAlign: 'center'}}>
            <h1 className="title" style={{...h1,letterSpacing: 15}}>{this.props.title}</h1>
            <h4 className="slogan" style={{...h4,marginTop: 20,fontWeight: 300, letterSpacing: 18}}>{this.props.subtitle}</h4>
              {/* 搜尋表單 */}
              <SearchBar/>
              {/* <form className="navbar-form" role="search"> */}
              {/* </form> */}
          </div> 
        </div>     
      </div>
    );
  }
}
class ThreeIcon extends React.Component{
  render(){
    const h4 = {fontSize: 30};
    const h6 = {fontSize: 15};
    const white = {
      backgroundColor:'white',
      position:'absolute',
      width:'140%',
      height:'100%',
      left:'-20%'
    };
    const iconStyle = {
      width: 70,
      height: 70,
      marginTop:25,
      marginRight:0
    };
    const textblock = {
      marginTop:20,
      width: '72%'
    };
    const titleStyle = {
      fontWeight:400,
      letterSpacing:3,
    };
    const contentStyle = {
      marginTop:10,
      letterSpacing: 1,
      lineHeight: 1.5
    };
    return(
      <div className="row " style={{ paddingBottom: '2%'}}>
        <div className="white" style={{...white}}></div>
        <div className="col-sm-1">
        <img className="icon" src={this.props.icon1_src} style={{...iconStyle}} alt=""/>
        </div>
        <div className="col-sm-3" style= {{paddingLeft:8}}>
          <div className="textblock" style={{...textblock}}> 
            <h3 className="title" style={{...h4,...titleStyle}}>{this.props.icon1_title}</h3>
            <h5 className="content" style={{...h6,...contentStyle}}>{this.props.icon1_content}</h5>
          </div>
        </div>
        <div className="col-sm-1">      
        <img className="icon" src={this.props.icon2_src} style={{...iconStyle}} alt=""/>
        </div>
        <div className="col-sm-3" style= {{paddingLeft:8}}>
          <div className="textblock" style={{...textblock}}> 
            <h3 className="title" style={{...h4,...titleStyle}}>{this.props.icon2_title}</h3>
            <h5 className="content" style={{...h6,...contentStyle}}>{this.props.icon2_content}</h5>
          </div>
        </div>
        <div className="col-sm-1">
        <img className="icon" src={this.props.icon3_src} style={{...iconStyle}} alt=""/>
        </div>
        <div className="col-sm-3" style= {{paddingLeft:8}}>
          <div className="textblock" style={{...textblock}}> 
            <h3 className="title" style={{...h4,...titleStyle}}>{this.props.icon3_title}</h3>
            <h5 className="content" style={{...h6,...contentStyle}}>{this.props.icon3_content}</h5>
          </div>
        </div>
    </div>
    );
  }
}
class Section3 extends React.Component{
  render(){
    const h3 = {fontSize: 45};
    const h5 = {fontSize: 20};
    const titleStyle = {letterSpacing: 10};
    const contentStyle = {
      marginTop:10,
      fontWeight:400,
      letterSpacing:2,
      lineHeight: 2
    };
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="textblock" style={{marginTop:50}}>
            <h3 className="title" style={{...titleStyle,...h3}}>{this.props.title}</h3>
            <h5 className="content" style={{...contentStyle,...h5}}>{this.props.content}</h5>
          </div>
        </div>
      </div>
    );
  }
}
class Section5 extends React.Component{
  render(){
    const style ={ position: 'relative', margin: 0, padding: 0, fontFamily: '微軟正黑體', boxSizing: 'border-box'};
    const h1 = {fontSize: 80};
    const h2 = {fontSize: 60};
    const h3 = {fontSize: 45};
    const h4 = {fontSize: 30};
    const h5 = {fontSize: 20};
    const h6 = {fontSize: 15};
    const p = {fontSize: 15,letterSpacing: 1};
    return(
      <div className="row bgc-white">
      <div className="button-area col-sm-4 col-sm-offset-8">
        <button className="more-button">更多選擇</button>
      </div>
    </div>
    );
  }
}
class HomePage extends React.Component {
  render() {
    const style ={ position: 'relative', margin: 0, padding: 0, fontFamily: '微軟正黑體', boxSizing: 'border-box', border: '0.5px solid black'};
    const h1 = {fontSize: 80};
    const h2 = {fontSize: 60};
    const h3 = {fontSize: 45};
    const h4 = {fontSize: 30};
    const h5 = {fontSize: 20};
    const h6 = {fontSize: 15};
    const p = {fontSize: 15,letterSpacing: 1};
    const introStyle = { width: '100%', overflowX: 'hidden'};
    return (
      <div>
        <Navbar/>
        <div className="intro" style={introStyle}>
          <div className="container-fluid" style={{padding:0}}>
            <Jumbotron title="巴士光年" subtitle="最快速且方便的遊覽車預訂體驗"/>
          </div>
          <div className="container">
            <ThreeIcon
            icon1_src="https://i.imgur.com/epYOT2a.png"
            icon1_title="快速搜尋"
            icon1_content="輸入您的出發地，立即找到相關結果"
            icon2_src="https://i.imgur.com/CrImiud.png"
            icon2_title="資訊公開"
            icon2_content="完整資訊結合用戶評價讓您評估出最好的選擇"
            icon3_src="https://i.imgur.com/HrYLeiJ.png"
            icon3_title="線上預訂"
            icon3_content="取代繁瑣的電話預訂，線上即可完成預訂"
            />
            <Section3 title="明日的旅程，從現在開始" content="點選以下的遊覽車，看看哪些符合您旅行的規格【評價】"/>
            <SelectPage/>
            <Section5 />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;




