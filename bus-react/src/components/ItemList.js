import React from 'react';
import $ from 'jquery';

export class ItemList extends React.Component {

  handleLoad = () => {
    $.ajax({
      url: '/api/bus/random/3',
      method: 'GET'
    }).then((response) => {
      console.log(response);
    }, (response) => {
      console.log("Error: " + response);
    }).catch((error) => {
      console.log("catch error " + error);
    });
  }

  render() {
    this.handleLoad();
    return (
      <div>
      {/*<a href="/api/bus/random/3">ItemList</a>*/}
      </div>
    );
  }
}