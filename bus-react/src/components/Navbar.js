import React from 'react';


const Navbar = () => {
    return(
    
    <nav class="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
        <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">選單切換</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand"><img src="../assets/images/BUS_logo.png"/></div>
        <div class="navbar-brand">
            BUS-lightyear
        </div>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
        {/* 左選單 */}
        <ul class="nav navbar-nav">

            <li><a href="./index.html">台灣遊覽車資訊網站</a></li>
        </ul>

        {/* <!-- 右選單 --> */}
        <ul class="nav navbar-nav navbar-right">
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