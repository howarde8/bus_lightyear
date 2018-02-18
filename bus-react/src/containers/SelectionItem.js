
import React, { Component } from 'react';
import {connect} from 'react-redux';

class SelectionItem extends React.Component{
    numberFilter(low,up){
      this.props.dispatch({type:"FILT_ITEMS",lowBound:low,upBound:up});
    }
  
  
    render(){
      return(
        <div class="select_bar">
          <div class="selcet_btns">
            <div class="btn">日期</div>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">人數限制</div>
              <ul class="dropdown-menu">
                <li><a onClick={()=>this.numberFilter(0,10)}>10人以下</a></li>
                <li><a onClick={()=>this.numberFilter(10,40)}>10~40人</a></li>
                <li><a onClick={()=>this.numberFilter(40,999)}>40人以上</a></li>
              </ul>
            </li>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">廠牌</div>
              <ul class="dropdown-menu">
                <li><a>歐美</a></li>
                <li><a>日製</a></li>
                <li><a>國產</a></li>
              </ul>
            </li>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">依「評價」由高至低排序</div>
              <ul class="dropdown-menu">
                <li><a>由高至低</a></li>
                <li><a>由低至高</a></li>
              </ul>
            </li>
            
          </div>
        </div>
      );
    }
  }

export default connect()(SelectionItem);