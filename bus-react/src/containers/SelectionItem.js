import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/item';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class SelectionItem extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        startDate:null,
        endDate:null,
        focusedInput:null,
      }
    }
    numberFilter(low,up){
      this.props.dispatch(setVisibilityFilter({filterType:"FILT_NUMBER",lowBound:low,upBound:up}));
    }
    brandFilter(brand){
      this.props.dispatch(setVisibilityFilter({filterType:"FILT_BRAND",brand:brand}));
    }
    showAll(){
      this.props.dispatch(setVisibilityFilter({filterType:"SHOW_ALL"}));
    }
    render(){
      return(
        <div class="select_bar">
          <div class="selcet_btns">
            <div style={{zIndex:9999}}> 
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            </div>
            <div class="btn" onClick={()=>this.showAll()}>顯示全部</div>
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
                <li><a onClick={()=>this.brandFilter("歐美")}>歐美</a></li>
                <li><a onClick={()=>this.brandFilter("日本製")}>日製</a></li>
                <li><a onClick={()=>this.brandFilter("國產")}>國產</a></li>
              </ul>
            </li>
            <li class="navbar-header nav navbar-navdropdown">
              <div class="dropdown-toggle btn" data-toggle="dropdown">依「評價」由高至低排序</div>
              <ul class="dropdown-menu">
                <li><a>依「價格」由高至低</a></li>
                <li><a>依「價格」由低至高</a></li>
              </ul>
            </li>
            
          </div>
        </div>
      );
    }
  }

export default connect()(SelectionItem);