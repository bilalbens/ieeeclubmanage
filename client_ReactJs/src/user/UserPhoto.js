import React from 'react'
import { API_URL } from '../config'

const UserPhoto = ({className,id, name}) => {

    return (

        <img className={className} src={`${API_URL}/user/photo/${id}`}  alt={`${name}`} />    

    )
}

export default UserPhoto
