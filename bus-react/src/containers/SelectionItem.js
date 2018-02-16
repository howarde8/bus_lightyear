
import React, { Component } from 'react';
import '../styles/homepage.css';
import {connect} from 'react-redux';

class SelectionItem extends React.Component{
    render(){
      return(
        <div class="select_bar">
          <div class="selcet_btns">
            <div class="btn">日期</div>
            <li class="navbar-header nav navbar-navdropdown">
                      <div class="dropdown-toggle btn" data-toggle="dropdown">人數限制</div>
              <ul class="dropdown-menu">
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">日本語</a></li>
              </ul>
            </li>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">廠牌</div>
              <ul class="dropdown-menu">
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">日本語</a></li>
              </ul>
            </li>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">依「評價」由高至低排序</div>
              <ul class="dropdown-menu">
                <li><a href="#">繁體中文</a></li>
                <li><a href="#">English</a></li>
                <li><a href="#">日本語</a></li>
              </ul>
            </li>
            
          </div>
        </div>
      );
    }
  }

  export default connect()(SelectionItem);