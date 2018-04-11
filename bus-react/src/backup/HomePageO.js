import React, { Component } from 'react';
import '../styles/HomePage.css';

import Footer from './Footer';
import Navbar from './Navbar';
import ItemList from '../containers/ItemList';
import SearchBar from '../containers/SearchBar';
import SelectionItem from '../containers/SelectionItem';
import SelectPage from '../components/SelectPage';




class Section1 extends React.Component{
  render(){
    const style ={ position: 'relative', margin: 0, padding: 0, fontFamily: '微軟正黑體', boxSizing: 'border-box', border: '1px solid blue'};
    const h1 = {fontSize: 80};
    const h2 = {fontSize: 60};
    const h3 = {fontSize: 45};
    const h4 = {fontSize: 30};
    const h5 = {fontSize: 20};
    const h6 = {fontSize: 15};
    const p = {fontSize: 15,letterSpacing: 1};
    return (
      <div className="row">
        <div className="picture col-xs-12"></div>
        <div className="cover-block"></div>
        <div className="block">
          <h1 className="title" style={{...style,...h1}}>巴士光年</h1>
          <h4 className="slogan" style={{...style,...h4}}>最快速且方便的遊覽車預訂體驗</h4>
            {/* 搜尋表單 */}
            <SearchBar/>
            {/* <form className="navbar-form" role="search"> */}
              
            {/* </form> */}
        </div>      
      </div>
    );
  }
}
class Section2 extends React.Component{
  render(){
    const style ={ position: 'relative', margin: 0, padding: 0, fontFamily: '微軟正黑體', boxSizing: 'border-box', border: '1px solid blue'};
    const h1 = {fontSize: 80};
    const h2 = {fontSize: 60};
    const h3 = {fontSize: 45};
    const h4 = {fontSize: 30};
    const h5 = {fontSize: 20};
    const h6 = {fontSize: 15};
    const p = {fontSize: 15,letterSpacing: 1};
    return(
      <div className="row section2_row">
        <div className="section2_mainDiv"> 
          <div className="col-sm-1">
          <img className="section2_icon" src="https://i.imgur.com/epYOT2a.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">
            <h3 className="section2_title" style={{...style,...h4}}>快速搜尋</h3>
            <h5 className="section2_content" style={{...style,...h6}}>輸入地點或是乘車人數立即找到相關結果</h5>
          </div>
          <div className="col-sm-1">      
          <img className="section2_icon" src="https://i.imgur.com/CrImiud.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">
            <h3 className="section2_title" style={{...style,...h2}}> 資訊透明</h3>
            <h5 className="section2_content" style={{...style,...h2}}>完整資訊結合用戶評價系統讓您能夠評估最好的選擇</h5>
          </div>
          <div className="col-sm-1">
          <img className="section2_icon" src="https://i.imgur.com/HrYLeiJ.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">  
            <h3 className="section2_title" style={{...style,...h4}}>線上預訂</h3>
            <h5 className="section2_content" style={{...style,...h6}}>取代繁瑣的電話預訂線上即可完成預訂與交易</h5>
          </div>
        </div>
    </div>
    );
  }
}
class Section3 extends React.Component{
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
      <div className="row">
        <div className="col-sm-12">
          <div className="section3_block">
            <h2 className="title" style={{...style,...h2}}>{this.props.title}</h2>
            <h5 className="content" style={{...style,...h5}}>{this.props.content}</h5>
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
    const style ={ position: 'relative', margin: 0, padding: 0, fontFamily: '微軟正黑體', boxSizing: 'border-box'};
    const h1 = {fontSize: 80};
    const h2 = {fontSize: 60};
    const h3 = {fontSize: 45};
    const h4 = {fontSize: 30};
    const h5 = {fontSize: 20};
    const h6 = {fontSize: 15};
    const p = {fontSize: 15,letterSpacing: 1};

    const introStyle = {
      width: '100%',
      overflowX: 'hidden'
    };
    

    return (
      <div>
        <Navbar/>
        <div className="intro" style={introStyle}>
          <div className="container-fluid">
            <Section1 />
            <Section2 />
            <Section3 title="明日的旅程，從現在開始" content="點選以下的遊覽車，看看哪些符合您旅行的規格【廣告】"/>
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




