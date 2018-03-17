import React from 'react';
import '../styles/Bookingpage.css';

class Bookingpage extends React.Component {
  
  render() {
    return (
      <div id="booking_page">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-xs-12 booking_area"> 
              <h4 class="booking_id">訂單編號： J578578</h4>
              <h1 class="bus_name">臺北市雙層巴士</h1>
            </div>
            <div class="col-sm-4 col-xs-12 btn_area">  
              <div class="btn_space">
                <div class="change_btn btn">更改預訂</div>
                <div class="print_btn btn">列印</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-7 user_area"> 
              <div class="block">
                <div class="row">
                  <div class="title col-xs-4">預訂帳號    </div>
                  <div class="display user_id col-xs-7">j5630300127</div>
                </div>
                <div class="row">
                  <div class="title col-xs-4">聯絡電話    </div>
                  <div class="display user_id col-xs-7">+886-911-151-127</div>
                </div>
                <hr/>
                <div class="row">
                  <div class="title col-xs-4">乘車時間   </div>
                  <div class="display user_id col-xs-7">2018/02/28(四) 
                    <div class="display">08:00</div>
                  </div>
                </div>
                <div class="row">
                  <div class="title col-xs-4">結束時間    </div>
                  <div class="display user_id col-xs-7">2018/02/28(四)
                    <div class="display">17:00</div>
                  </div>
                </div>
                <hr/>
                <div class="row">
                  <div class="title col-xs-4">乘車地址   </div>
                  <div class="display user_id col-xs-7">新竹縣寶山鄉基八一路87號</div>
                </div>
                <hr/>
                <div class="row">
                  <div class="title col-xs-4">行程描述  </div>
                  <div class="display user_id col-xs-7">由寶山雙胞胎井出發 --> 北浦擂茶 --> 南寮腳踏車 --> 新竹火車站 --> 寶山鄉基八一路 </div>
                </div>
              </div>
            </div>
            <div class="col-sm-5 company_area">
              <div class="block">
                <div class="row">
                  <div class="pic col-sm-12"></div>
                </div>
                <div class="row">
                  <p class="col-sm-12">這裡放公司的簡介，然後限制字數（80）</p>
                </div>
                <div class="row">
                  <div class="btn">查看更多</div>
                </div>
                <hr/>
                <div class="row">
                  <div class="title col-xs-4">聯絡電話</div>
                  <div class="display user_id col-xs-7">+886-3567-8111</div>
                </div>
                <div class="row">
                  <div class="title col-xs-4">聯絡信箱</div>
                  <div class="display user_id col-xs-7">fake_mail@yahoo.com.tw</div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 pic_area">
              <div class="pic"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bookingpage;
