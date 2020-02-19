import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Posts from './Posts'
import PostList from './PostList'
import ViewPost from './ViewPost'
import { CreatePost } from './CreatePost';
import EditPost from './EditPost'
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
  <Route exact path="/post/" render={({history}) => ( <CreatePost initialValues={
    {
      title: '',
      description: '',
      body: ''
    }
   
  } history = {history}/>)}></Route>
  <Route exact path="/post/:id/edit" render={(params) => ( <EditPost params={params}/>)}></Route>
    </div>
    
  );
}

export default App;
