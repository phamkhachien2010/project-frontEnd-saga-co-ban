import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'

export default function HomeTeplate(props) {

    const { Component, ...restProps } = props
    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div>
                <Header />

                <Component {...propsRoute} />

                <Footer />

            </div>
        }}></Route>
    )
}
