import React from 'react';
import '../styles/Commentpage.css';

class CommentPage extends React.Component {
  
  render() {
    return (
      <div id="comment_page">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1 col-xs-12 comment">
              <h2 class="title">您搭乘e-go遊覽車的旅途中感受如何？</h2>
              <h4 class="subtitle">您的車主也撰寫評價後，我們才會分享您的意見。</h4>
              <hr/>
              <div class="star_area">
                <h4>非常好</h4>
                <div class="star-btn">
                  <h1>★</h1>
                </div>
                <div class="star-btn">
                  <h1>★</h1>
                </div>
                <div class="star-btn">
                  <h1>★</h1>
                </div>
                <div class="star-btn">
                  <h1>★</h1>
                </div>
                <div class="star-btn">
                  <h1>★</h1>
                </div>
              </div>
              <h2 class="title">撰寫公開評價</h2>
              <h4 class="subtitle">請告訴未來乘客您下歡e-go遊覽車的哪些方面，以及任何他們需要知道的其他資訊。</h4>
              <hr/>
              <textarea rows="4" placeholder="撰寫公開評價"></textarea>
              <h2 class="title">評價秘訣</h2>
              <ul>
                <li>
                  <h4 class="subtitle">撰寫評價時請秉持誠實、清晰與詳盡的原則。</h4>
                </li>
                <li>
                  <h4 class="subtitle">如果可以，請您列舉具體的例子。</h4>
                </li>
                <li>
                  <h4 class="subtitle">有什麼事情讓您感動驚喜或開心嗎？</h4>
                </li>
                <li>
                  <h4 class="subtitle">只要是其他乘客在預訂前會想要瞭解的資訊，無論是正面或是負面，都請您加入評價中。</h4>
                </li>
              </ul>
              <hr/>
              <div class="btn btn_finish"> 完成》 </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentPage;
