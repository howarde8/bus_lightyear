import React from 'react';
import Modal from '../components/Modal';

class LoginModal extends React.Component{
    render(){
        const children = (
            <div class="login_cover_off">
                <div class="login_cover"></div>
                <div class="login_window">
                    <div class="close_window"> 
                        <div class="text">Ｘ</div>
                    </div>
                    <div class="facebook_login button"> 
                        <div class="icon"></div>
                        <div class="text">使用facebook帳號登入</div>
                    </div>
                    <div class="google_login button"> 
                        <div class="icon"></div>
                        <div class="text">使用Google帳號登入</div>
                    </div>
                    <div class="text_or">————————— 或 —————————</div>
                    <div class="email_input button"> 
                        <input placeholder="電子郵件地址"/>
                    </div>
                        <div class="password_input button"> 
                        <input type="password" placeholder="密碼"/>
                        <div class="icon"></div>
                    </div>
                    <div class="login_forgot">忘記密碼？</div>
                    <div class="login_button button"> 
                        <div class="text">登入</div>
                    </div>
                    <hr/>
                    <h4>還沒有帳號嗎？</h4>
                    <div class="change_to_signup"> 
                        <div class="text">註冊 </div>
                    </div>
                </div>
            </div>
        )
        return(
            <Modal
                title={"登入"}
                children={children}
            />
        )
    }
}
const navbarStyle = {
    width: '100%',
    height: 50,
    border: 'none',
    position:'fixed',
    zIndex: 30000
}
const Navbar = () => {
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

        {/* <!-- 右選單 --> */}
        <ul className="nav navbar-nav navbar-right">
            <li><a href="./publish_1_company">刊登資料</a></li>
            <li><a href="./backend">後台管理</a></li>
            <li><a href="#">臉書粉專</a></li>
            <li><a href="#"><LoginModal/></a></li>
            {/* <li><a href="#">登入</a></li> */}
            <li><a href="#">註冊</a></li>
        </ul>

        </div>

    </nav>
)
}

export default Navbar;