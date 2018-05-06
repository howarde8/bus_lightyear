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


class PublishPage3_Accessory extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '45%',
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
           <div className="progess" style={progressStyle}>45%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-5 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>您提供的設施有哪些？</h3>
                <div class="row">
                  <div class="col-sm-6 col-xs-12 data_arae" >
                    <div class="quest_area" style={mT40Style}>
                      <h5 class="quest_name" style={questStyle}>設施</h5>
                      <label class="container" style={containerStyle} value="heating"> 暖氣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="air_condition"> 空調冷氣
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="wifi"> 無線網路
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="tv"> 有線電視
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="ktv"> ＫＴＶ伴唱器材
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="microphone"> 麥克風
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="dvd"> ＤＶＤ影音系統
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="restroom"> 廁所
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="luggage"> 放置行李區
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="tour_service"> 導覽服務
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xs-12 data_arae" >
                    <div class="quest_area" style={mT40Style}>
                      <h5 class="quest_name" style={questStyle}>安全設備</h5>
                      <label class="container" style={containerStyle} value="recorder"> 行車記錄器
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="extinguisher"> 滅火器
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="hammer"> 擊窗器
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="glass"> 強化玻璃
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="safety_sunroof"> 安全天窗
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="exit"> 緊急逃生門
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="first_aid"> 急救包
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="barrier_free"> 無障礙設施
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="gps"> ＧＰＳ
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                      <label class="container" style={containerStyle} value="no_smoking"> 全面禁煙
                        <input type="checkbox" style={checkboxStyle}/>
                        <span class="checkmark" style={checkmarkStyle}></span>
                      </label>
                    </div>
                  </div>
                </div>
              <h6 class="remind" style={subTitleStyle}> <span class="red" style={redStyle}>*</span><span>為必填</span></h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_2_bus_info" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_4_promote" style={{...btnStyle,...rightStyle}}> 下一頁 </a>
            </div>
            <img class="col-sm-5 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage3_Accessory;
