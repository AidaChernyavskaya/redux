import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Flex, Form, Input, Typography} from "antd";
import {CheckboxChangeEvent} from "antd/es/checkbox";
import {useForm} from "antd/es/form/Form";

const TodoList = () => {
    const todos = [
        {
            title: 'prepare dinner',
            isDone: false,
        },
        {
            title: 'gym',
            isDone: true,
        }
    ];
    const [tasks, setTasks] = useState(todos);
    const [title, setTitle] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [form] = useForm();
    const onChange = (e: CheckboxChangeEvent) => {
        setIsChecked(e.target.checked);
    };

    const handleClick =() => {
        const task = {
            title: title,
            isDone: false,
        }
        setTasks([...tasks, task]);
        setTitle('');
        form.resetFields();
    }

    return (
        <div>
            <Typography.Title level={2}>To-do list</Typography.Title>
            <Form
                style={{maxWidth: '500px', margin: '0 auto 10px auto'}} layout={"inline"}
                onFinish={handleClick} form={form}
            >
                <Form.Item
                    style={{width: '78%', marginLeft: '20px'}}
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
                <Form.Item >
                    <Button type={"primary"} htmlType={"submit"}>Add</Button>
                </Form.Item>
            </Form>
            {tasks.map((el, index) => (
                <Flex gap={"middle"} justify={"center"} align={"flex-end"} key={index}>
                    <Typography.Text style={{fontSize: '16px'}} delete={el.isDone} disabled={el.isDone}>{el.title}</Typography.Text>
                    <Checkbox onChange={onChange} checked={el.isDone}/>
                </Flex>
            ))}

        </div>
    );
};

export default TodoList;