import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginPageNavbar from './LoginPageNavbar/LoginPageNavbar';
import FbIcon from '../../Icon/fb.png';
import GoogleIcon from '../../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import firebaseConfig from '../RegisterForm/firebase.config';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // Initialize Firebase with a default Firebase project
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }

  // FaceBook Login 
  const handleFbLogin = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
      const user = result.user;
      const {displayName, email} = user;
      const signedUser = {name: displayName, email: email};
      setLoggedInUser(signedUser);
      history.replace(from);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  }
  // .....................

  // Google Login 
  const handleGoogleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      const {displayName, email} = result.user;
      const signedUser = {name: displayName, email: email};
      setLoggedInUser(signedUser);
      history.replace(from);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }
  // .....................

  // Login
  const [errorMsg, setErrorMsg] = useState({
    emailError: '',
    passwordError: ''
  });

  const handleBlurFn = (e) => {
    let isFormValid;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      if(!isFormValid){
        let newError = {...errorMsg};
        newError.emailError = 'Email is not valid.';
        setErrorMsg(newError);
      } else {
        let newError = {...errorMsg};
        newError.emailError = '';
        setErrorMsg(newError);
      }
    }
    if(e.target.name === 'password'){
      isFormValid = e.target.value.length > 5;
      if(!isFormValid){
        let newError = {...errorMsg};
        newError.passwordError = 'Password is too short - minimum length is 6 characters';
        setErrorMsg(newError);
      } else {
        let newError = {...errorMsg};
        newError.passwordError = '';
        setErrorMsg(newError);
      }
    }

    if (isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }


  const handleLogin = (e) => {
    if(user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        const {displayName, email} = result.user;
        const signedUser = {name: displayName, email: email};
        setLoggedInUser(signedUser);
        history.replace(from);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      })
    }
    e.preventDefault();
  }


  return (
    <div>
      <LoginPageNavbar />
      <Container className="registerForm">
        <h4>Login</h4><br />
          <form onSubmit={handleLogin}>
            <Form.Group>
            <Form.Control onBlur={handleBlurFn} name="email" type="text" placeholder="Username Or Email" required/>
            <p style={{ color: 'red', marginLeft: '6px' }}>{ errorMsg.emailError }</p>
              </Form.Group>
              <Form.Group>
                <Form.Control onBlur={handleBlurFn} type="password" placeholder="Password" name="password" required/>
                <p style={{ color: 'red', marginLeft: '6px' }}>{ errorMsg.passwordError }</p>
              </Form.Group>
              <input variant="" type="submit" className="booking_btn" value="Login"></input>
          </form>
        <p className="haveAccount">Don't Have an account ? <Link to="/register">Register now</Link></p>
      </Container>
      <div className="buttom">
        <p>Or</p>
        <div className="social_register">
          <div className="left">
            <img className="icon" src={FbIcon} alt=""/>
          </div>
          <div className="right">
            <button onClick={handleFbLogin}>Continue with Facebook</button>
          </div>
        </div><br />
        <div className="social_register">
          <div className="left">
            <img className="icon" src={GoogleIcon} alt=""/>
          </div>
          <div className="right">
            <button onClick={handleGoogleLogin}>Continue with Google</button>
          </div>
        </div><br />
      </div>
    </div>
  );
};

export default Login;