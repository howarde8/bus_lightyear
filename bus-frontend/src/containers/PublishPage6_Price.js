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


class PublishPage6_Price extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '85%',
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
    const inputStyle = {
      width: '60%',
      height: 40,
      paddingLeft: 40,
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 3,
      backgroundColor: '#fff'
    };
    const markStyle = {
      ...h5,
      display: 'inline-block',
      position: 'absolute',
      top: 38,
      left: 10,
      color: 'rgba(0, 0, 0, 0.7)'
    };
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
      ...h5
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
           <div className="progess" style={progressStyle}>85%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>為您的遊覽車訂價，來做好待客的準備吧。</h3>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>為「每一小時」設定相同的基礎價格<span class="red" style={redStyle}> *</span></h5>
                <input class="quest_answer" type="text" style={inputStyle}/>
                <div style={markStyle} >＄</div>
                <h6 class="subtitle" style={subTitleStyle}><span style={blueStyle}>建議：</span>新車主會透過較低的價格來吸引頭幾筆預訂。</h6> 
                {/* <h6 class="subtitle" style={subTitleStyle}><span style={blueStyle}>增加遊覽車獲得預訂的機會：</span>設定「智慧訂價」，依據您區域的需求高低自動調整每晚價格，維持價格的競爭力。</h6> */}
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={{...questStyle,...mT40Style}}>設定您的遊覽車可服務的地區</h5>
                <div class="row" style={rowStyle}>
                  <div class="col-sm-6 col-xs-12 data_area" style={{...noPadding}} >
                    <div class="quest_area">
                      <label class="container" style={containerStyle} value="heating"> 台北市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="air_condition"> 新北市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="wifi"> 桃園縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="tv"> 新竹市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="ktv"> 新竹縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="microphone"> 苗栗縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="dvd"> 台中市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="restroom"> 台中縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="luggage"> 彰化縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="tour_service"> 南投縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12 data_area" style={{...noPadding}} >
                    <div class="quest_area">
                      <label class="container" style={containerStyle} value="recorder"> 宜蘭縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="extinguisher"> 基隆縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="hammer"> 花蓮縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="glass"> 台東縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="safety_sunroof"> 屏東縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="exit"> 高雄市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="first_aid"> 台南市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="barrier_free"> 嘉義市
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="gps"> 嘉義縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="no_smoking"> 雲林縣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h6 class="remind" style={subTitleStyle}><span class="red" style={redStyle}> *</span>為必填</h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_5_calendar" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_7_rule" style={{...btnStyle,...rightStyle}}> 下一頁 </a>
            </div>
            <img class="col-sm-5 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage6_Price;
