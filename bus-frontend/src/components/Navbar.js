import React from 'react';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import { connect } from 'react-redux';
import {logout, clearError} from '../actions/auth'

class Navbar extends React.Component{
    onClick = () => {
        // true 表示要登出
        if(this.props.authData.loggedIn){
            this.props.dispatch(logout());
        }
    }
    onSwitchLoginClick = () => {
        if (this.loginModal) {
            this.registModal.onClickDismiss();
            this.loginModal.buttonClick();
        }
    }
    onSwitchRegisterClick = () => {
        if (this.registModal) {
            this.loginModal.onClickDismiss();
            this.registModal.buttonClick();
        }
    }
    render(){
        const AuthComponent = this.props.authData.loggedIn ? "登出" : <LoginModal ref={ref=>this.loginModal=ref} title={'登入'} dispatch={this.props.dispatch} formState={this.props.authData.formState} authSate={'login'} onSwitchRegisterClick={this.onSwitchRegisterClick}/>;
        const SignupCompoent = this.props.authData.loggedIn ? "": <SignupModal ref={ref=>this.registModal=ref} title={'註冊'} dispatch={this.props.dispatch} formState={this.props.authData.formState} authSate={'login'} onSwitchLoginClick={this.onSwitchLoginClick}/>; 
        return(
        <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">選單切換</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand"><img src="https://i.imgur.com/hwI0Cjh.png" style={{width:50,height:50,top:-15}} /></div>
            {/* https://i.imgur.com/1zL5YTz.png */}
            <div className="navbar-brand">
                BUS-lightyear
            </div>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
            {/* 左選單 */}
            <ul className="nav navbar-nav">

                <li><a href="./">台灣遊覽車資訊網站</a></li>
            </ul>

            {/* <!-- 右選單 --> */}
            <ul className="nav navbar-nav navbar-right">
                <li><a href="./publish_1_company">刊登資料</a></li>
                <li><a href="./backend">後台管理</a></li>
                <li><a href="#">臉書粉專</a></li>
                <li><a href="#" onClick={this.onClick}>{AuthComponent}</a></li>
                {!this.props.authData.loggedIn && <li><a href="#">{SignupCompoent}</a></li>}
                {/* <li><a href="#">登入</a></li> */}
            </ul>

            </div>

        </nav>
    )
    }
}


export default Navbar;