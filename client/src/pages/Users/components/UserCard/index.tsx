import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { deleteUser, editUser } from '../../../../api/UsersApi';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { User } from '../../../../types/Users.type';
import { StyledButton } from '../../styles';

type Props = {
  user: User;
  getNewUsers: () => void;
};
export default function UserCard(props: Props) {
  const { user, getNewUsers } = props;
  const [isEditVisible, setIsEditVisible] = useState<boolean>(false);
  const userId = user._id;

  async function handleDeleteUser() {
    await deleteUser(userId);
    getNewUsers();
  }

  async function handleEditUser(value: string) {
    const params = {
      _id: userId,
      name: value,
    };
    await editUser(params);
    getNewUsers();
    setIsEditVisible(false);
  }

  const editForm = (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleEditUser}
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
          Edit
        </StyledButton>
      </Form.Item>
    </Form>
  );

  return (
    <Card key={userId} size='small' title={user.name} style={{ width: 300 }}>
      {isEditVisible && editForm}
      <Button type='text' onClick={handleDeleteUser}>
        <DeleteOutlined />
      </Button>

      <Button
        type='text'
        onClick={() => setIsEditVisible((prevState: boolean) => !prevState)}
      >
        <EditOutlined />
      </Button>
    </Card>
  );
}
