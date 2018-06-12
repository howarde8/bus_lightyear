import React, { Component } from 'react';
import '../styles/LandingPage.css';
import NavBar from '../components/Navbar';
import { Styles } from '../styles/style';

class LandingPage extends React.Component {
  render() {
    const h1Style = { 
      ...Styles.h1,
      lineHeight: 1.5,
      letterSpacing: 8
    }
    const h2Style = { 
      ...Styles.h2,
      letterSpacing: 20
    }
    const h3Style = { 
      ...Styles.h3,
    }
    const h4Style = { 
      ...Styles.h4,
      lineHeight: 2
    }
    const h5Style = { 
      ...Styles.h5,
      fontWeight:300,
      letterSpacing:4
    }
    const h6Style = { 
      ...Styles.h6,
    }
    return (
      <div id="landing_page">
        <div class="jumbotron">
          <div class="jumbo_row row">
            <div class="col-xs-offset-1 col-xs-6 text_area">
              <h1 style={h1Style}>加入巴士光年</h1>
              <h4 style={h4Style}>別讓惱人的訂車流程，影響你快樂的旅程</h4>
              <h5 style={h5Style}>同步支援手機版/電腦版</h5>
            </div>
            <div class="col-xs-1">
              <div class="signup_window">
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <div class="co_signup"><a href="">facebook註冊</a><span>  或  </span><a href="">google註冊</a></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <hr/>
                  </div>
                </div>
                <div class="row">
                  <div class="input_row col-xs-10 col-xs-offset-1">
                    <input type="text" placeholder="姓名"/>
                  </div>
                  <div class="input_row col-xs-10 col-xs-offset-1">
                    <input type="birth" placeholder="生日"/>
                  </div>
                  <div class="input_row col-xs-10 col-xs-offset-1">
                    <input type="email" placeholder="電子郵件地址"/>
                  </div>
                  <div class="input_row col-xs-10 col-xs-offset-1">
                    <input type="password" placeholder="密碼"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-10 col-xs-offset-1">
                    <button class="button_style">立即註冊       </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row section1">
            <div class="col-xs-9 travel_img"></div>
            <div class="col-xs-3 logo_area"><img class="logo" src="https://i.imgur.com/hwI0Cjh.png" alt=""/></div>
          </div>
          <div class="row section2">
            <div class="col-sm-11 col-xs-12 white_rec"></div>
          </div>
          <div class="row section3">
            <div class="col-xs-10 col-xs-offset-1 text_area">
              <h2 style={h2Style}>找到最舒適的交通體驗</h2>
              <h4 style={h4Style}>你平均花多少時間預訂遊覽車？</h4>
            </div>
          </div>
          <div class="row section3">
            <div class="col-md-3 col-md-offset-1 col-sm-7 col-xs-12 rec color1">
              <div class="textbox">
                <h2 class="title" style={h2Style}>1  搜尋</h2>
                <h5 class="content" style={h5Style}>輸入地點，選擇人數、廠牌、排序方式，省略撥打電話的繁瑣流程，直接且安全地找到最適合自己的遊覽車。</h5>
              </div>
            </div>
            <div class="col-md-6 col-md-offset-1 col-sm-4 col-xs-0">
              <div class="pic pic1"></div>
            </div>
          </div>
          <div class="row section3">
            <div class="col-md-6 col-md-offset-1 col-sm-4 col-xs-0">
              <div class="pic pic2"></div>
            </div>
            <div class="col-md-3 col-md-offset-1 col-sm-7 col-xs-12 rec color2">
              <div class="textbox">
                <h2 class="title" style={h2Style}>2  瀏覽</h2>
                <h5 class="content" style={h5Style}>省略電話詢問的繁瑣階段，直接瀏覽遊覽車的相關資料，包括簡介、照片、設備以及業者評價，增近對遊覽車的瞭解。</h5>
              </div>
            </div>
          </div>
          <div class="row section3">
            <div class="col-md-3 col-md-offset-1 col-sm-7 col-xs-12 rec color3">
              <div class="textbox">
                <h2 class="title" style={h2Style} >3  預訂</h2>
                <h5 class="content small">我們使用線上信用卡支付系統，您不需攜帶金錢，旅行結束後業者會自動收到款項。此前若業者沒有履行服務，費用將會全額退款，保障消費者權益。</h5>
              </div>
            </div>
            <div class="col-md-6 col-md-offset-1 col-sm-4 col-xs-0">
              <div class="pic pic3"></div>
            </div>
          </div>
          <div class="row section3">
            <div class="col-md-6 col-md-offset-1 col-sm-4 col-xs-0">
              <div class="pic pic4"></div>
            </div>
            <div class="col-md-3 col-md-offset-1 col-sm-7 col-xs-12 rec color4">
              <div class="textbox">
                <h2 class="title" style={h2Style} >4  評價</h2>
                <h5 class="content" style={h5Style}>體驗完遊覽車的服務後，消費者與業者可以給予雙邊評價，分享經驗給大家，共同創造一個正向的旅遊社群。</h5>
              </div>
            </div>
          </div>
          <div class="row section4">
            <div class="col-xs-12 img">
              <div class="col-xs-offset-1 text_area">
                <h2 style={h2Style}>5分鐘</h2>
                <h4>讓你搞定全程的交通問題</h4>
                <div class="btn">立即搶先註冊→</div>
              </div>
            </div>
            <div class="col-sm-11 col-xs-12 white_rec"></div>
          </div>
          <div class="row section5">
            <div class="col-xs-12 text_area">
              <h2 style={h2Style}>省錢、省時、自動化</h2>
              <h4 style={h4Style}>大型團旅遊或出差的最佳選擇</h4>
            </div>
          </div>
          <div class="row section6">
            <div class="col-sm-5 col-sm-offset-1 col1">
              <div class="pic pic1"></div>
              <div class="text_area"> 
                <h4 style={h4Style}>巴士光年讓您多吃一頓大餐！</h4>
                <h5 style={{...h6Style,lineHeight:2}}>巴士光年幫您精打細算，只要輸入合理的預算，系統自動搜尋到理想中的遊覽車，您不用再害怕訂車時的模糊定價，透明且合理的出租價格，不只保障價格合理性，省下的錢更能增添您旅程的加菜金。</h5>
              </div>
            </div>
            <div class="col-sm-5 col2">
              <div class="pic pic2"></div>
              <div class="text_area"> 
                <h4 style={h4Style}>您是有效率的消費者！</h4>
                <h5 style={{...h6Style,lineHeight:2}}>打了無數通電話給不同的業者，覺得用電話跟業者溝通不良又浪費時間嗎？巴士光年是您提高效率的好幫手。不到5分鐘內搞定搜尋、交易、行程規劃，把更多的時間留給和親朋好友相處的美好時光吧！</h5>
              </div>
            </div>
          </div>
          <div class="row section7">
            <div class="col-xs-12 logo_area">
              <label>
                <div class="col-sm-offset-1">
                  <div class="text_area">
                    <h3 class="title" style={h3Style}>巴士光年 感謝您的瀏覽</h3>
                    <h5 class="subtitle" style={h5Style}>Thanks for your "attention"!</h5>
                  </div>
                </div>
                <input id="easter_egg" type="checkbox"/>
                <div class="img_area">
                  <hr/><img src="https://i.imgur.com/hwI0Cjh.png" alt=""/>
                </div>
              </label>
              <div class="btn">現在就成為用戶</div>
            </div>
          </div>
          <div class="row section8">
            <div class="col-xs-12 footer">
              <div class="col-sm-6 col-sm-offset-1">
                <h4 class="title" style={h4Style}> 您寶貴的意見是我們進步的動力</h4>
                <p>巴士光年致力於解決遊覽車市場，使用電話詢價的傳統方式，取而代之透過網頁平台，建立更方便的工具且保障雙方權益。我們相信這個時代該要有合理的媒合預訂系統，去正向影響遊覽車的市場及民眾的旅遊體驗。</p>
                <textarea placeholder="目前我們的專案仍然在開發階段，若有任何的建議或是疑慮，歡迎在此留言向我們反應，謝謝。" rows="6"></textarea>
                <div class="btn">輸入Enter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;



