import React, { Component } from 'react';
import SearchBar from '../../containers/SearchBar';
import { Styles } from '../../styles/style';

export default class Jumbotron extends React.Component{
  constructor(){
    super();
    this.state = {
      fontSize : Styles.h1.fontSize,
    }
  }
  onMouseOver = () => {
    this.setState({ fontSize: 90 });
  }
  onMouseOut = () => {
    this.setState({ fontSize: Styles.h1.fontSize });
  }
  render(){
    const title = { 
      fontSize : this.state.fontSize,
      letterSpacing : 15,
    };
    const slogan = {
      ...Styles.h4, 
      marginTop : 20,
      fontWeight : 300,
      letterSpacing : 18
    };
    const IMG = {
      width : '100%',
      height : 650,
      backgroundImage : "url('https://i.imgur.com/Qj2onou.jpg')",
      backgroundRepeat : 'no-repeat',
      backgroundPosition : 'center',
      backgroundSize : 'cover'
    };
    const coverBlock = {
      zIndex : '1',
      position : 'absolute',
      width : '100%',
      height : '100%',
      backgroundColor : '#000000',
      opacity : '0.3',
    };
    const textBlock = {
      zIndex : '2',
      marginTop : 200,
      color : 'white',
      textAlign : 'center',
    };
    return (
      <div className="row">
        <div className="col-xs-12" style={IMG}>
          <div style={coverBlock} ></div>
          <div style={textBlock}>
            <h1 onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={title}>{this.props.title}</h1>
            <h4 style={slogan}>{this.props.subtitle}</h4>
              {/* 搜尋表單 */}
              <SearchBar/>
              {/* <form className="navbar-form" role="search"> */}
              {/* </form> */}
          </div> 
        </div>     
      </div>
    );
  }
}