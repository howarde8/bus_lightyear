import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:bus-frontend/src/components/Modal.js
import { Styles } from '../styles/style';
=======
import {changeForm, loginRequest, registerRequest} from '../actions/auth'
>>>>>>> f1b387860b14fe696059220ba428e706d1080e4d:bus-frontend/src/components/LoginModal.js

const overlayStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
}
const contentStyle = {
  position:'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 10000,
  overflow: 'auto',
  textAlign: 'center',
  padding: 4,
  cursor: 'pointer',
}
const dialogStyle = {
  position: 'relative',
  outline: 0,
  width: 'auto',
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  maxWidth: 'auto',
  maxHeight: '100%',
  marginTop : '10%',
  cursor: 'default',
  borderRadius: 4,
  backgroundColor:'white',
}

const modelStyle = {
  visibility : 'hidden',
}
export default class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      hidden : 'hidden',
    };
  }
  listenKeyboard = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }
  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard, true);
    }
  }
  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard, true);
    }
  }
  onOverlayClick = () => {
    this.onClickDismiss();
  }
  
  onDialogClick = (event) => {
    event.stopPropagation();
  }
  buttonClick = () => {
    this.setState({ hidden: 'visible'});
  }
  onLoginClick = () => {
    this.setState({ hidden: 'hidden'});
    const { username, password } = this.props.formState;
    this.props.dispatch(loginRequest({username, password}));
  }
  onRegisterClick = () => {
    const { username, password } = this.props.formState;
    this.props.dispatch(registerRequest({username, password}))
  }
  onClickDismiss = () => {
    this.setState({ hidden: 'hidden'});
    if(typeof this.props.onClose === 'function'){
      this.props.onClose();
    }
  }

  // typing session
  _changeUsername = (event) => {
    this._emitChange({...this.props.formState, username: event.target.value})
  }

  _changePassword = (event) => {
    this._emitChange({...this.props.formState, password: event.target.value})
  }

  _emitChange = (newFormState) => {
    this.props.dispatch(changeForm(newFormState))
  }

  render() {
    const windowStyle = {
      top: '-10%',
    }
    const Xstyle = {
      display: 'inline-block',
      float: 'right',
      marginTop: 8,
      transform: 'translateX(-100%)',
      ...Styles.h5,
      fontWwight: 400,
      cursor: 'pointer',
      userSelect: 'none',
    }
    const btnStyle = {
      width: '90%',
      height: 60,
      marginTop: 8,
      borderRadius: 5
    }
    const fbStyle = {
      backgroundColor: '#3B5998',
      color: 'white'
    }
    const iconStyle = {
      display: 'inline-block',
      width: 40,
      height: 40,
      float: 'left',
      marginLeft: 10,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
    const fbIconStyle = {
      backgroundImage: 'url(https://i.imgur.com/32njHZy.png)'
    }
    const googleIconStyle = {
      backgroundImage: 'url(https://i.imgur.com/B2G8HAn.png)'
    }
    const btnTextStyle = {
      display: 'inline-block',
      marginTop: 10,
      ...Styles.h6
    }
    const orStyle = {
      color: 'rgba(0,0,0,0.6)',
      marginTop: 10,
      marginBottom: 4
    }
    const inputStyle = {
      border: '0.5px solid rgba(0, 0, 0, 0.3)',
      paddingLeft: 10
    }
    const forgotStyle = {
      float: 'right',
      right: 20,
      marginTop: 10, 
      ...Styles.p,
      color: 'rgba(0,0,0,0.6)'
    }
    const loginStyle = {
      backgroundColor: Styles.color.blue,
      ...Styles.h5,
      color: 'white'
    }
    const switchStyle = {
      float: 'right',
      right: 20,
      marginBottom: 20,
      padding: 8,
      paddingLeft: 20,
      paddingRight: 20,
      ...Styles.h6,
      border: '3px solid #1092BA',
      color: Styles.color.blue,
      borderRadius: 5
    }
    return (
      <div>
        <div onClick={this.buttonClick} style={this.props.titleStyle}>{this.props.title}</div>
        <div style={{...modelStyle, visibility:this.state.hidden}}>
          <div className="modal-overlay-div" style={overlayStyle} />
          <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick}>
<<<<<<< HEAD:bus-frontend/src/components/Modal.js
            <div className="modal-dialog-div" style={{...dialogStyle,...windowStyle}} onClick={this.onDialogClick}>
            <div class="login_cover_off" >
              <div class="login_cover"></div>
              <div class="login_window">
                <div class="row">
                  <div class="close_window"> 
                    <div onClick={this.onClickDismiss} class="text" style={Xstyle}>Ｘ</div>
                  </div>
                </div>
                <button class="facebook_login button" style={{...btnStyle,...fbStyle}}> 
                  <div class="icon" style={{...iconStyle,...fbIconStyle}}></div>
                  <div class="text" style={btnTextStyle}>使用facebook帳號登入</div>
                </button>
                <button class="google_login button" style={btnStyle}> 
                  <div class="icon" style={{...iconStyle,...googleIconStyle}}></div>
                  <div class="text" style={btnTextStyle}>使用Google帳號登入</div>
                </button>
                <div class="text_or" style={orStyle}>———————————— 或 ————————————</div>
                <div class="email_input button"> 
                  <input placeholder="電子郵件地址" style={{...btnStyle,...inputStyle}}/>
                </div>
                <input type="password" placeholder="密碼" style={{...btnStyle,...inputStyle}} />
                <div class="login_forgot" style={forgotStyle}>忘記密碼？</div>
                <div class="login_button button"> 
                  <button onClick={this.onLoginClick} class="text" style={{...btnStyle,...loginStyle}} >登入</button>
=======
            <div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
            <div className="login_cover_off">
              <div className="login_cover"></div>
              <div className="login_window">
                <div className="close_window"> 
                  <div onClick={this.onClickDismiss} className="text">Ｘ</div>
                </div>
                <div className="facebook_login button"> 
                  <div className="icon"></div>
                  <div className="text">使用facebook帳號登入</div>
                </div>
                <div className="google_login button"> 
                  <div className="icon"></div>
                  <div className="text">使用Google帳號登入</div>
                </div>
                <div className="text_or">————————— 或 —————————</div>
                <div className="email_input button"> 
                  <input placeholder="電子郵件地址" value={this.props.formState.username} onChange={this._changeUsername} />
                </div>
                <div className="password_input button"> 
                  <input type="password" placeholder="密碼" value={this.props.formState.password} onChange={this._changePassword} />
                  <div className="icon"></div>
                </div>
                <div className="login_forgot">忘記密碼？</div>
                <div className="login_button button"> 
                  <div onClick={this.onLoginClick} className="text">登入</div>
                </div>
                <hr/>
                <h4>還沒有帳號嗎？</h4>
                <div className="change_to_signup"> 
                  <div className="text" onClick={this.onRegisterClick}>註冊 </div>
>>>>>>> f1b387860b14fe696059220ba428e706d1080e4d:bus-frontend/src/components/LoginModal.js
                </div>
                <div class="text_or" style={orStyle}>—————————————————————————</div>
                <button class="text" style={switchStyle}>註冊</button>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}