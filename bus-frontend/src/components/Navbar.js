import React from 'react';
import LoginModal from '../components/Modal';
import { connect } from 'react-redux';


class Navbar extends React.Component{
    componentDidUpdate(){
        console.log('update',this.props);
    }
    onClick = () => {
        if(!this.props.loggedFlag){ // false, 表示沒有登入 需要登入 
            return;
        } 
        // true 表示要登出
        this.props.dispatch({type:'FAKE_LOGOUT'});
    }
    render(){
        const AuthComponent = this.props.loggedFlag ? "登出" : <LoginModal title={'登入'} dispatch={this.props.dispatch}/>;
        return(
        <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
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

            {/* <!-- 右選單 --> */}
            <ul className="nav navbar-nav navbar-right">
                <li><a href="./publish_1_company">刊登資料</a></li>
                <li><a href="./backend">後台管理</a></li>
                <li><a href="#">臉書粉專</a></li>
                <li><a href="#" onClick={this.onClick}>{AuthComponent}</a></li>
                {/* <li><a href="#">登入</a></li> */}
            </ul>

            </div>

        </nav>
    )
    }
}
const mapStateToProps = (state) => {
    return{
        loggedFlag: state.get('authReducer').loggedFlag,
    }
}

export default connect(mapStateToProps,null)(Navbar);