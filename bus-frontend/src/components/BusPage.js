import React from 'react';
import '../styles/Buspage.css';
import NavBar from './Navbar';
import Order from '../containers/Order';

class BusPage extends React.Component {
  
  render() {
    return (
      <div className="buspage">
        <NavBar/>
        <div className="container-fluid">
          <div className="col-lg-7 col-sm-12 col-lg-offset-1 picture"></div>
          <Order/>
          {/* Ｏ Ｒ Ｄ Ｅ Ｒ  */} 
          {/* <div className="col-lg-3 col-lg-offset-8 col-sm-10 col-sm-offset-1 order">
            <div className="container-fluid">
              <div className="row">
                <div className="banner col-xs-12">
                  <h3>
                    <div className="price_perday_low">$ 5488 - </div>
                    <div className="price_perday_high">12000 TWD </div>
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="click-area col-xs-offset-1 col-xs-10">
                  <h6 className="text">租用日期</h6>
                  <div className="order-block">
                    <h6 className="date text-muted">出發日</h6>
                    <h6>→</h6>
                    <h6 className="date text-muted">結束日</h6>
                  </div>
                </div>
                <div className="click-area col-xs-offset-1 col-xs-10">
                  <h6 className="text">上車地點</h6>
                  <div className="order-block"> 
                    <h6 className="pickup_address text-muted">地址</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="btn order-btn col-xs-8 col-xs-offset-2">開始預定</div>
                <div className="reminder col-xs-8 col-xs-offset-2">
                  <h6 className="text-muted">您暫時不會被收費</h6>
                </div>
              </div>
            </div>
          </div> */}
          {/* Ｏ Ｒ Ｄ Ｅ Ｒ  */} 

          {/* Ｉ Ｎ Ｆ Ｏ  */} 
          <div className="row">
            <div className="info col-lg-6 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">

            {/* ＧＵＩＤＥ ＬＩＮＥ */}   
              <section id="guide-line">
                <ul className="nav">
                  <a className="nav-link" href="#main-info">概述</a>
                  <a className="nav-link" href="#accessory">設備</a>
                  <a className="nav-link" href="#comment">評價</a>
                  <a className="nav-link" href="#owner">車主</a>
                </ul>
              </section>

            {/* ＭＡＩＮ ＩＮＦＯ */}   
              <section id="main-info">
                <h3 className="name"> 遊覽車標題（Ｘ人座Ｙ牌遊覽車） </h3>
                <h5 className="fw total_comments"> Ｘ 則評價</h5>
                <h5 className="fw average_stars"> ★★★★★</h5>
                <h5 className="fw max_amount">最高乘載人數：ＸＸ 人</h5>
                <h5 className="fw availablable_num">尚有 Ｘ 台</h5>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＩＮＴＲＯＤＵＣＴＩＯＮ */} 
              <section className="content">
                <h4 className="title">簡介</h4>
                <p className="introduction mb20"> 這裡要放簡介</p>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＰＲＥＣＡＵＴＩＯＮ */} 
              <section className="content">
                <h4 className="title">注意事項</h4>
                <div className="block">
                  <p className="precaution mb20">這裡要放注意事項</p>
                </div>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＰＲＥＰＡＲＥ */} 
              <section className="content">
                <h4 className="title">可訂狀態</h4>
                <p className="prepare_day mb20">這裡要放可訂狀態</p>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＣＡＮＣＬＥ */} 
              <section className="content">
                <h4 className="title">退訂方案</h4>
                <p className="cancel mb20">這裡要放退訂方案</p>
              </section>

            {/* ＡＣＣＥＳＳＯＲＹ */} 
              <section id="accessory">
                <h4 className="title">設備與安全措施</h4>
                <div className="top">
                  <div className="entertainment"> 
                    <h5>設施</h5>
                    <div className="block"> <img className="icon" src="" alt=""/>
                      <h6 className="icon-name">icon名稱</h6>
                    </div>
                  </div>
                  <div className="safe_facility">
                    <h5>安全設備</h5>
                    <div className="block"> <img className="icon" src="" alt=""/>
                      <h6 className="icon-name">icon名稱</h6>
                    </div>
                  </div><br/>
                </div>
              </section>

            {/* ＯＷＮＥＲ */} 
              <section id="owner">
                <div className="container-fluid">
                  <div className="row">
                    <div className="block col-sm-9">
                      <h3 className="title company_name"> 這裡放公司名稱</h3>
                      <h5 className="average_stars">★★★★★</h5>
                      <h6 className="total_comment text-muted"> ＸＸ 則評論</h6>
                      <h6 className="approval text-muted">這裡放認證</h6>
                      <h6 className="reg_date text-muted">這裡放刊登時間</h6>
                    </div>
                    <div className="block col-sm-3"><img src="" alt=""/></div>
                  </div>
                  <div className="row"> 
                    <p className="info col-sm-12">這裡放公司簡介</p>
                    <div className="owner-btn btn">其他車源</div>
                    {/* <input id="search_bar" type="search" style="font-size: 15px;" color="$color_gray" placeholder=" 搜尋評價"/> */}
                  </div>
                </div>
              </section>
            
            {/* ＣＯＭＭＥＮＴ */} 
              <section id="comment"> 
                <div className="comment" > <img className="user_img_src" src="" alt=""/>
                  <div className="user_info">
                    <h5 className="user_id">用戶帳號</h5>
                    <div className="comment_date text-muted">用戶註冊日期</div>
                  </div>
                  <div className="comment_comment">
                    <p> 用戶的評價......現在還沒綁定資料庫 </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default BusPage;
