import React from 'react';


const Navbar = () => {
    return(
    
    <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
        <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">選單切換</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div className="navbar-brand"><img src="../assets/images/BUS_logo.png"/></div>
        <div className="navbar-brand">
            BUS-lightyear
        </div>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
        {/* 左選單 */}
        <ul className="nav navbar-nav">

            <li><a href="./index.html">台灣遊覽車資訊網站</a></li>
        </ul>

        {/* <!-- 右選單 --> */}
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#">刊登資料</a></li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">臉書粉專</a></li>
            <li><a href="#">登入</a></li>
            <li><a href="#">註冊</a></li>
        </ul>

        </div>

    </nav>
)
}

export default Navbar;