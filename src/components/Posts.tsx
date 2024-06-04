import React, {useEffect} from 'react';
import {Flex, Typography} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Posts = () => {
    const { fetchPosts } = useActions();
    const {posts, page, limit, error, loading} = useTypedSelector(state => state.posts);
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchPosts(page, limit);
    }, []);

    if (loading) {
        console.log('loading', posts, page,limit, error, loading)
        return <Typography.Title level={3}>Loading...</Typography.Title>
    }
    if (error) {
        console.log('error', posts, page,limit, error, loading)
        return <Typography.Title level={3}>{error}</Typography.Title>
    }

    return (
        <div>
            <Typography.Title level={2}>Posts</Typography.Title>
            <Flex vertical={true} className={'posts'} justify={'center'} align={'start'}>
                {posts?.map(post => (
                    <Typography.Text key={post.id}>{post.id} - {post.title}</Typography.Text>
                ))}
            </Flex>

        </div>
    );
};

export default Posts;