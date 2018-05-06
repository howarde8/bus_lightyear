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


class PublishPage7_Rule extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '99%',
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
      lineHeight: 2
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
      paddingTop: 10,
      paddingLeft: 20,
      marginTop: 30,
      marginBottom: 60,
      backgroundColor: '#1092BA',
      color: 'white',
      ...h5,
      fontWeight: 300,
      letterSpacing: 5
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
           <div className="progess" style={progressStyle}>99%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>您的當地法律和稅費</h3>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>請確保您已熟知當地相關法律以及<span class="blue" style={blueStyle}>巴士光年服務條款</span></h5>
                <p class="content" style={contentStyle}>請在發佈遊覽車前查閱適用的當地法規。</p> 
                <p class="content" style={contentStyle}>大部分的城市都制定了交通遊覽車的相關規定，許多地方可能還有具體的法規和條例。在大部分的地區，接待乘客之前，您必須先登記、取得許可證或遊覽車執照，您可能也需負責收取和匯繳特定的稅費。部分地區可能完全禁止遊覽租借。（光軒）</p> 
                <p class="content" style={contentStyle}>您需要對自己發佈遊覽車的決定負責，因此在巴士光年發佈遊覽車之前，您應先了解適用的法律和法規。接受我們的服務條款並發佈您的遊覽車，即代表您保證遵守適用的法律與法規。</p> 
              </div>
              <label class="container" style={containerStyle} value="no_smoking"> 我已瞭解並同意<span class="blue" style={blueStyle}>巴士光年服務條款</span>及當地相關法律規範<span class="red" style={redStyle}> *</span>
                <input type="checkbox" style={checkboxStyle}/>
                <span class="checkmark" style={checkmarkStyle}></span>
              </label>
              <h6 class="remind" style={subTitleStyle}> <span class="red" style={redStyle}>*</span><span>為必填</span></h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_6_price" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_8_finish" style={{...btnStyle,...rightStyle}}> 完成 </a>
            </div>
            <img class="col-sm-5 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage7_Rule;
