import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { CreateCardData, AddNewCard } from './types';
import './FormComponent.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!'
};


const CommentForm: React.FC<AddNewCard> = (props) => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const createCardData: CreateCardData = {
            authorName: values.user.name,
            title: values.user.motto,
            content: values.user.content
        }
        props.handleAddNewCard(createCardData);

        form.resetFields();

    };

    return (
        <Card className="card form">
            <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'motto']} label="Motto" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'content']} label="Content">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card >
    )
}

export default CommentForm;