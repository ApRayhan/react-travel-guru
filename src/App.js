import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import BookingDetails from './components/BookingDetails/BookingDetails';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Login from './components/LoginPage/Login';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ConfirmBooking from './components/ConfirmBooking/ConfirmBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/bookingdetails/:productId">
            <BookingDetails />
          </Route>
          <PrivateRoute path="/confirm-booking">
            <ConfirmBooking />
          </PrivateRoute>
          <Route path="*">
              <NoMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
