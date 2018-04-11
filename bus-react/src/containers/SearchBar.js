import React from 'react';
import {connect} from 'react-redux';


class SearchBar extends React.Component {
  render() {
    return (
      <div className="row" style={{marginTop:"3%"}}>
        <div className="col-md-8 form-group col-md-offset-2">
          <input type="text" className="form-control" placeholder="從哪裡出發呢？"/>
        </div>
        <button style={{marginLeft:"-23%",width:"5%"}} type="submit" className="btn btn-default"><i className="fas fa-search fa-lg"></i></button>
      </div>
    );
  }
}


export default connect()(SearchBar);
