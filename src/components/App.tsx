import React from 'react';
import {Route, Link} from 'react-router-dom'
import Posts from './Posts'
import PostList from './PostList'
import ViewPost from './ViewPost'
import { CreatePost } from './CreatePost';
import EditPost from './EditPost'
function App() {
  return (

    <div className="container-fluid">
      <div className="text-center">
            <Link to="/" className="display-4"> Posts </Link>   
      </div>
       
       <Route exact path="/" render={() => (
        <div className="row">
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
  <Route exact path="/post/" render={({history}) => ( 
  
  <div className="row d-flex justify-content-center">
      <CreatePost initialValues={
    {
      title: '',
      description: '',
      body: ''
    }
   
  } 
  history = {history}
  onCancel = { () => {
    history.push('/')
  }}
  />
  </div> 
  )}
  >
  </Route>
  <Route exact path="/post/:id/edit" render={(params) => ( <div className="row"><EditPost params={params}/></div>)}></Route>
    </div>
    
  );
}

export default App;
