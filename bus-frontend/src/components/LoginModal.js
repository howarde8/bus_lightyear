import React from 'react';
import ReactDOM from 'react-dom';
import { Styles } from '../styles/style';
import {changeForm, loginRequest, registerRequest, clearError} from '../actions/auth'

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
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hidden : 'hidden',
      sourceState : props.authState
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
    this.props.dispatch(clearError())
    this.setState({ hidden: 'visible'});
  }
  onLoginClick = () => {
    this.setState({ hidden: 'hidden'});
    const { email, password } = this.props.formState;
    this.props.dispatch(loginRequest({email, password}));
  }
  onSwitchRegisterClick = () => {
    if(this.props.onSwitchRegisterClick){
      this.props.onSwitchRegisterClick();
    }
    // const { email, password } = this.props.formState;
    // this.props.dispatch(registerRequest({email, password}))
  }
  onClickDismiss = () => {
    this.setState({ hidden: 'hidden'});
    if(typeof this.props.onClose === 'function'){
      this.props.onClose();
    }
  }

  // typing session
  _changeEmail = (event) => {
    this._emitChange({...this.props.formState, email: event.target.value})
  }

  _changePassword = (event) => {
    this._emitChange({...this.props.formState, password: event.target.value})
  }

  _emitChange = (newFormState) => {
    console.log(newFormState);
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
      paddingLeft: 20,
      paddingRight: 20,
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
    const textStyle = {
      display: 'inline-block',
      left: -90
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
            <div className="modal-dialog-div" style={{...dialogStyle,...windowStyle}} onClick={this.onDialogClick}>
            <div class="login_cover_off" >
              <div class="login_cover"></div>
              <div class="login_window">
                <div class="row">
                  <div class="close_window"> 
                    <div onClick={this.onClickDismiss} class="text" style={Xstyle}>Ｘ</div>
                  </div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <button class="facebook_login button" style={{...btnStyle,...fbStyle}}> 
                    <div class="icon" style={{...iconStyle,...fbIconStyle}}></div>
                    <div class="text" style={btnTextStyle}>使用facebook帳號登入</div>
                  </button>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <button class="google_login button" style={btnStyle}> 
                    <div class="icon" style={{...iconStyle,...googleIconStyle}}></div>
                    <div class="text" style={btnTextStyle}>使用Google帳號登入</div>
                  </button>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="text_or" style={orStyle}>——————————— 或 ———————————</div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="email_input button"> 
                    <input placeholder="電子郵件地址" style={{...btnStyle,...inputStyle}} onChange={this._changeEmail}/>
                  </div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <input type="password" placeholder="密碼" style={{...btnStyle,...inputStyle}} onChange={this._changePassword}/>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="login_forgot" style={forgotStyle}><a href="#">忘記密碼？</a></div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="login_button button"> 
                    <button onClick={this.onLoginClick} class="text" style={{...btnStyle,...loginStyle}} >登入</button>
                  </div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="text_or" style={orStyle}>—————————————————————————</div>
                </div>
                <div class="row" style={{...Styles.noMargin}}>
                  <div class="text-muted" style={textStyle}>還沒有帳號嗎？</div>
                  <button class="text" onClick={this.onSwitchRegisterClick} style={switchStyle}>註冊</button>
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