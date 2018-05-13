import React from 'react';
import Navbar from './Navbar';
import { Styles } from '../styles/style';
import Footer from './Footer';

class Article_Privacy extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundColor: '#FCFFFA',
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
      fontWeight: 400,
      marginTop: 32,
      marginBottom: 32
    };
    const contentStyle = {
      ...Styles.p,
      fontWeight: 400,
      marginTop: 18,
      marginBottom: 18,
      color: 'rgba(0, 0, 0, 0.8)'
    };
    const boldStyle = {
      fontWeight: 700
    };
    const textAreaStyle = {
      width: '100%',
      padding: 10,
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: 5,
      ...Styles.h5,
      fontWeight: 300,
      color: 'rgba(0, 0, 0, 0.8)'
    };
    return (
      <div id="publish_page_1" style={backgroundStyle}>
        <Navbar/>
        <div className="container" style={{...Styles.noPadding}}>
          <div className="row" style={mT100Style}>
            <div class="col-sm-3 col-sm-offset-1 article_list_area" style={{...Styles.noPadding}}>
              <button class="btn" style={btnStyle}> 回到說明中心 </button>
              <ul className="list" style={listStyle}>
                <li style={linkStyle}><a href="./article_consumer">消費者使用條約 Consumer Treaty</a></li>
                <li style={linkStyle}><a href="./article_privacy">隱私政策 Privacy Policy</a></li>
                <li style={linkStyle}><a href="./article_service">遊覽車服務條款 Terms of Service</a></li>
              </ul>
            </div>
            <div class="col-sm-7 article_area" style={{...articleStyle}}>
              <h3 style={titleStyle}>隱私政策</h3>
              <h5 style={subTitle2Style}>資料隱私權準則及個人資料之使用</h5>
              <p style={contentStyle}>巴士光年 很高興您造訪我們的網站，我們將向您提供與您使用本網站時所收集、處理及運用個人資料的相關資訊。巴士光年 將在法律授權範圍內，且完全根據本資料隱私權聲明來收集、處理與使用個人資料。</p>
              <h5 style={subTitle2Style}>個人資料是什麼呢？</h5>
              <p style={contentStyle}>我們將參考德國的範例，在德國，「個人資料」的定義規定於《德國聯邦個人資料保護法》。這部法律對個人資料的定義是，任何與已經識別，或可識別之個人情況或實質情況有關的任何資訊。此類資訊包含諸如您的姓名、地址、電話號碼或出生日期等資訊。</p>
              <h5 style={subTitle2Style}>關於資料隱私權的一般訊息</h5>
              <p style={contentStyle}>除非在下列章節另有規定，均不得於使用本網站時收集、處理或使用任何個人資料。</p>
              <h5 style={subTitle2Style}>聯絡方式</h5>
              <p style={contentStyle}>您可透過「聯絡我們」連結，將一般性問題詢問寄給我們。為處理這些資料，我們將向您收集個人詳細聯絡資料 (姓名與電子郵件地址)。我們將把這些資料和由我們傳送的回應均予保留，並完全根據您向我們傳送資料的目的使用這些資料，以改善我們的服務。</p>
              <h5 style={subTitle2Style}>連線資訊</h5>
              <p style={contentStyle}>當您存取我們的網站時，系統將按標準程序傳送特定資料，比如 IP 位址、網路瀏覽器的類型與版本、所用作業系統、您的網站位置，以及您造訪網站的時間。概括來說，我們將僅在統計上分析這些資料，以便預防錯誤並改善我們的服務。只有在發生可能的濫用訂車的情況下，我們才會利用連線資訊來識別當事人的身分。</p>
              <h5 style={subTitle2Style}>電子郵件廣告</h5>
              <p style={contentStyle}>如果您已同意接收我們的電子報，系統將會儲存您的電子郵件地址，並用於提供特定遊覽車之宣傳用途，直到您取消訂閱為止。我們使用雙重訂閱的方式註冊。換句話說，在您註冊服務完畢並已向我們告知您的電子郵件地址，您將收到一封由我們所寄出的電子郵件，內含用來確認註冊的連結。系統會將您的註冊與確認記錄下來。除非完成註冊，否則系統將不會寄發電子報。這個程序是用來確保僅有您自己本身可以利用特定的電子郵件地址來註冊電子報。</p>
              <h5 style={subTitle2Style}>資料傳送</h5>
              <p style={contentStyle}>巴士光年 作為搜尋引擎，僅就相關訂車之遊覽車業者進行仲介。因此，每一個您締結合約的案件中，您是與遊覽車企業締約，而非 巴士光年。</p>
              <p style={contentStyle}>在下列情形，您的資料可能被傳送到主管機關/法院：</p>
              <p style={contentStyle}>
                <ul>
                  <li style={{...contentStyle,marginLeft:22}}>在若干情況下，向國內及國際機關/法院揭露訊息是根據法律規定而按先前行政或法院命令而進行的。在這些情況下，資料將按符合法律要求的方式傳送。</li>
                  <li style={{...contentStyle,marginLeft:22}}>在這個範圍內，是為了防止違法或潛在違法行為，或保護 巴士光年 、網站或網站使用者的權利、財產或安全，以及以合法手段保護該等權利所必須的。</li>
                  <li style={{...contentStyle,marginLeft:22}}>在關於商業交易時，比如銷售分公司或部門、併購、合併或銷售資產，或在可能性不大的破產事件時，我們可能會將您的資料轉交給主管機關、指定的破產受託人及/或潛在的交易夥伴。</li> 
                </ul>
              </p>
              <h5 style={subTitle2Style}>社群媒體</h5>
              <p style={contentStyle}>我們已在官方網站上整合各家連結，方便您連到不同的社群媒體服務 (臉書、Instagram、YouTube)。只要按一下相關符號或全名，系統將會將您重新導向至相關服務的網站。  如果您選取「分享」符號，並選取相對應的社群媒體服務，您就能在這項服務的網站上發布一項活動 (比如一項特別的搜尋結果)。 </p>
              <p style={contentStyle}>資料隱私權政策和相關服務的使用條款適用於各社群媒體服務網站，但這些網站上的資料收集、處理和使用與 巴士光年 無關。 </p>
              <h5 style={subTitle2Style}>安全性</h5>
              <p style={contentStyle}>巴士光年 採用技術性與組織化的安全措施來保護所儲存的個人資料，以避免有意或無意的人為操縱、損失或毀損，並防止未經授權人員存取。我們的安全措施將隨著科技進步而持續改良。 </p>
              <h5 style={subTitle2Style}>您寶貴的意見是我們進步的動力</h5>
              <textarea rows="4" placeholder="關於條款，若是有任何建議或是疑慮，歡迎留言向我們反應" style={textAreaStyle}></textarea>
              <a class="btn btn_finish"  style={{...btnStyle,marginTop:20,marginBottom:40}}>送出</a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Article_Privacy;
