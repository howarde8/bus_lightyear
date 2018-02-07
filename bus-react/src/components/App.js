import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/homepage.css';
import { SearchBar } from './SearchBar';
import { ItemList } from './ItemList'

class NavBar extends React.Component{
  render(){
    return(
      <nav class="navbar navbar-default" role="navigation" style={{ marginBottom:0 }}>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">選單切換</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">BUS-lightyear</a>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          {/* 左選單 */}
          <ul class="nav navbar-nav">
            <li class="active"><a href="./index.html">關於我們</a></li>
            <li><a href="./comepage.html">刊登資料</a></li>
            <li><a href="./buspage.html">開始探索</a></li>
          </ul>
          
          {/* <!-- 右選單 --> */}
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Amos 您好</a></li>
            <li><a href="#">登出</a></li>
            <li><a href="#">個人設定</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">繁體中文 <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">日本語</a></li>
              </ul>
            </li>
          </ul>
			
		    </div>
		
		  </nav>
    );
  }
}


class Section1 extends React.Component{
  render(){
    return (
      
        <div class="row">
            <div class="picture col-sm-12">    
            </div>
            <div class="block">
                <h1 class="title">巴士光年</h1>
                <h4 class="slogan">最快速且方便的遊覽車預訂體驗</h4>
                {/* 搜尋表單 */}
                {/* <SearchBar/> */}
                {/* <form class="navbar-form" role="search"> */}
                <div class="row" style={{marginTop:"3%"}}> 
                  <div class="col-md-8 form-group col-md-offset-2">
                    <input type="text" class="form-control" placeholder="從哪裡出發呢？"/>
                  </div>
                  <button style={{marginLeft:"-23%",width:"5%"}} type="submit" class="btn btn-default"><i class="fas fa-search fa-lg"></i></button>
                </div>
                {/* </form> */}
                
              </div>
            </div>
          
    
    );
  }
}
class Section2 extends React.Component{
  render(){
    return(
      <div class="row">
        <div class="section2_mainDiv"> 
          <div class="col-sm-1">
          <img class="section2_icon" src="https://i.imgur.com/epYOT2a.png" alt=""/>
          </div>
          <div class="col-sm-3">
            <h3 class="section2_title">快速搜尋</h3>
            <h5 class="section2_content">輸入地點或是乘車人數立即找到相關結果</h5>
          </div>
          <div class="col-sm-1">      
          <img class="section2_icon" src="https://i.imgur.com/CrImiud.png" alt=""/>
          </div>
          <div class="col-sm-3">
            <h3 class="section2_title"> 資訊透明</h3>
            <h5 class="section2_content">完整資訊結合用戶評價系統讓您能夠評估最好的選擇</h5>
          </div>
          <div class="col-sm-1">
          <img class="section2_icon" src="https://i.imgur.com/HrYLeiJ.png" alt=""/>
          </div>
          <div class="col-sm-3">  
            <h3 class="section2_title">線上預訂</h3>
            <h5 class="section2_content">取代繁瑣的電話預訂線上即可完成預訂與交易</h5>
          </div>
        </div>
    </div>
    );
  }
}
class Section3 extends React.Component{
  render(){
    return(
      <div class="row">
        <div class="col-sm-12">
          <div class="section3_block">
            <h1 class="title">{this.props.title}</h1>
            <h5 class="content">{this.props.content}</h5>
          </div>
        </div>
      </div>
    );
  }
}


class Section4 extends React.Component{
  render(){
    return(
      <div class="row bgc-white">
      <div class="search-result col-sm-12">
        <div class="block">
          <h1 class="title">搜尋結果</h1>
          <h5 class="content">填入關鍵字就能迅速找到您想要的資訊頁面。</h5>
        </div>
      </div>
    </div>
    );
  }
}

class Product extends ItemList{ //React.createClass({}) use dynamic changing
  render(){
    return(
      <ItemList/>
    );
  }
}

class Section5 extends React.Component{
  render(){
    return(
      <div class="row bgc-white">
      <div class="button-area col-sm-4 col-sm-offset-8">
        <button class="more-button">更多選擇</button>
      </div>
    </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div class="row bgc-blue">
      <div class="email col-md-12">
        <h2 class="section-heading">最快速的訂車體驗</h2>
        <h4 class="section-subheading">傳送任何您想對我們說的話</h4>
        <input class="form-control" type="email" placeholder="關於疑問｜關於建議｜關於鼓勵"/>
        <hr/>
        <button class="btn btn-default">送出</button>
      </div>
    </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div class="intro" style={{display:"flex",flexDirection:"column"}}>
          <div class="container-fluid">
            <Section1 />
            <Section2 />
            <Section3 title="更好的選擇" content="巴士光年是專屬台灣的遊覽車搜尋平台，填入關鍵字就能迅速找到您想要的資訊，也可立即網路預訂"/>
            
            <Section4 />
            <Product />
            <Section5 />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <SearchBar/>
//         <header className="App-header">
//           <h1 className="App-title">巴士光年</h1>
//           <h2>最快速且方便的遊覽車預訂體驗</h2>
//         </header>
//         <div>
//           <h1>Icons</h1>
//         </div>
//         <ItemList/>
//       </div>
//     );
//   }
// }

// export default App;