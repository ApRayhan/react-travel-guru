import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginPageNavbar from '../LoginPage/LoginPageNavbar/LoginPageNavbar';
import './RegisterForm.css';
import FbIcon from '../../Icon/fb.png';
import GoogleIcon from '../../Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';

const RegisterForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [user, setUser] = useState({
    name: '',
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
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
  // .....................

  // handleBlur function
  const [errorMsg, setErrorMsg] = useState({
    nameError: '',
    emailError: '',
    passwordError: ''
  });

  const handleBlurFn = (e) => {
    let isFormValid;
    if(e.target.name === 'name'){
      isFormValid = e.target.value.length > 2;
      if(!isFormValid){
        let newError = {...errorMsg};
        newError.nameError = 'Name is too short - minimum length is 3 characters';
        setErrorMsg(newError);
      } else {
        let newError = {...errorMsg};
        newError.nameError = '';
        setErrorMsg(newError);
      }
    }
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

    if(e.target.name === 'confirmPassword'){
      const password = document.getElementById('password').value;
      const confirmPassword = e.target.value;
      if(confirmPassword !== password){
        console.log('PassWord Not Match');
      }
    }

    if (isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  // Handle Form Submit
const handleRegisterFn = (e) => {
  if(user.name && user.email && user.password) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password, )
    .then(result => {
      const newUser = {...user};
      setLoggedInUser(newUser);
      updateName(user.name);
      history.replace(from);
    })
    .catch(error =>  {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }
  e.preventDefault();
}

// Update User Name
const updateName = name => {
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
}

  return (
    <div>
      <LoginPageNavbar />
      <Container className="registerForm">
        <h4>Create An Account</h4><br />
          <form onSubmit={handleRegisterFn}>
              <Form.Group>
              <Form.Control onBlur={handleBlurFn} type="text" name="name" placeholder="Full Name" required/>
              <p style={{ color: 'red', marginLeft: '6px' }}>{ errorMsg.nameError }</p>
              </Form.Group>
              <Form.Group>
                <Form.Control onBlur={handleBlurFn} type="text" name="email" placeholder="Username Or Email" required/>
                <p style={{ color: 'red', marginLeft: '6px' }}>{ errorMsg.emailError }</p>
              </Form.Group>
              <Form.Group>
                <Form.Control id="password" onBlur={handleBlurFn} type="password" name="password" placeholder="Password" required/>
                <p style={{ color: 'red', marginLeft: '6px' }}>{ errorMsg.passwordError }</p>
              </Form.Group>
              <Form.Group>
                <Form.Control onBlur={handleBlurFn} type="password" name="confirmPassword" placeholder="Confirm Password" required/>
              </Form.Group>
              <input variant="" type="submit" className="booking_btn" value="Create An Account">
            </input>
          </form>
        <p className="haveAccount">Already have an account ? <Link to="/login">Login</Link></p>
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

export default RegisterForm;