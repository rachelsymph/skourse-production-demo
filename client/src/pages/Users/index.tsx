import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUsers, saveUser } from '../../api/UsersApi';
import { User } from '../../types/Users.type';
import ListUsers from './components/ListUsers';
import { Container, StyledButton, StyledSwitch } from './styles';

type ContentProps = {
  changeThemeHandler: () => void;
};

export function UsersPage(props: ContentProps) {
  const [users, setUsers] = useState<User[]>([]);
  const { changeThemeHandler } = props;

  const getNames = async () => {
    const result = await getUsers();
    setUsers(result.data);
    console.log(result.data);
  };

  const saveName = async (name: string) => {
    const result = await saveUser(name);
    console.log(result);
  };

  const onFinish = (value: string) => {
    saveName(value);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    getNames();
  }, []);

  return (
    <Container>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <StyledButton type='primary' htmlType='submit'>
            Submit
          </StyledButton>
        </Form.Item>
        <Form.Item label='Dark Mode' valuePropName='checked'>
          <StyledSwitch onClick={changeThemeHandler} />
        </Form.Item>
      </Form>
      <ListUsers users={users} />
    </Container>
  );
}
