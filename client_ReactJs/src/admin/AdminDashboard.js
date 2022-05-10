import * as React from 'react';
import List from '@mui/material/List';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Container from '@mui/material/Container';
import ListIcon from '@mui/icons-material/List';
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../admin/sidebars.css'

const isActive = (history, path)=>{
    if(history.location.pathname === path){
        return " nav-link active"
    }
    else{
      return "nav-link text-white"
    }

}






const AdminDashboard = (props) => {
    return (
      <div >
          {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}



          <div  className="sidebar offcanvas offcanvas-start show" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"  aria-modal="true" role="dialog">
          <div className="offcanvas-header">
            <h5  className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Dashboard</h5>
            {/* <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
          </div>
          <div className="offcanvas-body">
            <ul style={{paddingLeft:"10px"}} className="navbar-nav justify-content-end flex-grow-1 pe-3">
           {/* <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">Home</a>
           </li> */}
           <li className="nav-item">
                       <Link   aria-current="page" className={isActive(props.history,"/admin/users" )} to="/admin/users">
                         <ListIcon/>        Members
                       </Link>
           </li>

           <li className="nav-item">
                      <Link aria-current="page" className={isActive(props.history,"/admin/post" )} to="/admin/post">
                        <AddIcon/>        Post
                       </Link>
           </li>

           <li className="nav-item">
                       <Link   aria-current="page" className={isActive(props.history,"/admin/addadmin" )} to="/admin/addadmin">
                       <GroupsIcon /> Admin
                       </Link>
           </li>

           {/* <li className="nav-item">
                       <Link   aria-current="page" className={isActive(props.history,"/admin/u" )} to="/admin/users">
                         <ListIcon/>        Members
                       </Link>
           </li> */}

         </ul>
          </div>
        </div>
    </div>

//       <div>

//  <nav className="navbar navbar-light bg-light fixed-top"> 
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Offcanvas navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="offcanvas offcanvas-end" tabindex="1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//       <div className="offcanvas-header">
//                       <Link   aria-current="page" to="/admin/dashboard">
//                          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Dashboard</h5>
//                       </Link>
//         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//                       <Link   aria-current="page" className={isActive(props.history,"/admin/users" )} to="/admin/users">
//                         <ListIcon/>        Members
//                       </Link>
//           </li>

//           <li className="nav-item">
//                      <Link aria-current="page" className={isActive(props.history,"/admin/post" )} to="/admin/post">
//                        <AddIcon/>        Post
//                       </Link>
//           </li>

//           <li className="nav-item">
//                       <Link   aria-current="page" className={isActive(props.history,"/admin/users" )} to="/admin/users">
//                       <GroupsIcon /> Committee
//                       </Link>
//           </li>

//           <li className="nav-item">
//                       <Link   aria-current="page" className={isActive(props.history,"/admin/users" )} to="/admin/users">
//                         <ListIcon/>        Members
//                       </Link>
//           </li>

//         </ul>
       
//       </div>
//     </div>
//    </div> 
// </nav> 

            //  <main>
            //     <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:280}}>
            //       <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    
            //         <Link   aria-current="page" to="/admin/dashboard">
            //               <span className="fs-4">Sidebar</span>
            //           </Link>
            //       </a>
            //       <hr/>
            //       <ul className="nav nav-pills flex-column mb-auto">
            //         <li>
            //           <Link   aria-current="page" className={isActive(props.history,"/admin/users" )} to="/admin/users">
            //           <ListIcon/>        Members
            //           </Link>
                      
            //         </li>
            //         <li>
            //         <Link aria-current="page" className={isActive(props.history,"/admin/post" )} to="/admin/post">
            //           <AddIcon/>        Post
            //           </Link>
                      
            //         </li>
            //         <li>
            //           <a href="#" className="nav-link text-white">
            //           <DynamicFormIcon /> New Form
            //           </a>
            //         </li>
            //         <li>
            //           <a href="#" className="nav-link text-white">
            //           </a>
            //         </li>
            //         <li>
            //           <a href="#" className="nav-link text-white">
            //           <VideoStableIcon /> Add Record
            //           </a>
            //         </li>
            //       </ul>
            //       <hr/>

                  

            //     </div>
            //     <div className="b-example-divider"></div>

            // </main> 
      //  </div>
      
    )
}

export default withRouter(AdminDashboard)


