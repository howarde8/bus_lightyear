import React from 'react';
import {connect} from 'react-redux';
import '../styles/homepage.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div class="row" style={{marginTop:"3%"}}> 
        <div class="col-md-8 form-group col-md-offset-2">
          <input type="text" class="form-control" placeholder="從哪裡出發呢？"/>
        </div>
        <button style={{marginLeft:"-23%",width:"5%"}} type="submit" class="btn btn-default"><i class="fas fa-search fa-lg"></i></button>
      </div>
    );
  }
}


export default connect()(SearchBar);