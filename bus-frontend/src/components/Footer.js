
import React, { Component } from 'react';
import {connect} from 'react-redux';

class Footer extends React.Component{
    render(){
      return(
        <div class="row bgc-blue">
        <div class="email col-md-12">
          <h2 class="section-heading">最快速的訂車體驗</h2>
          <h4 class="section-subheading">傳送任何您想對我們說的話</h4>
          <input class="form-control" type="email" placeholder="關於疑問｜關於建議｜關於鼓勵"/>
          <hr/>
          <button class="btn btn-default">送出</button>
        </div>
      </div>
      );
    }
  }

  export default Footer;