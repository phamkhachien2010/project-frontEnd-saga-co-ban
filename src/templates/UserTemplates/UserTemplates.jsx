import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

export default function UserTemplates(props) {

    useEffect(() => {

        window.scrollTo(0, 0)

        return () => {

        }
    }, [])

    const { Component, ...restProps } = props

    return (
        <Route {...restProps} render={(propsRoute) => {
            return <div>
                <h1>Thanh Phan Dung Chung</h1>

                <Component {...propsRoute} />

            </div>
        }}></Route>
    )
}
