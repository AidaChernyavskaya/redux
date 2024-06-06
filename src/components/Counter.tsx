import React from 'react';
import {Button, Flex, Typography} from 'antd';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CounterActionTypes} from "../types/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useTypedSelector(state => state.counter.counter);

    const addNumber = () => {
        dispatch({type: CounterActionTypes.INCREMENT});
    }

    const reduceNumber = () => {
        dispatch({type: CounterActionTypes.DECREMENT});
    }

    return (
        <div style={{marginBottom: '50px'}}>
            <Typography.Title level={2}>Counter</Typography.Title>
            <Flex justify={"center"} align={"center"} gap={"middle"}>
                <Button onClick={addNumber}>Increment</Button>
                <Typography.Text>{count}</Typography.Text>
                <Button onClick={reduceNumber}>Decrement</Button>
            </Flex>
        </div>
    );
};

export default Counter;
