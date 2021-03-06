// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import React, { Component } from 'react';
import { filtBrand, filtNumber, showAll } from '../actions/visibilityFilter';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
      this.props.setVisibilityFilter(filtNumber(low,up));
    }
    brandFilter(brand){
      this.props.setVisibilityFilter(filtBrand(brand));
    }
    showAll(){
      this.props.setVisibilityFilter(showAll());
    }
    render(){
      const selectBtnStyle = {
        marginLeft: 0
      }
      return(
        <div className="select_bar">
          <div className="selcet_btns" style={selectBtnStyle}>
            {/* <div style={{zIndex:9999}}> 
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            </div> */}
            <div className="btn" onClick={()=>this.showAll()}>顯示全部</div>
            <li className="navbar-header nav navbar-navdropdown">
              <div className="dropdown-toggle btn" data-toggle="dropdown">人數限制</div>
              <ul className="dropdown-menu">
                <li><a onClick={()=>this.numberFilter(0,10)}>10人以下</a></li>
                <li><a onClick={()=>this.numberFilter(10,40)}>11~40人</a></li>
                <li><a onClick={()=>this.numberFilter(40,999)}>41人以上</a></li>
              </ul>
            </li>
            <li className="navbar-header nav navbar-navdropdown">
              <div className="dropdown-toggle btn" data-toggle="dropdown">廠牌</div>
              <ul className="dropdown-menu">
                <li><a onClick={()=>this.brandFilter("歐美牌")}>歐美牌</a></li>
                <li><a onClick={()=>this.brandFilter("日牌")}>日牌</a></li>
                <li><a onClick={()=>this.brandFilter("中國牌")}>中國牌</a></li>
                <li><a onClick={()=>this.brandFilter("國產")}>國產</a></li>
              </ul>
            </li>
            <li className="navbar-header nav navbar-navdropdown">
              <div className="dropdown-toggle btn" data-toggle="dropdown">依「評價」由高至低排序</div>
              <ul className="dropdown-menu">
                <li><a>依「價格」由高至低</a></li>
                <li><a>依「價格」由低至高</a></li>
              </ul>
            </li>
            
          </div>
        </div>
      );
    }
  }

export default SelectionItem;