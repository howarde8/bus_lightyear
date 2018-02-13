import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/homepage.css';
import { SearchBar } from './SearchBar';
import ItemList from './ItemList'
import { BusPage } from './BusPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class NavBar extends React.Component{

  render(){
    return(
      <nav class="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">選單切換</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand"><img src="../assets/images/BUS_logo.png"/></div>
          <div class="navbar-brand">
            BUS-lightyear
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          {/* 左選單 */}
          <ul class="nav navbar-nav">

            <li><a href="./index.html">台灣遊覽車資訊網站</a></li>
          </ul>

          {/* <!-- 右選單 --> */}
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">刊登資料</a></li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">臉書粉專</a></li>
            <li><a href="#">登入</a></li>
            <li><a href="#">註冊</a></li>
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
            <div class="cover-block">
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
      <div class="row section2_row">
        <div class="section2_mainDiv"> 
          <div class="col-sm-1">
          <img class="section2_icon" src="https://i.imgur.com/epYOT2a.png" alt=""/>
          </div>
          <div class="col-sm-3 section2_subDiv">
            <h3 class="section2_title">快速搜尋</h3>
            <h5 class="section2_content">輸入地點或是乘車人數立即找到相關結果</h5>
          </div>
          <div class="col-sm-1">      
          <img class="section2_icon" src="https://i.imgur.com/CrImiud.png" alt=""/>
          </div>
          <div class="col-sm-3 section2_subDiv">
            <h3 class="section2_title"> 資訊透明</h3>
            <h5 class="section2_content">完整資訊結合用戶評價系統讓您能夠評估最好的選擇</h5>
          </div>
          <div class="col-sm-1">
          <img class="section2_icon" src="https://i.imgur.com/HrYLeiJ.png" alt=""/>
          </div>
          <div class="col-sm-3 section2_subDiv">  
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

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div class="intro" style={{display:"flex",flexDirection:"column"}}>
          <div class="container-fluid">
            <Section1 />
            <Section2 />
            <Section3 title="明日的旅程，從現在開始" content="點選以下的遊覽車，看看哪些符合您旅行的規格【廣告】"/>
            <Product />
            <Section5 />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
// class App extends React.Component {

//   getMain = () => {
//     return <Redirect to="/"/>;
//   }

//   getBusPage = () => {
//     return <Redirect to="/buspage"/>;
//   }

//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={Main}/>
//         <Route path="/buspage" component={BusPage}/>
//       </Switch>
//     );
//   }
// }

// export default App;




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
