import {IPostsState, PostAction} from "../types/post";

const initialPosts: IPostsState = {
    posts: [],
    error: null,
    loading: false,
    page: 1,
    limit: 10,
}

export const postsReducer = (state: IPostsState = initialPosts, action: PostAction): IPostsState => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return {...state, loading: true};
        case 'FETCH_POSTS_SUCCESS':
            return {...state, loading: false, posts: action.payload};
        case 'FETCH_POSTS_ERROR':
            return {...state, loading: false, error: action.payload};
        case 'SET_POSTS_PAGE':
            return {...state, page: action.payload};
        default:
            return state;
    }
}