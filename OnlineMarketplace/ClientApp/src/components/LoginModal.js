import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'
import TextInput from './TextInput';
import StartStream from './StartStream';
import CryptoJS from 'crypto-js';
import './styles.css';

import image1 from '../images/main_login.png';

export default class LoginModal extends React.Component {
    state = {
        username: '',
        password: '',
        hashedPassword: '',
        error: '',
    };

  handleBackClick = () =>{
    window.location.reload();
    }

  handleSubmit = (event) => {
      event.preventDefault();
      // Encrypt the password using AES
      let ciphertext = CryptoJS.AES.encrypt(this.state.password, '7542-TGDF-4575-TGBF').toString();
      // Hash the encrypted password using SHA256
      let hashed = CryptoJS.SHA256(ciphertext).toString(CryptoJS.enc.Base64);
      this.setState({ hashedPassword: hashed });

    fetch('/api/Authentication/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                'Authentication':'hygt-876j-iukb-5437',
                'Login':'h52t-876X'
               },
        body: JSON.stringify({ username: this.state.username, password: hashed }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect the user to the homepage
          window.location.replace('/');
        } else {
          this.setState({ error: data.error });
        }
      })
      .catch((error) => {
        this.setState({ error: 'An error occurred. Please try again later.' });
      });
  };

  render() {
    return (
      <div>
          <div className="modal-overlay">
            <div className="modal-content">
              <div className='login-title'>
                <h2>Login</h2>
                <img className='img-login-modal-mobile' src={image1} />
              </div>
              <form>
                  <input
                    placeholder='Username'
                    type="text"
                    id="username"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                  />
                <br />
                <input
                placeholder='Password'
                type="password"
                id="password"
                value={this.state.password}
                onChange={(event) => this.setState({ password: event.target.value })}
                />
              <br />
                {this.state.error && <p className='login-error-text'>{this.state.error}</p>}
                <div>
                <button className='login-back-btn' onClick={this.handleBackClick} >Back</button>
                <button className='login-btn' type="submit" onClick={this.handleSubmit}>Log In</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}