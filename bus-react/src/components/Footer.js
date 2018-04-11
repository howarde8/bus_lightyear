
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component{
    render(){
      return(
        <div className="row bgc-blue">
        <div className="email col-md-12">
          <h2 className="section-heading">最快速的訂車體驗</h2>
          <h4 className="section-subheading">傳送任何您想對我們說的話</h4>
          <input className="form-control" type="email" placeholder="關於疑問｜關於建議｜關於鼓勵"/>
          <hr/>
          <button className="btn btn-default">送出</button>
        </div>
      </div>
      );
    }
  }

  export default Footer;
