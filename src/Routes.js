import React from 'react';
import { Route } from 'react-router-dom';
//import Navigation from './components/Navigation';
//import Footer from './components/Footer/';

// Views
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';
import Signup from './views/Signup';
import UploadBook from './views/UploadBook';
import UploadPhotoBook from './views/UploadPhotoBook';
import BooksList from './views/BooksList';
import Profile from './views/Profile';


export default [

<React.Fragment>

<Route exact path="/" component={ Login } ></Route>
<Route exact path="/home" component={ Home } ></Route>
<Route exact path="/logout" component={ Logout } ></Route>
<Route exact path="/signup" component={ Signup } ></Route>
<Route exact path="/upebook" component={ UploadBook } ></Route>
<Route exact path="/updatebook" component={ UploadPhotoBook } ></Route>
<Route exact path="/book-list" component={ BooksList } ></Route>
<Route exact path="/profile" component={ Profile } ></Route>


</React.Fragment>

];