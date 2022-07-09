import React from 'react'
import { Button, Form, Input } from 'antd'
import { NavLink } from 'react-router-dom';

export default function Register() {

  const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 7,
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
    <img src={require('../../assets/img/img-default.jpg')} className='rounded-full inline-block' style={{ width: '100px', height:'100px' }} alt="logo" />
    </div>
    <div className={`w-3/4 lg:w-1/2 m-auto py-5`} style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
        <h1 className='text-white font-bold text-center text-2xl mb-3'>Register</h1>
        <h2 className='text-center text-xs md:text-base mb-3'>If you do not have an account <i className="fa fa-arrow-down"></i></h2>
        <Form
            name="basic"
            {...formItemLayout}
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[
                    {
                        required: true,
                        message: 'UserName much not empty',
                    },
                ]}
            >
                <Input name='userName' placeholder='Please input your userName' />
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
                <Input.Password name="password"  placeholder='Input your password' />
            </Form.Item>

            <Form.Item
                name="confirm"
                label='Confirm password'
                dependencies={['passWord']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message:'The two passwords that you entered do not match!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('passWord') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('Password confirm much not empty'));
                        },
                    }),
                ]}
            >
                <Input.Password name="confirmPassword" placeholder='Please input your password' />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 16,
                    span: 4,
                }}
            >
                <Button type="primary" htmlType="submit">
                    <span className='text-base'>
                        Register
                    </span>
                </Button>
            </Form.Item>
        </Form>
        <div className='text-center'>
            <h2>If you already have an account</h2>
            <NavLink className='px-2 py-2 inline-block bg-slate-600 text-white hover:no-underline' to='/login'>Login here</NavLink>
        </div>
    </div>
</div>
  )
}
