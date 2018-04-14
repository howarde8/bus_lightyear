import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Order extends React.Component{
  onClick = () =>{
    this.props.dispatch(push('/booking'));
  }
  render(){
    return(
      <div className="col-lg-3 col-lg-offset-8 col-sm-10 col-sm-offset-1 order">
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
          <div onClick={this.onClick} className="btn order-btn col-xs-8 col-xs-offset-2">開始預定</div>
          <div className="reminder col-xs-8 col-xs-offset-2">
            <h6 className="text-muted">您暫時不會被收費</h6>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(Order);