import React from 'react';
import {Link} from 'react-router-dom'
interface Post {
    _id?: string,
    body?: string,
    title?: string,
    description?: string,
    created_on?: string,
    updated_on?: string
}

interface Props {
    post: Post | null,
    isViewPost: boolean
}


export default class PostItem extends React.Component<Props, {}>{


    handleClick = (e: any) => {

    }
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
                </div>

        )
    }
}