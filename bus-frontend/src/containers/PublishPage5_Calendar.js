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


class PublishPage5_Calendar extends React.Component {
  render() {
    const barStyle = {
      marginTop: 50,
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '70%',
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
      width: '60%',
      fontWeight: 300,
      lineHeight: 2
    };
    const questStyle = {
      ...h5,
      fontWeight: 400,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)'
    };
    const chooseStyle = {
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
    const calendarStyle = {
      width: '100%',
      height: 400,
      ...h3,
      textAlign: 'center',
      paddingTop: 150,
      border: '1px dashed rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      cursor: 'pointer'
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
      <div id="publish_page_5" style={whiteStyle}>
        <PublishNavbar/>
        <div className="container-fluid">
          <div className="row" style={barStyle}>
           <div className="progess" style={progressStyle}>70%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-10 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>成功的出租之路，從準確的日曆開始</h3>
              <h6 class="subtitle" style={subTitleStyle}>如果遊覽車有可訂的日期，乘客就可以即時預訂遊覽車。所以請及時更新日曆和遊覽車的可訂狀態，這樣一來，您就只會在遊覽車可以出租的日期收到預訂。</h6>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>您需要「至少」提前多久收到預訂？<span class="red" style={redStyle}> *</span></h5>
                <select name="prepare_day_end" style={chooseStyle}>
                  <option value="zero">當天</option>
                  <option value="one">1天</option>
                  <option value="two">2天</option>
                  <option value="three">3天</option>
                  <option value="seven">7天</option>
                </select>
                <h6 class="subtitle" style={subTitleStyle}><span style={blueStyle}>秘訣：</span>至少要求提前幾天通知，可讓您為乘客做好準備，但您可能會錯過最後一刻的預訂。</h6>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>乘客可以提前多久預訂？</h5>
                <select name="prepare_day_start" style={chooseStyle}>
                  <option value="zero">先預設所有時間都不可訂</option>
                  <option value="one">3個月</option>
                  <option value="two">6個月</option>
                  <option value="three">9個月</option>
                  <option value="seven">隨時</option>
                </select>
                <h6 class="subtitle" style={subTitleStyle}><span style={blueStyle}>提醒：</span>您只能開放您能夠接待的日期，避免取消預訂或是拒絕乘客的申請。</h6>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>更新您的日曆</h5>
                <h6 class="subtitle" style={subTitleStyle}>用戶會看到您的日曆狀況，並預訂可供出租的日子。點擊並拖曳來開放您希望接待乘客的日期。</h6>
                <div class="photo_area" style={calendarStyle}>Calendar Function</div>
              </div>
              <h6 class="remind" style={subTitleStyle}> <span class="red" style={redStyle}>*</span> 為必填</h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_4_promote" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_6_price" style={{...btnStyle,...rightStyle}}> 下一頁 </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage5_Calendar;
