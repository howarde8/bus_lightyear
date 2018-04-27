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
const center = {
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
}


class PublishPage4_Promote extends React.Component {
  render() {
    const barStyle = {
      height: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    };
    const progressStyle = {
      width: '60%',
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
    const photoAreaStyle = {
      width: '100%',
      height: 400,
      border: '1px dashed rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      cursor: 'pointer'
    };
    const photoStyle = {
      position: 'absolute',
      ...center,
      width: '60%',
      height: '100%',
      backgroundImage: 'url(https://i.imgur.com/vvlYmK9.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '60%',
      opacity: 0.2
    }
    const photoBtnStyle = {
      ...center,
      ...h4,
      padding: '20px 40px',
      backgroundColor: '#1092BA',
      color: 'white',
      borderRadius: 5,
      userSelect: 'none',
    };
    const textAreaStyle = {
      width: '100%',
      padding: 10,
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 1)'
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
        <Navbar/>
        <div className="container-fluid">
          <div className="row" style={barStyle}>
           <div className="progess" style={progressStyle}>60%</div>
          </div>
        </div>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT40Style}>
            <div class="col-sm-10 col-sm-offset-1 col-xs-12 data_arae" style={{...noPadding}}>
              <h3 class="title" style={titleStyle}>向大家炫耀一下您的遊覽車</h3>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>上傳您的遊覽車封面照片<span class="red" style={redStyle}> *</span></h5>
                <h6 class="subtitle" style={subTitleStyle}>一開始您可以只放一張照片，之後再回來添加也行。照片上記得要包括乘客可使用的內部空間，乘客更容易想像乘坐您的遊覽車是什麼感覺了。</h6>
                <div class="photo_area" style={photoAreaStyle}> 
                  <div class="photo" style={photoStyle}> </div>
                  <button class="photo_btn" style={photoBtnStyle}> 上傳照片 </button>
                </div>
              </div>
              <div class="quest_area" style={mT40Style}>
                <h5 class="quest_name" style={questStyle}>編輯遊覽車描述</h5>
                <h6 class="subtitle" style={subTitleStyle}>這是您對遊覽車的簡要概述，使用者在閱讀詳細的資訊之前會先看這個。</h6>
                <textarea rows="6" placeholder="描述一下遊覽車的特色、設備、座椅、安全性等等......" style={textAreaStyle}></textarea>
              </div>
              <h6 class="remind" style={subTitleStyle}> <span class="red" style={redStyle}>*</span><span>為必填</span></h6>
              <hr/>
              <a class="btn btn_finish" href="./publish_3_accessory" style={btnStyle}> 返回 </a>
              <a class="btn btn_finish" href="./publish_5_calendar" style={{...btnStyle,...rightStyle}}> 下一頁 </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublishPage4_Promote;
