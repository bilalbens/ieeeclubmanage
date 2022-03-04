import React from 'react'
import {isAuthenticated } from '../helpers/isAuthenticated' 
import { Route, Redirect } from 'react-router-dom'


const AdminRoute = ({component:Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={ props=>
                (isAuthenticated() &&  isAuthenticated().user.role === 1) ? (<Component {...props}/>) : <Redirect  to={{pathname:"/"}}/>
            }
        />
            
    )
}

export default AdminRoute
