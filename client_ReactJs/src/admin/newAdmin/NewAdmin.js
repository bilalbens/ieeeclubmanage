import React from 'react'
import AdminDashboard from '../AdminDashboard'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddAdmin from "./AddAdmin"

const NewAdmin = () => {
    return (
        <div className="container-fluid">
        <div className="row align-items-center d-flex justify-content-between">
                     <div className="col-3 m-0 p-0" >
                       <AdminDashboard/>
                    </div>
                    <div className="col-9 p-0 m-0" >
                         <AddAdmin/>
                    </div>
        </div>
    </div>
    )
}

export default NewAdmin
