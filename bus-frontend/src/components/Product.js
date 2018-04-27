import React from 'react';

// ... global stylish
const h1 = { fontSize : 80 };
const h2 = { fontSize : 60 };
const h3 = { fontSize : 45 };
const h4 = { fontSize : 30 };
const h5 = { fontSize : 20 };
const h6 = { fontSize : 15 };
const p  = { fontSize : 15, letterSpacing : 1 };
const borderStyle = {border:'0.5px solid green' };
const noPadding = {
  paddingTop : 0,
  paddingBottom : 0,
  paddingLeft : 0,
  paddingRight : 0,
};
const noMargin = {
  marginTop : 0,
  marginBottom : 0,
  marginLeft : 0,
  marginRight : 0,
};

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      height: '105%',
      weight: '105%',
      backgroundColor : '#EFEFEF',
      color : '#36B9C1',
    }
  }
  onMouseOver = () => {
    this.setState({ 
      height: '120%',
      weight: '120%',
      backgroundColor : '#36B9C1',
      color: '#EFEFEF'
    });
  }
  onMouseOut = () => {
    this.setState({ 
      height: '105%',
      weight: '105%',
      backgroundColor : '#EFEFEF',
      color : '#36B9C1',
    });
  }
  itemClicked = () => {
    // console.log(this.props.item);
    this.props.callbackClick(this.props.item);
  }
  render() {
    const {price = "none" } = this.props.item.order || {};
    const cardStyle={
      display : 'inline-block',
      width : 270,
      marginTop : 50,
      left : '50%',
      transform : 'translateX(-50%)',
      backgroundColor : 'white',
      borderRadius: 10,
      overflow : 'hidden',
      boxShadow : '0px 0px 12px rgba(0, 0, 0, 0.2)',
    };
    const topStyle = {
      height : 200,
      overflow : 'hidden'
    };
    const buspicStyle = { 
      height : this.state.height,
      weight: this.state.weight,
      transitionDuration: '0.5s'
    };
    const sizeStyle = {
      width : 55,
      height : 55,
      borderRadius : '100%',
      position : 'absolute',
      top : 15,
      right : 15,
      backgroundColor : this.state.backgroundColor,
      color : this.state.color,
      transitionDuration: '0.5s',
      boxShadow : '0px 0px 12px rgba(0, 0, 0, 0.2)'
    };
    const maxamountStyle = {
      position : 'absolute',
      top : '50%',
      left : '50%',
      transform : 'translateX(-50%) translateY(-50%)',
      textAlign : 'center',
      ...h6
    };
    const bottomStyle = {
      paddingTop : 15,
      paddingLeft : 15,
      paddingRight : 15
    };
    const busnameStyle = {
      ...h4,
      ...noPadding,
      ...noMargin,
      fontWeight: 500
    };
    const contentStyle = {
      ...p
    };
    const averageStarStyle = {
      color : '#EEC853',
      letterSpacing : 4,
      ...h5
    };
    const blueStyle = {
      color : '#1085A8'
    };
    const btnAreaStyle = {
      ...noPadding,
      ...noMargin,
      textAlign : 'center',
      marginTop: 20,
      marginBottom: 10
    };
    const btnStyle = {
      width : '42%',
      border : '1px solid #383838',
      ...h6,
      fontWeight : 300,
      letterSpacing: 5,
      marginLeft: 4,
      marginRight: 4
    };
    const barStyle = {
      borderBottom: '5px solid #36B9C1'
    };
    return (
      <div class="bus_card_area col-lg-3 col-md-4 col-sm-6 col-xs-12"> 
        <div className="bus_card" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={cardStyle}>
          <div className="top" style={topStyle}>
            <img className="bus_pic"  style={buspicStyle} src={this.props.item.img_src} alt=""/>
            <div className="size" style={sizeStyle}>
              <div className="max_amount" style={maxamountStyle}>{this.props.item.description.max_amount}人</div>
            </div>
          </div>
          <div className="bottom" style={bottomStyle}>
            <h4 className="bus_name" style={busnameStyle}>{this.props.item.name}</h4>
            <p className="content" style={contentStyle}>
              <h5 className="average_stars" style={averageStarStyle}> ★★★★★</h5>
              <div className="price">價格：<span className="currency"> <span className="price_perday_low" style={blueStyle}>{price}</span><span>/ 天</span></span></div>
              <div className="brand_name">廠牌：{this.props.item.brand_name}</div>
              <div className="company_name">擁有者：{this.props.item.company_name}</div>
              <div className="stock"> 已預訂 <span className="availablable_num" style={blueStyle}>2/7 台</span></div>
            </p>
            <div class="btn_area" style={btnAreaStyle}>
              <div onClick={this.itemClicked} class="btn edit_btn" style={btnStyle}>編輯</div>
              <div class="btn delete_btn" style={btnStyle}>刪除</div>
            </div>
          </div>
          <div className="bar" style={barStyle}></div>
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

export default Product