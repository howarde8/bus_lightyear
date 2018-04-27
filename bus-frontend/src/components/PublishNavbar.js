import React from 'react';
import Modal from '../components/Modal';
import { Styles } from '../styles/style';

const navbarStyle = {
    width: '100%',
    height: 50,
    border: 'none',
    borderRadius: 0,
    position:'fixed',
    zIndex: 30000,
    backgroundColor: Styles.color.gray,
}
const PublishNavbar = () => {
    return(
    <nav className="navbar navbar-default" role="navigation" style={navbarStyle}>
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">選單切換</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-brand"><img src="https://i.imgur.com/1zL5YTz.png" style={{width:50,height:50,top:-15}} /></div>
        <div className="navbar-brand">
            BUS-lightyear
        </div>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
        {/* 左選單 */}
        <ul className="nav navbar-nav">
            <li><a href="./">台灣遊覽車資訊網站</a></li>
        </ul>

        </div>

    </nav>
)
}

export default PublishNavbar;