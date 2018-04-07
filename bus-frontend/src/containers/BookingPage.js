import React from 'react';
import '../styles/BookingPage.css';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
class BookingPage extends React.Component {
  
  render() {
    const BookingData = this.props.order;
    const IMG = {
      width: '100%',      
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
    return (
      <div id="booking_page">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-xs-12 booking_area"> 
              <h4 className="booking_id">訂單編號： J578578</h4>
              <h1 className="bus_name">{BookingData.name}</h1>
            </div>
            <div className="col-sm-4 col-xs-12 btn_area">  
              <div className="btn_space">
                <div className="change_btn btn">更改預訂</div>
                <div className="print_btn btn">列印</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-7 user_area"> 
              <div className="block">
                <div className="row">
                  <div className="title col-xs-4">預訂帳號    </div>
                  <div className="display user_id col-xs-7">j5630300127</div>
                </div>
                <div className="row">
                  <div className="title col-xs-4">聯絡電話    </div>
                  <div className="display user_id col-xs-7">+886-911-151-127</div>
                </div>
                <hr/>
                <div className="row">
                  <div className="title col-xs-4">乘車時間   </div>
                  <div className="display user_id col-xs-7">2018/02/28(四) 
                    <div className="display">08:00</div>
                  </div>
                </div>
                <div className="row">
                  <div className="title col-xs-4">結束時間    </div>
                  <div className="display user_id col-xs-7">2018/02/28(四)
                    <div className="display">17:00</div>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="title col-xs-4">乘車地址   </div>
                  <div className="display user_id col-xs-7">新竹縣寶山鄉高峰路87號</div>
                </div>
                <hr/>
                <div className="row">
                  <div className="title col-xs-4">行程描述  </div>
                  <div className="display user_id col-xs-7">由寶山雙胞胎井出發 --> 北浦擂茶 --> 南寮腳踏車 --> 新竹火車站 --> 寶山鄉基八一路 </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 company_area">
              <div className="block">
                <div className="row">
                  <div className="pic col-sm-12">
                    <img src={BookingData.company_src} style={{...IMG}} alt=""/>
                  </div>
                </div>
                <div className="row">
                  <p className="col-sm-12">{BookingData.description.introduction}</p>
                </div>
                <div className="row">
                  <div className="btn">查看更多</div>
                </div>
                <hr/>
                <div className="row">
                  <div className="title col-xs-4">聯絡電話</div>
                  <div className="display user_id col-xs-7">+886-3567-8111</div>
                </div>
                <div className="row">
                  <div className="title col-xs-4">聯絡信箱</div>
                  <div className="display user_id col-xs-7">fake_mail@yahoo.com.tw</div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 pic_area" style={{overflow: 'hidden'}}>
              <img src={BookingData.img_src} style={{...IMG}} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    order: state.get('order'),
  }
}
export default connect(mapStateToProps)(BookingPage);
