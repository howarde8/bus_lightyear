import React from 'react';
import PublishNavbar from '../components/PublishNavbar';


// ... global stylish
const h1 = { fontSize : 80 };
const h2 = { fontSize : 60 };
const h3 = { fontSize : 45 };
const h4 = { fontSize : 30 };
const h5 = { fontSize : 20 };
const h6 = { fontSize : 15 };
const p  = { fontSize : 15, letterSpacing : 1 };
const noPadding = {
  paddingTop : 0,
  paddingBottom : 0,
  paddingLeft : 0,
  paddingRight : 0,
}
const center = {
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
}

class PublishPage8_Finish extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '101%',
      height: '100%',
      position: 'absolute',
      left: -2,
      textAlign: 'right',
      paddingRight: 10,
      backgroundColor: '#EEC853',
      color: 'white',
      borderRadius: 5
    }
    const whiteStyle = {
      backgroundColor: 'white'
    };
    const mT40Style = {
      marginTop: 40
    };
    const titleStyle = {
      ...h3,
      fontWeight: 400,
      letterSpacing: 1.6,
      color: 'rgba(0, 0, 0, 0.65)'
    };
    const subTitleStyle = {
      fontWeight: 300,
      ...h6
    };
    const questStyle = {
      ...h5,
      fontWeight: 400,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)'
    };
    const contentStyle = {
      ...p,
      marginTop: 20,
      color: 'rgba(0, 0, 0, 0.6)'
    }
    const rowStyle = {
      paddingLeft:15
    };
    const containerStyle = {
      display: 'block',
      paddingLeft: 25,
      marginTop: 20,     
      cursor: 'pointer',
      userSelect: 'none',
      fontWeight: 300,
      ...h6
    };
    const checkboxStyle = {
      position: 'absolute',
      cursor: 'pointer',
      top: 1,
      left: 0
    };
    const checkmarkStyle = {
      display: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 25,
      height: 25,
      backgroundColor: '#eee'
    };
    const redStyle = {
      color: 'red'
    };
    const blueStyle = {
      color: '#1092BA',
      fontWeight: 500
    };
    const btnStyle = {
      width: 120,
      height: 50,
      paddingTop: 14,
      paddingLeft: 10,
      marginBottom: 60,
      backgroundColor: '#1092BA',
      color: 'white',
      ...h6,
      fontWeight: 300,
      letterSpacing: 2
    };
    const rightStyle = {
      position: 'absolute',
      right: 0 
    };
    return (
      <div id="publish_page_1" style={whiteStyle}>
        <PublishNavbar/>
        <div className="container-fluid">
          <div className="row" style={barStyle}>
           <div className="progess" style={progressStyle}>100%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>您已準備好發佈遊覽車！</h3>
              <p class="content" style={contentStyle}>點擊發佈之後，您可以很方便地設定可訂狀態，然後您就可以準備迎接第一位乘客了。</p> 
              <div class="quest_area" style={mT40Style}>
                <h6 class="subtitle" style={subTitleStyle}>關於遊覽車名稱、品牌、數量、乘客容量</h6>
                <a class="subtitle"  style={{...subTitleStyle,...blueStyle}} href="./publish_2_bus_info">修改</a>
                <hr/>
              </div>
              <div class="quest_area">
                <h6 class="subtitle" style={subTitleStyle}>關於設施與安全設備</h6>
                <a class="subtitle"  style={{...subTitleStyle,...blueStyle}} href="./publish_3_accessory">修改</a>
                <hr/>
              </div>
              <div class="quest_area">
                <h6 class="subtitle" style={subTitleStyle}>關於遊覽車的照片與簡短描述</h6>
                <a class="subtitle"  style={{...subTitleStyle,...blueStyle}} href="./publish_4_promote">修改</a>
                <hr/>
              </div>
              <div class="quest_area">
                <h6 class="subtitle" style={subTitleStyle}>決定預定設定與日曆</h6>
                <a class="subtitle"  style={{...subTitleStyle,...blueStyle}} href="./publish_5_calendar">修改</a>
                <hr/>
              </div>
              <div class="quest_area">
                <h6 class="subtitle" style={subTitleStyle}>決定價格與服務地區</h6>
                <a class="subtitle"  style={{...subTitleStyle,...blueStyle}} href="./publish_6_price">修改</a>
                <hr/>
              </div>
              <a class="btn btn_finish" href="./" style={btnStyle}>發佈遊覽車</a>
              <a class="btn btn_finish" href="./" style={{...blueStyle,...rightStyle,...h5}}>預覽頁面</a>
            </div>
            <img class="col-sm-5 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage8_Finish;
