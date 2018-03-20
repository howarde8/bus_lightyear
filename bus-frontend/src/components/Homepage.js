import React, { Component } from 'react';
import '../styles/HomePage.css';

import Footer from './Footer';
import Navbar from './Navbar';
import ItemList from '../containers/ItemList';
import SearchBar from '../containers/SearchBar';
import SelectionItem from '../containers/SelectionItem';

class Section1 extends React.Component{
  render(){
    return (
      
        <div className="row">
            <div className="picture col-sm-12">    
            </div>
            <div className="cover-block">
            </div>
            <div className="block">
                <h1 className="title">巴士光年</h1>
                <h4 className="slogan">最快速且方便的遊覽車預訂體驗</h4>
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
    return(
      <div className="row section2_row">
        <div className="section2_mainDiv"> 
          <div className="col-sm-1">
          <img className="section2_icon" src="https://i.imgur.com/epYOT2a.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">
            <h3 className="section2_title">快速搜尋</h3>
            <h5 className="section2_content">輸入地點或是乘車人數立即找到相關結果</h5>
          </div>
          <div className="col-sm-1">      
          <img className="section2_icon" src="https://i.imgur.com/CrImiud.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">
            <h3 className="section2_title"> 資訊透明</h3>
            <h5 className="section2_content">完整資訊結合用戶評價系統讓您能夠評估最好的選擇</h5>
          </div>
          <div className="col-sm-1">
          <img className="section2_icon" src="https://i.imgur.com/HrYLeiJ.png" alt=""/>
          </div>
          <div className="col-sm-3 section2_subDiv">  
            <h3 className="section2_title">線上預訂</h3>
            <h5 className="section2_content">取代繁瑣的電話預訂線上即可完成預訂與交易</h5>
          </div>
        </div>
    </div>
    );
  }
}
class Section3 extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="section3_block">
            <h3 className="title">{this.props.title}</h3>
            <h5 className="content">{this.props.content}</h5>
          </div>
        </div>
      </div>
    );
  }
}




class Section5 extends React.Component{
  render(){
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
    return (
      <div>
        <Navbar/>
        <div className="intro" style={{display:"flex",flexDirection:"column"}}>
          <div className="container-fluid">
            <Section1 />
            <Section2 />
            <Section3 title="明日的旅程，從現在開始" content="點選以下的遊覽車，看看哪些符合您旅行的規格【廣告】"/>
            {/* <SelectionItem />
            <ItemList /> */}
            <Section5 />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;




