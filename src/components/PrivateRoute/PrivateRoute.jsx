import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.user)

    return (
        <Route {...rest} render={ props => user ? <Component {...props} /> : <Redirect to="/sign-in" /> } />
    )
}

export { PrivateRoute } 