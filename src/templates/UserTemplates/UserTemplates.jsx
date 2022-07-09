import React, { useEffect } from 'react'
import { NavLink, Route } from 'react-router-dom'


const bgLogin = require('../../assets/bg-img/login-background.jpg');
export default function UserTemplates(props) {

    useEffect(() => {

        window.scrollTo(0, 0)

        return () => {

        }
    }, [])

    const { Component, ...restProps } = props

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div style={{ backgroundImage: `url(${bgLogin})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} className='h-screen relative'>

                <Component {...propsRoute} />

                <div className='absolute w-100 bottom-10'>
                    <div className='w-1/3 m-auto flex justify-around'>
                        <div>
                            <NavLink className='inline-block' to='/'><i className="fa fa-home"></i></NavLink>
                        </div>
                        <div >
                            <NavLink className='inline-block' to='/'>Back</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        }}></Route>
    )
}
