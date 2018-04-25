import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Styles } from '../styles/style';

class Footer extends React.Component{
    render(){
      const blueStyle = {
        backgroundColor: Styles.color.blue
      }
      const headingStyle = {
        ...Styles.h2,
        marginTop: 40
      };
      const subheadingStyle = {
        ...Styles.h4,
        marginTop: 20,
        letterSpacing: 2
      };
      const emailStyle = {
        width: '80%',
      };
      const btnStyle = {
        width: '10%',
        height: 50,
        marginTop: 20,
        marginBottom: 60,
        backgroundColor: Styles.color.yellow,
        color: 'white',
        ...Styles.h5,
        letterSpacing: 4
      };
      const rightStyle ={
        position: 'absolute',
        top: 0,
        left: 30,
        ...Styles.noMargin,
        marginTop:320
      }
      const linkStyle = {
        zIndex: 10000,
        position: 'absolute',
        top: 0,
        right: 30,
        ...Styles.noMargin,
        marginTop:306
      }
      const iconStyle ={
        width: 30,
        height: 30,
        cursor: 'pointer',
      }
      return(
      <div className="row bgc-blue" style={blueStyle}>
        <div className="email col-md-12">
          <h2 className="section-heading" style={headingStyle}>最快速的訂車體驗</h2>
          <h4 className="section-subheading" style={subheadingStyle}>想收到最划算的旅遊資訊嗎？</h4>
          <input className="form-control" type="email" placeholder="email" style={emailStyle}/>
          <button className="btn btn-default" style={btnStyle}>送出</button>
          <p style={rightStyle}>© 巴士光年團隊 2018-2019 All Right Reserve</p>
          <a href="https://www.facebook.com/j5630300127" style={linkStyle}> <img src="https://i.imgur.com/TUIFT9I.png" style={iconStyle}/></a>
        </div>
      </div>
      );
    }
  }

  export default Footer;