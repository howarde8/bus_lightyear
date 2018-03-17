import React from 'react';
// import { relative } from 'path';
import '../styles/Homepage.css';

// const h1 = {fontSize:100};
// const h4 = {fontSize:30};

// const picture ={
//   position: 'relative',
//   backgroundImage:"url(https://i.imgur.com/Qj2onou.jpg)",
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   height: 700,
// };
// const cover = {
//   position:'absolute',
//   width:'100%',
//   height:'100%',
//   backgroundColor:'rgba(0,0,0,0.5)',
// };
// const text_block = {
//   position: 'relative',
//   marginTop:250,
//   textAlign:'center',
//   color:'white',
// };
// const buspageTitle = {
//   letterSpacing:12,
//   fontWeight:400
// };
// const subtitle = {
//   marginTop:20,
//   letterSpacing:8,
//   fontWeight:300
// };
// const icon_area = {
//   position: relative,
//   height: 150,
//   backgroundColor:'rgba(0,0,0,0.1)'
// };
// const icon_block = {
//   position: relative,
//   height: '100%',
//   borderWidth: 5,
//   borderColor: 'black',
//   backgroundColor:'red'
// };

class Homepage extends React.Component {
  
  render() {
    return (
      <div class="homepage">
        <div class="container-fluid">
          <div class="row picture">
              <div class="cover"></div>
              <div class="text_block">
                <h1 class="buspage_title">巴士光年</h1>
                <h4 class="subtitle">最快速且方便的遊覽車預訂體驗</h4>
              </div>
          </div>
        </div>
        <div class="container">
          <div class="row icon_area">
            <div class="col-xs-4 icon_block">
              <img src="https://i.imgur.com/epYOT2a.png" class="icon_img" alt=""/>
              {/* ../assets/icons/search.png */}
              <div class="icon_text">
                <h4 class="icon_text_title">快速搜尋</h4>
                <h6 class="icon_text_subtitle">輸入您的出發地立即找到相關結果</h6>
              </div>
            </div>
            <div class="col-xs-4 icon_block">
              <img src="https://i.imgur.com/CrImiud.png" class="icon_img" alt=""/>
              {/* ../assets/icons/folder.png */}
              <div class="icon_text">
                <h4 class="icon_text_title">資訊透明</h4>
                <h6 class="icon_text_subtitle">完整資訊結合用戶評價讓您評估出最好的選擇</h6>
              </div>
            </div>
            <div class="col-xs-4 icon_block">
              <img src="https://i.imgur.com/HrYLeiJ.png" class="icon_img" alt=""/>
              {/* ../assets/icons/smartpay.png */}
              <div class="icon_text">
                <h4 class="icon_text_title">線上預訂</h4>
                <h6 class="icon_text_subtitle">取代繁瑣的電話預訂線上即可完成預訂</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="bgc_gray">
          <div class="container commercial_area">
            <div class="row">
              <div class="text_area">
                <h2 class="text_title">明日的旅程，現在開始</h2>
                <h4 class="text_subtitle">點選以下的遊覽車，看看哪些符合您旅行的規格【廣告】</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
