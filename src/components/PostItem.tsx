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
   handleClick = () => {
       fetch(`http://localhost:5000/api/v1/posts/${this.props.post?._id}`, {
           method: 'DELETE'})
       .then(
           (data: any) => {
               
               this.props.onGoBack ? this.props.onGoBack() : console.log(data.message);
           }
       )
   }
    render(){
        return(
            <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
              <h5 className="card-title">{this.props.post?.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.props.post?.description}</h6>
              <p className="card-text">{this.props.post?.body}</p>
              {
                        !this.props.isViewPost && (
                            <Link to={`/post/${this.props.post?._id}`} className="btn btn-sm btn-outline-primary card-link fa fa-eye"></Link>
                        )
                    }
                    {

                        this.props.isViewPost && (
                            <div>
                                <button className="btn btn-sm btn-outline-primary card-link fa fa-arrow-left"onClick={ () => {
                                    if(this.props.onGoBack){
                                        this.props.onGoBack()
                                    }
                                }}></button>
                                <button className="btn btn-sm btn-outline-danger fa fa-trash"onClick={this.handleClick}></button>
                            </div>
                        )
                    } 
                     <Link to={`/post/${this.props.post?._id}/edit`} className="card-link btn btn-sm btn-outline-primary fa fa-pencil card-link"></Link>
            </div>
          </div>
        )
    }
}