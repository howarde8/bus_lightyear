import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class Order extends React.Component{
  constructor(){
    super();
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      address: null,
    }
  }
  onClick = () =>{
    this.props.dispatch(push('/booking'));
  }
  changeAddress = (event) => {
    this.setState({
      address: event.target.value,
    })
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
      </div>
      <form style={{ position:'absolute', left:'30px', top:'60px', zIndex:1010}}>
        <h6 className="click-area text">租用日期</h6>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={1}
          />
        <h6 className="click-area text">上車地點</h6>
        <input 
          className='DateInput_input DateRangePickerInput__withBorder DateInput_input_1' 
          style={{ width:'280px', height:'50px'}} 
          type="text" 
          value={this.state.address} 
          onChange={this.changeAddress}/>
        <div>
          <div onClick={this.onClick} className="btn order-btn col-xs-8 col-xs-offset-2">開始預定</div>
          <div className="reminder col-xs-8 col-xs-offset-2">
            <h6 className="text-muted">您暫時不會被收費</h6>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default connect()(Order);