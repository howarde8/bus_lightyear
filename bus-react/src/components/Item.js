import React from 'react';

export class Item extends React.Component {
  render() {
    return (
      <div class="bus_card">
        <div class="top">
          <div class="bus_pic"></div>
          <div class="size">
            <div class="max_amount">{this.props.item.description.max_amount}人</div>
          </div>
        </div>
        <div class="bottom">
          <h1 class="bus_name">{this.props.item.name}</h1>
          <div class="content">
            <div class="average_stars"> </div>
            <div class="price">價格：<span class="currency"> <span class="blue price_perday_low">{this.props.item.order.price}</span><span>/ 天</span></span></div>
            <div class="company_name">擁有者：{this.props.item.company_name}</div>
            <div class="reg_date">註冊日：{this.props.item.reg_date}</div>
            <div class="stock"> 已預訂 <span class="blue availablable_num">2/7 台</span></div>
          </div>
          <div class="bar"></div>
        </div>
      </div>
    );
  }
}