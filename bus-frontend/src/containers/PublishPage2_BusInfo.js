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


class PublishPage2_BusInfo extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '25%',
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
      fontWeight: 300
    };
    const questStyle = {
      ...h5,
      fontWeight: 400,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)'
    };
    const inputStyle = {
      width: '60%',
      height: 40,
      paddingLeft: 10,
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 3,
      backgroundColor: '#fff'
    };
    const brandStyle = {
      width: '60%',
      height: 40,
      backgroundColor: 'white',
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 3,
      paddingLeft: 10
    };
    const rangeStyle = {
      width: '60%',
      outline: 'none',
      background: '#DC4F48',
      transition: '0.2s'
    };
    const redStyle = {
      color: 'red'
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
           <div className="progess" style={progressStyle}>25%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>現在，就開始發布您的遊覽車吧。</h3>
              <div class="quest_area" style={mT40Style}>
              <h5 class="quest_name" style={questStyle}>首先請選擇您的遊覽車品牌產地<span class="red" style={redStyle}> *</span></h5>
              <select name="YourBrand" style={brandStyle}>
                <option value="Taiwan">台灣牌</option>
                <option value="China">中國牌</option>
                <option value="US">歐美牌</option>
                <option value="Japan">日本牌</option>
              </select>
              <h6 class="subtitle" style={subTitleStyle}>選擇您的遊覽車車輛品牌之國產地區</h6>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>您可輸入遊覽車的品牌名稱</h5>
                <input class="quest_answer" type="text" style={inputStyle}/>
                <h6 class="subtitle" style={subTitleStyle}>範例：Volvo, TOYOTA, 裕隆, etc...</h6>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>最多可容納多少乘客？<span class="red" style={redStyle}> *</span></h5>
                <input class="quest_range" type="range" min="0" max="100" step="1" value="0" style={rangeStyle}/>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>該車種的出租數量有多少台？<span class="red" style={redStyle}> *</span></h5>
                <input class="quest_range" type="range" min="0" max="100" step="1" value="0" style={rangeStyle}/>
              </div>
              <h6 class="remind" style={subTitleStyle}> <span class="red" style={redStyle}>*</span><span>為必填</span></h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_1_company" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_3_accessory" style={{...btnStyle,...rightStyle}}> 下一頁 </a>
            </div>
            <img class="col-sm-5 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage2_BusInfo;
