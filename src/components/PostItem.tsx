import React from 'react';

interface Post {
    _id: string,
    title: string,
    body: string,
    description: string
}

interface Props {
    post: Post
}


export default class PostItem extends React.Component<Props, {}>{


    handleClick = (e: any) => {

    }
    render(){
        return(

                <div className="post-item">
                    <p className="post-title">{this.props.post.title}</p>
                    <p className="post-description">{this.props.post.description}</p>
                    <p className="post-body">{this.props.post.body}</p>
                    <button onClick={this.handleClick}>Click to View</button>
                </div>

        )
    }
}