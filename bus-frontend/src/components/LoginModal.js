import React from 'react';
import ReactDOM from 'react-dom';
import {changeForm, loginRequest, registerRequest} from '../actions/auth'

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
  maxHeight: '70%',
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
    return (
      <div>
        <div onClick={this.buttonClick} style={this.props.titleStyle}>{this.props.title}</div>
        <div style={{...modelStyle, visibility:this.state.hidden}}>
          <div className="modal-overlay-div" style={overlayStyle} />
          <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick}>
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
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}