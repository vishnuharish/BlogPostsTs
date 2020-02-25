import { Post } from '../types/PostModel';
import { PostActionTypes, PostTypes } from '../types/postTypes';


export const initialState: Post[] = [];


const postReducer = (state = initialState, action: PostActionTypes) => {
    switch (action.type) {
        case PostTypes.ADD_POST:
            return [...state, action.payload] 
        case PostTypes.EDIT_POST: 
            return state.map( post => {
                if (post._id === action.payload._id) {
                    return {
                        ...post,
                        ...action.payload
                    };
                } else {
                    return post
                }
            });
        case PostTypes.REMOVE_POST :
            return state.filter(({_id}) => _id !== action.payload)
        case PostTypes.SET_POSTS:
            return action.payload        
        default:
            return state
    }
};

export {postReducer};