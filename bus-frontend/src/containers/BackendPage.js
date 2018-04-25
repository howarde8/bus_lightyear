import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductPage from './ProductPage';

// ... global stylish
const h1 = { fontSize : 80 };
const h2 = { fontSize : 60 };
const h3 = { fontSize : 45 };
const h4 = { fontSize : 30 };
const h5 = { fontSize : 20 };
const h6 = { fontSize : 15 };
const p  = { fontSize : 15, letterSpacing : 1 };
const borderStyle = {border:'0.5px solid green' };
const noPadding = {
  paddingTop : 0,
  paddingBottom : 0,
  paddingLeft : 0,
  paddingRight : 0,
};
const noMargin = {
  marginTop : 0,
  marginBottom : 0,
  marginLeft : 0,
  marginRight : 0,
};
class Button extends React.Component{
  render(){
    const buttonStyle = { 
      width : 130,
      height : 50,
      textAlign : 'center',
      paddingTop : 6,
      fontWeight : 300,
      ...h5,
      letterSpacing : 2,
      borderRadius : 5,
      marginLeft: 10
    };
    return(
        <button className="button" style={buttonStyle} >{this.props.title}</button>
    );
  }
}
class BackendPage extends React.Component {
  render() {
    const introStyle = { width: '100%', overflowX: 'hidden' };
    const areaStyle = { 
      marginTop: 100,
      ...noPadding,
    };
    const title = { 
      ...h2,
      ...noMargin,
      display: 'inline-block',
    };
    const buttonAreaStyle = { 
      display: 'inline-block',
      ...noPadding,
      position: 'absolute',
      right: 0,
      bottom: 0,
     };

    return (
      <div>
        <Navbar/>
        <div className="intro" style={introStyle}>
          <div className="container">
            <div class="area col-xs-12" style={areaStyle}>
              <h2 style={title}> 控制面板</h2>
              <div class="btn_area" style={buttonAreaStyle}>
                <Button title="查看訂單"/>
                <Button title="建立新車源" style={{ color: '#FFFFFF'}}/>
              </div>
            </div>
            <ProductPage/>
          </div>
        </div>
      </div>
    );
  }
}
export default BackendPage;




