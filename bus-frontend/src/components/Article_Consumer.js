import React from 'react';
import Navbar from './Navbar';
import { Styles } from '../styles/style';
import Footer from './Footer';

class Article_Consumer extends React.Component {
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
              <h3 style={titleStyle}>巴士光年消費者使用條約</h3>
              <h4 style={subTitle1Style}>聲明</h4>
              <p style={contentStyle}>我們希望 巴士光年 能帶給所有人安全舒適的服務。以下基本規範旨在確保使用巴士光年服務的乘客能享有六星等級的行程體驗。請撥出一些寶貴的時間，閱讀規範內容，貴賓的行為會對行程體驗有重要的影響。</p>
              <h5 style={subTitle2Style}>安全第一</h5>
              <p style={contentStyle}>所有人都希望能安全抵達目的地，因此請務必遵守台灣法規，無論坐在前排座位或後排座位，上車時請一律繫上安全帶。談到 巴士光年 遊覽車乘車安全時，駕駛對此應負上一定的責任。因此，合作駕駛應遵守速限、駕車時不傳送簡訊、不使用手機，且絕對不在喝酒或服用藥物的情況下開車載客。</p>
              <h5 style={subTitle2Style}>互相尊重</h5>
              <p style={contentStyle}>在與駕駛互動時，請遵守己所不欲，勿施於人的原則，互相尊重。保持基本禮儀，不咆哮怒罵。此外，也請維護整潔，隨手將垃圾帶下車，或是清理潑灑的飲料，讓車輛能維持良好狀態，確保未來乘客也能享受美好的體驗，希望您能和身處其他任何公共場合時一樣，運用良好的判斷，表現適切的行為與他人相處。別忘了，給辛苦的司機一點鼓勵。我們希望所有 巴士光年 使用者都能感到賓至如歸。</p>
              <h5 style={subTitle2Style}>退款條件</h5>
              <p style={contentStyle}>遊覽車公司於原預訂後24小時或更短時間内取消預訂，巴士光年 網站上的車源描述與實際情況嚴重不符。</p>
              <p style={contentStyle}>處理方式：顧客在預定的瀏覽車開始服務後24小時內將問題提供照片或其它證據告知巴士光年，由巴士光年決定是否提供退款。</p>
              <p style={contentStyle}>以下情形可能導致您無法再以使用者身分使用巴士光年服務：</p>
              <p style={contentStyle}>
                <ul>
                  <li style={{...contentStyle,marginLeft:22}}><span style={boldStyle}>損壞駕駛或其他乘客的財產。</span> 例如：損壞車輛、破壞他人手機、蓄意打翻食物或飲料、抽菸。</li>
                  <li style={{...contentStyle,marginLeft:22}}><span style={boldStyle}>使用巴士光年服務時違反台灣法律。</span> 例如：攜帶裝有酒類的開放性容器或毒品上車；搭乘人數超過車上附有安全帶的座位數量；要求駕駛違反當地交通法規 (例如超速)；或是利用 巴士光年 從事不法行為，包括運毒、人口販運等。</li>
                </ul>
              </p>
              <p style={contentStyle}>如果發現以上不當行為，我們會聯絡您進行深入調查。基於對您行為的疑慮，我們可能會在調查期間暫時停用您的帳戶。若問題情節重大、違規者屢勸不聽，或是您拒絕合作，您可能會失去使用 巴士光年 的權利。在使用 巴士光年 服務期間，任何涉及暴力、與性相關的不當行為、騷擾、歧視或其他違法行為，都會導致帳戶立即停用。此外，若有執法機關介入，我們將配合有關單位進行調查。</p>
              <h5 style={subTitle2Style}>詐騙或不當使用行為</h5>
              <p style={contentStyle}>詐騙活動和不當使用 巴士光年 的行為有損 巴士光年 的信譽。任何帳戶若涉及以下行為，我們可能會將該帳戶停用，包括：濫用乘車優惠、乘客與合作駕駛相互勾結、因詐騙或非法原因導致行程費用爭議，或重複註冊帳戶。 </p>
              <h4 style={subTitle1Style}>可能導致遊覽車業者無法使用 巴士光年 之情況</h4>
              <p style={contentStyle}>身為遊覽車業者，若您的帳戶被暫時封鎖或停用，會使您賺錢的機會大為受限。因此我們有必要制定清楚明確的政策，說明在哪些情況下可能會導致您無法使用 巴士光年 服務。</p>
              <p style={contentStyle}>許多無法預料的事件都可能導致您失去合作帳戶，我們也會定期更新政策內容。但 巴士光年 採取行動的原因不外乎服務品質、安全、詐騙等問題。</p>
              <h5 style={subTitle2Style}>服務品質</h5>
              <p style={contentStyle}>使用 巴士光年 的乘客無不希望駕駛能夠安全開車，並展現謙恭有禮的態度和專業的表現。駕駛的服務品質越好，就能吸引越多乘客搭乘，帶來更多賺錢機會。反之，差勁的服務則會使乘客逐漸流失。我們提供幾種方式協助評判合作駕駛的服務品質，其中又以星級評分最為重要。</p>
              <h5 style={subTitle2Style}>星級評分</h5>
              <p style={contentStyle}>在每趟行程結束後，乘客可依據該趟行程體驗，給予遊覽車業者一至五星的評分，並提供意見回饋。此評分制度可促使遊覽車業者和駕駛為其行為負責，為駕駛與乘客建立互相尊重、安全可靠的環境。合作遊覽車企業和乘客可在的「評分」分頁查看自己目前的評分。</p>
              <h5 style={subTitle2Style}>詐騙或不當使用行為</h5>
              <p style={contentStyle}>詐騙活動和不當使用 巴士光年 網站的行為有損巴士光年的信譽。因此，我們會監控 巴士光年 系統，偵測乘客與駕駛是否有任何詐騙或試圖不當使用系統的行為。</p>
              <h5 style={subTitle2Style}>對毒品及酒類飲品的零容忍政策</h5>
              <p style={contentStyle}>巴士光年 絕不允許駕駛於開車載客時使用毒品或飲酒，同時也不允許乘客在車上使用毒品或喝酒。</p>
              <h5 style={subTitle2Style}>法規遵循</h5>
              <p style={contentStyle}>我們希望 巴士光年 的駕駛無論何時都能遵守所有法律以及道路交通規則，包括您所在區域對巴士的法規要求。</p>
              <h5 style={subTitle2Style}>禁止活動</h5>
              <p style={contentStyle}>為確保所有使用者每趟行程均公開、安全， 巴士光年 嚴禁一切於巴士光年系統外進行的活動，例如匿名接送。</p>
              <h5 style={subTitle2Style}>正確的個人資訊</h5>
              <p style={contentStyle}>巴士光年 的設計旨在行程開始前提供乘客必要資訊，供其辨識駕駛及車輛，例如：合作駕駛姓名、基本資料照片、車款和車牌號碼。若駕駛提供的資訊有誤或過舊，可能會造成乘客的困擾，使他們的 巴士光年 體驗大打折扣。</p>
              <h4 style={subTitle1Style}>您寶貴的意見是我們進步的動力</h4>
              <p style={contentStyle}>我們歡迎乘客在行程結束後，根據該趟行程的體驗進行評分。若行程中發生任何意外，不論是交通事故或爭執事件，都請務必在 巴士光年 網頁中點選「幫助」進行回報，讓我們的客服團隊能追蹤事態發展。</p>
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

export default Article_Consumer;
