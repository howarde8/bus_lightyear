import React from 'react';
import Navbar from './Navbar';
import { Styles } from '../styles/style';
import Footer from './Footer';

class Article_Service extends React.Component {
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
            <div class="col-sm-7 article_area">
              <h3 style={titleStyle}>遊覽車企業服務條款</h3>
              <h5 style={subTitle2Style}>對遊覽車司機規範</h5>
              <p style={contentStyle}>
                <ul>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>車輛駕駛員態度需良好、聽指揮、不得有酗酒滋事等行為。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>需有行照駕照等書面資料。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>應具有合格及有效之駕照及遊覽車客運業駕駛人登記證。</li> 
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>駕駛員均持有監理所核發之「遊覽車客運業駕駛人職業登記證」。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>駕駛員應於行程前及行程中各休息、遊憩點出車前實施酒精檢測、由乘客確認後方可行駛。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>駕駛員需穿著整潔襯衫、長褲、適合行使遊覽車之鞋子。</li> 
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>駕駛員在行車前、行車中不得有吸食毒品及酗酒的行為。</li>
                </ul>
              </p>
              <h5 style={subTitle2Style}>對遊覽車業者之規範</h5>
              <p style={contentStyle}>
                <ul>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>需能如期供應車輛、所提供之車輛數目充足。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>車輛中途故障需立即修復。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>不得出發前一天或當天臨時向消費者解除用車約定。</li> 
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>業者應向保險公司辦理車輛第三責任險,並提出有關證明文件。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>如發生交通意外事故一切損失概由業者負責賠償或負責向所投保之公司按乘客保險辦法規定辦理之。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>業者提供車輛車況條件不符,消費者得拒絕租用。</li> 
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>業者所提供之車輛未能依約定在指定時間內到達指定地點等候時,每逾三十分鐘即扣罰新台幣??????元整。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>業者須提供車輛車齡、乘客定員、車號、行車執照，一年內之檢驗及保養記錄。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>強制汽車責任保險及其他附加賠償約定（遊覽車公會聯合互助險、第三責任險、強制乘客險），其保險有效期限應逾越租車期間。</li>
                  <li style={{...contentStyle,marginLeft:22,listStyleType:'decimal'}}>約定駕駛員於行程前及行程中應接受隨車帶隊人員實施酒精檢測，確認未超過標準，方得行駛。檢測未能通過時，依遊覽車租賃定型化契約辦理。</li>
                </ul>
              </p>
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

export default Article_Service;
