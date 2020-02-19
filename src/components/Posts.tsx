import React from 'react';

interface Props{

}

interface State {
    isLoading: boolean
    posts?: []
}

interface PostListProps {
    children(props: any):JSX.Element
}
export default class Posts extends React.Component<PostListProps,State > {

state: State = {
    isLoading: true,
    posts: []
}

componentDidMount(){
    this.setState({
        isLoading: true,
        posts: []
    })
    fetch('http://localhost:8000/api/v1/posts')
    .then((res) => res.json())
    .then(({data}) => {
        this.setState({
            isLoading: false,
            posts: data
        })
    }).catch(error => console.log.bind(console, "Error occured"))
}

    render(){
        console.log(this.state.posts)
        return (
        this.props.children({
            isLoading: this.state.isLoading,
            posts: this.state.posts
        })
        )
    }

}