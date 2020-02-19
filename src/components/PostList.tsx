import React from 'react';
import PostItem from './PostItem';
import './PostList.css';
interface Props {
    isLoading: boolean,
    posts: [],
}


export default class PostList extends React.Component<Props>{
  render(){

      return (
      <div className="post-list">{

      !this.props.isLoading && (
                this.props.posts.map((post: any) => <PostItem isViewPost={false} key={post._id} post={post}/>)
        )
      }{
          this.props.isLoading && (
              <div style={{alignContent: 'center'}}>
                <div className="loader"></div>
              </div>  
          )
      }
      </div>
      )
  }


}