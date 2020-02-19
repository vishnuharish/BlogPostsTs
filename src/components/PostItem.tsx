import React from 'react';
import {Link} from 'react-router-dom'
interface Post {
    _id?: string,
    body?: string,
    title?: string,
    description?: string,
    createdAt?: string,
    updatedAt?: string
}

interface Props {
    post: Post | null,
    isViewPost: boolean,
    onGoBack?: () => void
}


export default class PostItem extends React.Component<Props, {}>{
  
    render(){
        return(

                <div className="post-item">
                    <p className="post-title">{this.props.post?.title}</p>
                    <p className="post-description">{this.props.post?.description}</p>
                    <p className="post-body">{this.props.post?.body}</p>
                    {
                        !this.props.isViewPost && (
                            <Link to={`/post/${this.props.post?._id}`}>{'Click to View'}</Link>
                        )
                    }
                    {

                        this.props.isViewPost && (
                            <button onClick={ () => {
                                if(this.props.onGoBack){
                                    this.props.onGoBack()
                                }
                            }}>Go Back</button>
                        )
                    }
                </div>

        )
    }
}