import React from 'react'
import { Form, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Login() {

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
      lg: {
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
      lg: {
        span: 18
      }
    },
  };


  return (
    <div className='flex flex-col justify-center py-5'>
      <div className='text-center mb-5'>
        <img src={require('../../assets/img/img-default.jpg')} className='rounded-full inline-block' style={{ width: '100px', height: '100px' }} alt="logo" />
      </div>
      <div className={`w-3/4 lg:w-1/2 m-auto py-5`} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
        <h1 className='text-white font-bold text-center text-2xl mb-3'>Login</h1>

        <Form
          {...formItemLayout}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label='User name'
            name='username'
            rules={[
              {
                required: true,
                message: 'Name much not empty',
              },
            ]}
          >
            <Input name='userName' placeholder='Please input your Username' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='passWord'
            rules={[
              {
                required: true,
                message: 'Password much not empty',
              },
            ]}
          >
            <Input.Password name='password' placeholder='Please input your password' />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 16,
              span: 4,
            }}
          >
            <Button type="primary" htmlType="submit">
              <span className='text-base'>
                Login
              </span>
            </Button>
          </Form.Item>
        </Form>
        <div className='text-center'>
          <h2>If you do not have an account</h2>
          <NavLink className='px-2 py-2 inline-block bg-slate-600 text-white hover:no-underline' to='/register'>Register here</NavLink>
        </div>
      </div>
    </div>
  )
}
