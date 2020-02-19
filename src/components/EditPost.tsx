import React from 'react';
import { CreatePost } from './CreatePost';

interface Props{
    params: any
}

interface State {
    
    isLoading: boolean;
    post: any
}

export default class EditPost extends React.Component<Props, State> {

    state: State = {
        isLoading: true,
        post: {}
    }

    handleCancel = () => {
        this.props.params.history.push('/')
    }
    componentDidMount(){
        this.setState({
            isLoading: true,
            post: {}
        })
    fetch(`http://localhost:5000/api/v1/posts/${this.props.params.match.params.id}`)
    .then((res) => res.json())
    .then(({data}) => {
       this.setState({
           isLoading:false,
           post: data
       })
    })
    }
render(){
    return(
        <div>
        {
            !this.state.isLoading && ( <CreatePost initialValues={this.state.post} history={this.props.params.history} onCancel={this.handleCancel}/> )
        }
        {
            this.state.isLoading && ( <div className="loader"></div>)
        }
        </div>
    )

}
}