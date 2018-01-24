import React from 'react';
import $ from 'jquery';

export class ItemList extends React.Component {

  handleLoad = () => {
    $.ajax({
      url: 'localhost:5000/api/bus/random/3',
      method: 'GET'
    }).then((response) => {
      console.log(response);
    }, (response) => {
      console.log(response);
    }).catch((error) => {
      console.log("catch error " + error);
    });
  }

  render() {
    this.handleLoad();
    return (
      <div>
      <p>ItemList</p>
      </div>
    );
  }
}