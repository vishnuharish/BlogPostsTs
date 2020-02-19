import React from 'react';
import {Route, BrowserRouter as Router,Link} from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';
import Posts from './Posts'
import PostList from './PostList'
function App() {
  return (
    <Route exact path="/" render={() => (
      <div className="App">
        <h1> Posts </h1>
  <Posts>{
    
    props => (
      <PostList posts={props.posts} isLoading={props.isLoading}/>
    )
    
    }</Posts>     
        </div>
    )}>
    
  </Route>      
  );
}

export default App;
