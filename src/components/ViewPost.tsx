import React from 'react';
import PostItem from './PostItem';

interface Props {

    params: any

}

interface Post {
    _id?: string,
    body?: string,
    title?: string,
    description?: string,
    created_on?: string,
    updated_on?: string
}

interface State{
    post: Post | null
}


export default class ViewPost extends React.Component<Props, State>{
    state: State = {
        post: {
            _id: "",
            body: "",
            title: "",
            description: "",
            created_on: "",
            updated_on: ""
        }
    };
    componentDidMount(){
        fetch(`http://localhost:8000/api/v1/posts/${this.props.params.match.params.id}`)
        .then((res) => res.json())
        .then(({data}) => {
            this.setState({
                post: data
            })
        })

    }
    render(){
        console.log(this.state.post?.title)
    return (<PostItem isViewPost={true} post={this.state.post}/>)
    }
}