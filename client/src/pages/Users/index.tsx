import { Form, Input } from 'antd';
import React from 'react';
import { saveUser } from '../../api/UsersApi';
import ListUsers from './components/ListUsers';
import useGetAllUsers from './hooks/useGetAllUser';
import { Container, StyledButton, StyledSpin, StyledSwitch } from './styles';

type ContentProps = {
  changeThemeHandler: () => void;
};

export function UsersPage(props: ContentProps) {
  const [users, isLoading, error, getUsers] = useGetAllUsers();
  const { changeThemeHandler } = props;

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

      {isLoading ? (
        <StyledSpin size='large' />
      ) : (
        <ListUsers users={users} getNewUsers={getUsers} />
      )}
    </Container>
  );
}
