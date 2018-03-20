import React from 'react';

class Item extends React.Component {

  itemClicked = () => {
    // console.log(this.props.item);
    this.props.callbackClick(this.props.item);
  }

  render() {
    const {price = "none" } = this.props.item.order || {};
    return (
      <div onClick={this.itemClicked} className="bus_card">
        <div className="top">
          <div className="bus_pic"></div>
          <div className="size">
            <div className="max_amount">{this.props.item.description.max_amount}人</div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="bus_name">{this.props.item.name}</h1>
          <div className="content">
            <div className="average_stars"> </div>
            <div className="price">價格：<span className="currency"> <span className="blue price_perday_low">{price}</span><span>/ 天</span></span></div>
            <div className="company_name">擁有者：{this.props.item.company_name}</div>
            <div className="reg_date">註冊日：{this.props.item.reg_date}</div>
            <div className="stock"> 已預訂 <span className="blue availablable_num">2/7 台</span></div>
          </div>
          <div className="bar"></div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return{
//     selectItem : dispatch
//   }
// }

export default Item