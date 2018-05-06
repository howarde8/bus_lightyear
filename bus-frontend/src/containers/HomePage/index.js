import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SelectPage from '../SelectPage';
import { Styles } from '../../styles/style';
import { connect } from 'react-redux';

class ThreeIcon extends React.Component{
  render(){
    const rowStyle = {
      paddingBottom : '2%',
    }
    const white = {
      backgroundColor : 'white',
      position : 'absolute',
      width : '140%',
      height : '100%',
      left : '-20%'
    };
    const iconStyle = {
      width : 70,
      height : 70,
      marginTop : 25,
      marginRight : 0
    };
    const textblock = {
      marginTop : 20,
      width : '72%'
    };
    const titleStyle = {
      ...Styles.h4,
      fontWeight : 400,
      letterSpacing : 3,
    };
    const contentStyle = {
      ...Styles.h6,
      marginTop : 10,
      letterSpacing : 1,
      lineHeight : 1.5
    };
    const paddingLeftBy8 = {
      paddingLeft : 8
    }
    return(
      <div className="row " style={rowStyle}>
        <div style={white}></div>
        <div className="col-sm-1">
        <img src={this.props.icon1_src} style={iconStyle} alt=""/>
        </div>
        <div className="col-sm-3" style={paddingLeftBy8}>
          <div className="textblock" style={textblock}> 
            <h3 className="title" style={titleStyle}>{this.props.icon1_title}</h3>
            <h5 className="content" style={contentStyle}>{this.props.icon1_content}</h5>
          </div>
        </div>
        <div className="col-sm-1">      
        <img src={this.props.icon2_src} style={iconStyle} alt=""/>
        </div>
        <div className="col-sm-3" style={paddingLeftBy8}>
          <div className="textblock" style={textblock}> 
            <h3 className="title" style={titleStyle}>{this.props.icon2_title}</h3>
            <h5 className="content" style={contentStyle}>{this.props.icon2_content}</h5>
          </div>
        </div>
        <div className="col-sm-1">
        <img className="icon" src={this.props.icon3_src} style={iconStyle} alt=""/>
        </div>
        <div className="col-sm-3" style={paddingLeftBy8}>
          <div className="textblock" style={textblock}> 
            <h3 className="title" style={titleStyle}>{this.props.icon3_title}</h3>
            <h5 className="content" style={contentStyle}>{this.props.icon3_content}</h5>
          </div>
        </div>
    </div>
    );
  }
}
class Section3 extends React.Component{
  render(){
     const titleStyle = {
      ...Styles.h3,
      letterSpacing : 10,
    };
    const contentStyle = {
      ...Styles.h5,
      marginTop : 10,
      fontWeight : 400,
      letterSpacing : 2,
      lineHeight : 2
    };
    const textBlock = {
      marginTop : 50,
    }
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="textblock" style={textBlock}>
            <h3 className="title" style={titleStyle}>{this.props.title}</h3>
            <h5 className="content" style={contentStyle}>{this.props.content}</h5>
          </div>
        </div>
      </div>
    );
  }
}
class Button extends React.Component{
  render(){
    const btnStyle = {
      width: 120,
      height: 50,
      backgroundColor: Styles.color.blue,
      color: 'white',
      ...Styles.h5,
      fontWeight: 300,
      letterSpacing: 5,
      borderRadius: 5
    }
    const btnPositionStyle = {
      position: 'absolute',
      right: 0
    }
    return(
    <div className="row bgc-white" style={{height:100}}>
      <button className="more-button" style={{...btnStyle,...btnPositionStyle}}>更多選擇</button>
    </div>
    );
  }
}
class HomePage extends React.Component {
  render() {
    const introStyle = { 
      width: '100%', 
      overflowX: 'hidden' 
    };
    return (
      <div>
        <Navbar authData={this.props.authData} dispatch={this.props.dispatch}/>
        <div className="intro" style={introStyle}>
          <div className="container-fluid" style={Styles.noPadding}>
            <Jumbotron title="巴士光年" subtitle="最快速且方便的遊覽車預訂體驗"/>
          </div>
          <div className="container">
            <ThreeIcon
              icon1_src="https://i.imgur.com/epYOT2a.png"
              icon1_title="快速搜尋"
              icon1_content="輸入您的出發地，立即找到相關結果"
              icon2_src="https://i.imgur.com/CrImiud.png"
              icon2_title="資訊公開"
              icon2_content="完整資訊結合用戶評價讓您評估出最好的選擇"
              icon3_src="https://i.imgur.com/HrYLeiJ.png"
              icon3_title="線上預訂"
              icon3_content="取代繁瑣的電話預訂，線上即可完成預訂"
            />
            <Section3 title="明日的旅程，從現在開始" content="點選以下的遊覽車，看看哪些符合您旅行的規格【評價】"/>
            <SelectPage/>
            <Button />
          </div>
          <div className="container-fluid" style={Styles.noPadding}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ( state ) => {
  return{
    authData : state.get('authReducer')
  }
}

export default connect(mapStateToProps,null)(HomePage);




