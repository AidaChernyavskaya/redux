import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Flex, Form, Input, Typography} from "antd";
import {useForm} from "antd/es/form/Form";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {DeleteFilled} from "@ant-design/icons";
import {ITask} from "../reducers";

const TodoList = () => {
    const [title, setTitle] = useState('');
    const [form] = useForm();
    const dispatch = useDispatch();
    const tasks = useTypedSelector(state => state.todo.tasks);

    const addTask = () => {
        const task = {
            title: title,
            isDone: false,
            id: Date.now(),
        }
        dispatch({type: 'ADD_TASK', payload: task});
        setTitle('');
        form.resetFields();
    }

    const removeTask = (task: ITask) => {
        dispatch({type: 'REMOVE_TASK', payload: task.id})
    }

    const toggleTask = (task: ITask) => {
        dispatch({type: 'TOGGLE_TASK', payload: task.id})
    }

    return (
        <div>
            <Typography.Title level={2}>To-do list</Typography.Title>
            <Form
                className={'form'} layout={"inline"}
                onFinish={addTask} form={form}
            >
                <Form.Item
                    className={'input'}
                    name={'task'}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter task',
                        },
                    ]}
                >
                    <Input
                        placeholder={'task'} style={{width: '100%'}}
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Item>
                <Form.Item className={'button'}>
                    <Button type={"primary"} htmlType={"submit"}>Add</Button>
                </Form.Item>
            </Form>
            {
                Array.isArray(tasks) && tasks.length === 0
                    ? <Typography.Text>No tasks</Typography.Text>
                    : Array.isArray(tasks) && tasks.map((el, index) => (
                        <Flex gap={"middle"} justify={"space-between"} align={"flex-end"} key={index} className={'tasks'}>
                            <Typography.Text style={{fontSize: '16px'}}  disabled={el.isDone}>{el.title}</Typography.Text>
                            <Flex gap={'small'}>
                                <Checkbox checked={el.isDone} onChange={() => toggleTask(el)}/>
                                <Button icon={<DeleteFilled />} size={"small"} shape={'circle'} onClick={() => removeTask(el)}/>
                            </Flex>

                        </Flex>
                    ))
            }
        </div>
    );
};

export default TodoList;