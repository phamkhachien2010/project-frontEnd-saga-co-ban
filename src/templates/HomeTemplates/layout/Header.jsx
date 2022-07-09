import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'fixed', zIndex: 999, width: '100%' }}>
            <div className='block md:flex px-5 py-4 justify-around items-center' >
                <div className='hidden lg:block'>
                    <NavLink to='/'>
                        <img className='rounded-lg' src={require('../../../assets/img/logo-dark.png')} style={{ width: '75px' }} alt="logo" />
                    </NavLink>
                </div>
                <ul className='flex text-xl items-center justify-center mb-0 header_ul'>
                    <li className=''>
                        <NavLink className='inline-block ' to='/home' ><i className="fa fa-home"></i></NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='inline-block ' to='/'><i className="fa fa-th-large"></i></NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='inline-block ' to='/'><i className="fa fa-gift"></i></NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='inline-block ' to='/'><i className="fa fa-users"></i></NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='inline-block ' to='/'><i className="fa fa-cog"></i></NavLink>
                    </li>
                </ul>
                <div >
                    <NavLink className='px-3 py-2 border-2 rounded-md mr-2 text-white hover:text-green-600' to='/login'>Login</NavLink>
                    <NavLink className='px-3 py-2 border-2 rounded-md text-white' to='/register'>Sign up</NavLink>
                </div>
            </div>
        </div>
    )
}
