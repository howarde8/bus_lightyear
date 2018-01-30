import React from 'react';

export class Item extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.item.name}<br/>
          {this.props.item.img_src}<br/>
          {this.props.item.order.discount}折 {this.props.item.order.price}元<br/>
          擁有者：{this.props.item.company_name}<br/>
          刊登日期：{this.props.item.reg_date}<br/>
        </p>
      </div>
    );
  }
}