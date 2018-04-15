import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/CommentPage.css';

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


class CommentPage extends React.Component {
  render() {
    const starStyle = {
      color: '#EEC853',
      letterSpacing: 10
    };
    const starBtnStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      marginLeft: 10
    };
    return (
      <div id="comment_page">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12 comment">
              <h2 className="title">您搭乘e-go遊覽車的旅途中感受如何？</h2>
              <h4 className="subtitle">您的車主也撰寫評價後，我們才會分享您的意見。</h4>
              <hr/>
              <div className="star_area">
                <h5>非常好</h5>
                <button className="star-btn" style={starBtnStyle}>
                  <h2 style={starStyle}>★</h2>
                </button>
                <button className="star-btn" style={starBtnStyle}>
                  <h2 style={starStyle}>★</h2>
                </button>
                <button className="star-btn" style={starBtnStyle}>
                  <h2 style={starStyle}>★</h2>
                </button>
                <button className="star-btn" style={starBtnStyle}>
                  <h2 style={starStyle}>★</h2>
                </button>
                <button className="star-btn" style={starBtnStyle}>
                  <h2 style={starStyle}>★</h2>
                </button>
              </div>
              <h2 className="title">撰寫公開評價</h2>
              <h4 className="subtitle">請告訴未來乘客您下歡e-go遊覽車的哪些方面，以及任何他們需要知道的其他資訊。</h4>
              <hr/>
              <textarea rows="4" placeholder="撰寫公開評價"></textarea>
              <h2 className="title">評價秘訣</h2>
              <ul>
                <li>
                  <h4 className="subtitle">撰寫評價時請秉持誠實、清晰與詳盡的原則。</h4>
                </li>
                <li>
                  <h4 className="subtitle">如果可以，請您列舉具體的例子。</h4>
                </li>
                <li>
                  <h4 className="subtitle">有什麼事情讓您感動驚喜或開心嗎？</h4>
                </li>
                <li>
                  <h4 className="subtitle">只要是其他乘客在預訂前會想要瞭解的資訊，無論是正面或是負面，都請您加入評價中。</h4>
                </li>
              </ul>
              <hr/>
              <div className="btn btn_finish"> 完成 </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentPage;
