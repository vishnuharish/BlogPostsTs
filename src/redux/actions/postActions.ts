import { Post } from '../types/PostModel';
import { PostTypes, AppActions } from '../types/postTypes';
import { Dispatch } from 'redux';
import { AppState } from '../store/store';

const BASE_URL: string = 'http://localhost:5000/api/v1/posts';

export const addPost = (post: Post): AppActions => ({
    type: PostTypes.ADD_POST,
    payload: post
})

export const removePost = (id: string): AppActions => ({
    type: PostTypes.REMOVE_POST,
    payload: id
})

export const editPost = (post: Post): AppActions => ({
    type: PostTypes.EDIT_POST,
    payload: post
})

export const serPosts = (posts: Post[]): AppActions => ({
    type: PostTypes.SET_POSTS,
    payload: posts
})


export const startAddPost = (postData: { title: string, description: string, body: string }) => { 
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        fetch(`${BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res.message)
            dispatch(addPost({...res.data}))
        })
    }
 }


 export const startEditPost = (post: Post) => {
     return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        fetch(`${BASE_URL}/${post._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then( res => res.json())
        .then( (res) => {
            console.log(res.message);
            dispatch( editPost(res.data))
        })
     }
 }


 export const startRemovePost = (id: string) => {
     return(dispatch: Dispatch<AppActions>, getState: () => AppState) => {
         fetch(`${BASE_URL}/${id}`, {
             method: 'DELETE',
             headers: {
                 'Content-Type':'application/json'
             }
         })
         .then((res) => res.json())
         .then((res) => {
             console.log(res.message);
             dispatch(removePost(id))
         })
     }
 }