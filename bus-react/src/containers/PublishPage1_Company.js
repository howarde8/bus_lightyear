import React from 'react';
import Navbar from '../components/Navbar';


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


class PublishPage1_Company extends React.Component {
  render() {
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
    const questStyle = {
      fontWeight: 400,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)'
    };
    const inputStyle = {
      width: '60%',
      paddingLeft: 10,
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 3,
      backgroundColor: '#fff'
    }
    const redStyle = {
      color: 'red'
    }
    return (
      <div id="publish_page_1" style={whiteStyle}>
        <Navbar/>
        <div className="container">
          <div className="row" style={mT40Style}>
            <div class="col-sm-6 col-xs-12 data_arae">
              <h3 class="title" style={titleStyle}>哈囉 <span class="user_name">user_name</span>！歡迎成立您的公司帳號。</h3>
              <div class="quest_area" style={mT40Style}>
                <h4 class="quest_name" style={questStyle}>公司名稱<span class="red" style={redStyle}> *</span></h4>
                <input class="quest_answer" type="text" style={inputStyle}/>
                <h6 class="subtitle">請輸入您的公司對經濟部的正式登記名稱，提升用戶對您的信任度。</h6>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h4 class="quest_name" style={questStyle}>公司電話<span class="red" style={redStyle}> *</span></h4>
                <input class="quest_answer" type="tel" style={inputStyle}/>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h4 class="quest_name" style={questStyle}>營業地址<span class="red" style={redStyle}> *</span></h4>
                <input class="quest_answer" type="text" style={inputStyle}/>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h4 class="quest_name" style={questStyle}>公司簡介</h4>
                <textarea rows="4" placeholder="撰寫公開簡介" style={textAreaStyle}></textarea>
              </div>
              <h6 class="remind"> <span class="red" style={redStyle}>* </span><span>為必填</span></h6>
              <input class="btn btn_finish" type="submit" value="完成"/>
            </div>
            <img class="col-sm-6 col-xs-0" src="https://i.imgur.com/5rPk2bu.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage1_Company;
