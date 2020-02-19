import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Posts from './Posts'
import PostList from './PostList'
import ViewPost from './ViewPost'
function App() {
  return (

    <div className="App">
       <h1 className="title"> 
          <Link to="/"> Posts </Link>   
      </h1>
       <Route exact path="/" render={() => (
        <div>
            <Posts>
              {
                  props => (
                    <PostList posts={props.posts} isLoading={props.isLoading}/>
                  )
              }
            </Posts>     
        </div>
    )}>
  </Route>    
  <Route exact path="/post/:id" render={(params) => ( <ViewPost params={params}/>)}></Route>
    </div>
    
  );
}

export default App;
