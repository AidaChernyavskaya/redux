import React from 'react';
import {Typography} from "antd";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useTypedSelector(state => state.posts.posts);

    const fetchPosts = () => {
        dispatch({type: 'FETCH_POSTS'})
    }

    return (
        <div>
            <Typography.Title level={2}>Posts</Typography.Title>
            {posts?.map((post) => (
                <Typography.Text>{post.title}</Typography.Text>
            ))}
        </div>
    );
};

export default Posts;