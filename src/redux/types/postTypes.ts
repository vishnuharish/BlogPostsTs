import {Post} from './PostModel';

export enum PostTypes {
    ADD_POST = "[Add Post] Adding Post",
    EDIT_POST = "[Edit Post] Editing Post",
    REMOVE_POST = "[Remove Post] Removing Post",
    SET_POSTS = "[Set Posts] Getting all the available posts"
}


export interface setPostsAction {
    type: typeof PostTypes.SET_POSTS,
    payload: Post[]
}

export interface addPostAction {
    type: typeof PostTypes.ADD_POST,
    payload: Post
}

export interface editPostAction {
    type: typeof PostTypes.EDIT_POST,
    payload: Post
}

export interface removePostAction  {
    type: typeof PostTypes.REMOVE_POST,
    payload: string
};


export type PostActionTypes = setPostsAction |
addPostAction |
editPostAction |
removePostAction;

export type AppActions = PostActionTypes;