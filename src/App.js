import React from 'react';
// import axios from 'axios';
//router connection setup
import { Route, Routes } from 'react-router-dom';
//import components
import Header from './components/header/Header';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import Profile from './components/Profile/profile';
import Agency from './components/agency/Agency';
// import Greet from './components/greet/Greet';
import Categories from './components/categories/Categories';
import Posts from './components/posts/Posts';
import Search from './components/search/Search';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Error from './components/404/Error';
// import { BlogContext } from './contexts/BlogContext';
// import AuthBtn from './components/authbtn/AuthBtn';
//new version
//import {SearchProvider} from "./contexts/SearchContext"
import { UserContext } from './contexts/UserContext';

function App() {
  return (
    <UserContext.Provider value="Greetings Fellow Traveler">
      {/* <BlogContext.Provider> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Agency />} />

        <Route path="/search" element={<Search />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        {/* <Greet /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {<Categories />}

      <Footer />
      {/* </BlogContext.Provider> */}
    </UserContext.Provider>
  );
}

export default App;
