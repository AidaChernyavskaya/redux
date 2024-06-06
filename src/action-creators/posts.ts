import {Dispatch} from "redux";
import axios from "axios";
import {PostActionTypes} from "../types/post";

export const fetchPosts = (page: number | void = 1, limit = 10) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(() => {
                dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
            }, 500);
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: 'Error occurs while posts loading'})
        }
    }
}

export const setPostsPage = (page: number) => {
    return {type: PostActionTypes.SET_POSTS_PAGE, payload: page}
}