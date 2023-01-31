import React from "react";
import "./App.css";
import Login from '..Login/Login';
import Header from '..Header/Header';
import Footer from '..Footer/Footer';
import Notifications from '..Notifications/Notification'; 
import ProTypes from 'pro-types';
import CourseList from '../CourseList/CourseList';

function App() {
  return (
	  <>
  <Notifications />
   <div className="App">
    <Header />
	  {isLoggedIn : <CourseList/> : <Login />}
    <Footer />
    </div>
 </>
  );
}

App.defaultProps = {
	isLoggedIn : false,
};

App.propTypes = {
 isloggedIn : Proptypes.bool
};


export default App;
