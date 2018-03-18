import React from 'react';
import '../styles/Buspage.css';
// import { relative } from 'path';

class BusPage extends React.Component {
  
  render() {
    return (
      <div class="buspage">
        <div class="container-fluid">
          <div class="col-lg-7 col-sm-12 col-lg-offset-1 picture"></div>

          {/* Ｏ Ｒ Ｄ Ｅ Ｒ  */} 
          <div class="col-lg-3 col-lg-offset-8 col-sm-10 col-sm-offset-1 order">
            <div class="container-fluid">
              <div class="row">
                <div class="banner col-xs-12">
                  <h3>
                    <div class="price_perday_low">$ 5488 - </div>
                    <div class="price_perday_high">12000 TWD </div>
                  </h3>
                </div>
              </div>
              <div class="row">
                <div class="click-area col-xs-offset-1 col-xs-10">
                  <h6 class="text">租用日期</h6>
                  <div class="order-block">
                    <h6 class="date text-muted">出發日</h6>
                    <h6>→</h6>
                    <h6 class="date text-muted">結束日</h6>
                  </div>
                </div>
                <div class="click-area col-xs-offset-1 col-xs-10">
                  <h6 class="text">上車地點</h6>
                  <div class="order-block"> 
                    <h6 class="pickup_address text-muted">地址</h6>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="btn order-btn col-xs-8 col-xs-offset-2">開始預定</div>
                <div class="reminder col-xs-8 col-xs-offset-2">
                  <h6 class="text-muted">您暫時不會被收費</h6>
                </div>
              </div>
            </div>
          </div>
          {/* Ｏ Ｒ Ｄ Ｅ Ｒ  */} 

          {/* Ｉ Ｎ Ｆ Ｏ  */} 
          <div class="row">
            <div class="info col-lg-6 col-lg-offset-1 col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">

            {/* ＧＵＩＤＥ ＬＩＮＥ */}   
              <section id="guide-line">
                <ul class="nav">
                  <a class="nav-link" href="#main-info">概述</a>
                  <a class="nav-link" href="#accessory">設備</a>
                  <a class="nav-link" href="#comment">評價</a>
                  <a class="nav-link" href="#owner">車主</a>
                </ul>
              </section>

            {/* ＭＡＩＮ ＩＮＦＯ */}   
              <section id="main-info">
                <h3 class="name"> 遊覽車標題（Ｘ人座Ｙ牌遊覽車） </h3>
                <h5 class="fw total_comments"> Ｘ 則評價</h5>
                <h5 class="fw average_stars"> ★★★★★</h5>
                <h5 class="fw max_amount">最高乘載人數：ＸＸ 人</h5>
                <h5 class="fw availablable_num">尚有 Ｘ 台</h5>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＩＮＴＲＯＤＵＣＴＩＯＮ */} 
              <section class="content">
                <h4 class="title">簡介</h4>
                <p class="introduction mb20"> 這裡要放簡介</p>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＰＲＥＣＡＵＴＩＯＮ */} 
              <section class="content">
                <h4 class="title">注意事項</h4>
                <div class="block">
                  <p class="precaution mb20">這裡要放注意事項</p>
                </div>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＰＲＥＰＡＲＥ */} 
              <section class="content">
                <h4 class="title">可訂狀態</h4>
                <p class="prepare_day mb20">這裡要放可訂狀態</p>
              </section>

            {/* ＣＯＮＴＥＮＴ＿ＣＡＮＣＬＥ */} 
              <section class="content">
                <h4 class="title">退訂方案</h4>
                <p class="cancel mb20">這裡要放退訂方案</p>
              </section>

            {/* ＡＣＣＥＳＳＯＲＹ */} 
              <section id="accessory">
                <h4 class="title">設備與安全措施</h4>
                <div class="top">
                  <div class="entertainment"> 
                    <h5>設施</h5>
                    <div class="block"> <img class="icon" src="" alt=""/>
                      <h6 class="icon-name">icon名稱</h6>
                    </div>
                  </div>
                  <div class="safe_facility">
                    <h5>安全設備</h5>
                    <div class="block"> <img class="icon" src="" alt=""/>
                      <h6 class="icon-name">icon名稱</h6>
                    </div>
                  </div><br/>
                </div>
              </section>

            {/* ＯＷＮＥＲ */} 
              <section id="owner">
                <div class="container-fluid">
                  <div class="row">
                    <div class="block col-sm-9">
                      <h3 class="title company_name"> 這裡放公司名稱</h3>
                      <h5 class="average_stars">★★★★★</h5>
                      <h6 class="total_comment text-muted"> ＸＸ 則評論</h6>
                      <h6 class="approval text-muted">這裡放認證</h6>
                      <h6 class="reg_date text-muted">這裡放刊登時間</h6>
                    </div>
                    <div class="block col-sm-3"><img src="" alt=""/></div>
                  </div>
                  <div class="row"> 
                    <p class="info col-sm-12">這裡放公司簡介</p>
                    <div class="owner-btn btn">其他車源</div>
                    {/* <input id="search_bar" type="search" style="font-size: 15px;" color="$color_gray" placeholder=" 搜尋評價"/> */}
                  </div>
                </div>
              </section>
            
            {/* ＣＯＭＭＥＮＴ */} 
              <section id="comment"> 
                <div class="comment" > <img class="user_img_src" src="" alt=""/>
                  <div class="user_info">
                    <h5 class="user_id">用戶帳號</h5>
                    <div class="comment_date text-muted">用戶註冊日期</div>
                  </div>
                  <div class="comment_comment">
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
