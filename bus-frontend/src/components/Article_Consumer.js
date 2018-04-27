import React from 'react';
import Navbar from './Navbar';
import { Styles } from '../styles/style';


// ... global stylish
const h1 = { fontSize : 80 };
const h2 = { fontSize : 60 };
const h3 = { fontSize : 45 };
const h4 = { fontSize : 30 };
const h5 = { fontSize : 20 };
const h6 = { fontSize : 15 };
const p  = { fontSize : 15, letterSpacing : 1 };
const noPadding = {
  paddingTop : 0,
  paddingBottom : 0,
  paddingLeft : 0,
  paddingRight : 0,
}


class Article_Consumer extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundColor: '#FCFFFA',
      height: 1000
    };
    const mT100Style = {
      marginTop: 100
    };
    const btnStyle = {
      paddingTop: 10,
      paddingLeft: 20,
      backgroundColor: Styles.color.yellow,
      color: 'black',
      ...Styles.h5,
      fontWeight: 300,
      letterSpacing: 5
    };
    const listStyle = {
      marginTop: 60
    }
    const linkStyle = {
      listStyle: 'none',
      ...Styles.h6,
      marginTop: 10
    };
    const articleStyle = {
      // border: '1px solid black'
    }
    const titleStyle = {
      ...Styles.noMargin,
      ...Styles.noPadding,
      ...Styles.h3,
      fontWeight: 500,
      letterSpacing: 1.6,
      color: 'rgba(0, 0, 0, 0.8)',
      marginBottom: 60
    };
    const subTitle1Style = {
      ...Styles.h4,
      fontWeight: 400,
      marginTop: 40,
      marginBottom: 40
    };
    const subTitle2Style = {
      ...Styles.h5,
      fontWeight: 300,
      marginTop: 32,
      marginBottom: 32
    };
    const contentStyle = {
      ...Styles.p,
      fontWeight: 400,
      marginTop: 18,
      marginBottom: 18,
      color: 'rgba(0, 0, 0, 0.8)'
    }
    const questStyle = {
      fontWeight: 400,
      ...h5,
      letterSpacing: 1.5,
      color: 'rgba(0, 0, 0, 0.6)'
    };
    const textAreaStyle = {
      width: '100%',
      padding: 10,
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      ...h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.5)'
    };
    const redStyle = {
      color: 'red'
    };

    const rightStyle = {
      position: 'absolute',
      right: 0
    };
    return (
      <div id="publish_page_1" style={backgroundStyle}>
        <Navbar/>
        <div className="container" style={{...noPadding}}>
          <div className="row" style={mT100Style}>
            <div class="col-sm-3 col-sm-offset-1 article_list_area" style={{...Styles.noPadding}}>
              <button class="btn" style={btnStyle}> 回到說明中心 </button>
              <ul className="list" style={listStyle}>
                <li style={linkStyle}><a href="./article_consumer">消費者條約 Consumer Treaty</a></li>
                <li style={linkStyle}><a href="./">隱私政策 Privacy Policy</a></li>
                <li style={linkStyle}><a href="./backend">遊覽車服務條款 Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-sm-7 article_area" style={{...articleStyle}}>
              <h3 style={titleStyle}>巴士光年消費者條約</h3>
              <h4 style={subTitle1Style}>聲明</h4>
              <p style={contentStyle}>我們希望巴士光年能帶給所有人安全舒適的服務。以下基本規範旨在確保使用巴士光年服務的乘客能享有六星等級的行程體驗。請撥出一些寶貴的時間，閱讀規範內容，貴賓的行為會對行程體驗有重要的影響。</p>
              <h5 style={subTitle2Style}>互相尊重</h5>
              <p style={contentStyle}>在與駕駛互動時，請遵守己所不欲，勿施於人的原則，互相尊重。保持基本禮儀，不咆哮怒罵。此外，也請維護整潔，隨手將垃圾帶下車，或是清理潑灑的飲料，讓車輛能維持良好狀態，確保未來乘客也能享受美好的體驗，希望您能和身處其他任何公共場合時一樣，運用良好的判斷，表現適切的行為與他人相處。別忘了，給辛苦的司機一點鼓勵。我們希望所有 巴士光年 使用者都能感到賓至如歸。</p>
              <h5 style={subTitle2Style}>安全第一</h5>
              <p style={contentStyle}>所有人都希望能安全抵達目的地，因此請務必遵守台灣法規，無論坐在前排座位或後排座位，上車時請一律繫上安全帶。談到 巴士光年 遊覽車乘車安全時，駕駛對此應負上一定的責任。因此，合作駕駛應遵守速限、駕車時不傳送簡訊、不使用手機，且絕對不在喝酒或服用藥物的情況下開車載客。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article_Consumer;
