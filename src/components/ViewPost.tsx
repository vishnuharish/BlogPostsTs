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
    isLoading: boolean
    post: Post | null
}


export default class ViewPost extends React.Component<Props, State>{
    state: State = {
        isLoading: false,
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
        this.setState((prevState) => {
            return {
                isLoading: false,
                ...prevState
            }
        })
        fetch(`http://localhost:8000/api/v1/posts/${this.props.params.match.params.id}`)
        .then((res) => res.json())
        .then(({data}) => {
            this.setState({
                post: data
            })
        })

    }

    goBack = () => {
       const {history} = this.props.params;
       history.push('/')
    }
    render(){
        console.log(this.state.post?.title)
    return (
        <div>
            {
                !this.state.isLoading && (
                    <PostItem isViewPost={true} onGoBack={this.goBack} post={this.state.post}/>
                )
            }
            {
                this.state.isLoading && (
                    <div className="loader"></div>
                )
            }


        </div>
        )
    }
}