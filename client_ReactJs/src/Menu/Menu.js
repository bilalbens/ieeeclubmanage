import React from 'react'
import "./Menu.css"
import { Link, withRouter } from 'react-router-dom'
import { API_URL } from '../config';
import toastr from 'toastr'
import "toastr/build/toastr.css"
import { isAuthenticated } from '../helpers/isAuthenticated';
import UserPhoto from '../user/UserPhoto';
import logo from "../img/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'


const isActive = (history, path)=>{
    if(history.location.pathname === path){
        return{color:"#F3A520"}
    }
    else{
        return {color:"#fff"}

    }
}



const Menu=(props)=> {
let id,name
if(isAuthenticated()){
    id = isAuthenticated().user._id
    name = isAuthenticated().user.name
}


const signout = ()=>{
    fetch(`${API_URL}/signout`)
    .then(()=>{
            toastr.success("user sgin out ","next time",{
                "positionClass": "toast-bottom-left",
            })
            localStorage.removeItem("JWT_Info")
            props.history.push('/signin')
    })

}









    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="125" height="50"/> 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">


            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                    <Link className="nav-link" style={isActive(props.history,"/" )} to="/">Home</Link>
              </li>
              <li className="nav-item">
                    <Link className="nav-link" style={isActive(props.history,"/courses" )} to="/courses">Courses</Link>
              </li>

              <li className="nav-item">
                    <Link  className="nav-link"  style={isActive(props.history,"/about" )} to="/about">About</Link>
              </li>

              <li className="nav-item">
                    <Link className="nav-link" style={isActive(props.history, "/contact")} to="/contact">Contact</Link>
              </li>
            </ul>




            <form className="d-flex">
            {isAuthenticated() &&(  
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                         {isAuthenticated() && isAuthenticated().user.role === 1 &&
                                         <li className="nav-item">

                                                <Link 
                                                    style={isActive(props.history, `${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`)} 
                                                    className="nav-link" 
                                                    to={`${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`}
                                                >
                                                     Dashboard
                                                </Link>
                                         </li>}
                                         <li className="nav-item">
                                            <Link to='/profile'>
                                                <UserPhoto className="userphoto" id={isAuthenticated().user._id} name={isAuthenticated().user.name}  ></UserPhoto> 
                                            </Link>   
                                         </li>                           
                                    </ul>
                                 )}
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                     {!isAuthenticated() && (<>
                                         <li className="nav-item">
                                             <Link style={isActive(props.history,"/signin" )} to="/signin">Sing in</Link>
                                         </li>
                                         <li className="nav-item">
                                             <Link style={isActive(props.history,"/signup" )} to="/signup">Register</Link>
                                         </li>
                                     </>)}
                                     {isAuthenticated() && (
                                     <li className="nav-item">
                                         <Link className="nav-link" style={isActive(props.history,"/logout" )} onClick={signout}>Logout</Link>
                                         {/* <span style={isActive(props.history,"/logout" )} onClick={signout}>Logout</span> */}
                                     </li>
                                     )}
                                 </ul>
            </form>
          </div>
        </div>
      </nav>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">
        //           <img src={logo} alt="" width="125" height="50"/>  
        //         </a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div className="navbar-nav d-flex justify-content-between">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history,"/" )} to="/">Home</Link>
        //                     </li>
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history,"/courses" )} to="/courses">Courses</Link>
        //                     </li>
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history,"/about" )} to="/about">About</Link>
        //                     </li>
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history, "/contact")} to="/contact">Contact</Link>
        //                     </li>
        //                 </ul>

        //                 <div className="">
                    
        //                         {isAuthenticated() &&(
        //                             <>
        //                                 {isAuthenticated() && isAuthenticated().user.role === 1 &&
        //                                 <Link 
        //                                     style={isActive(props.history, `${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`)} 
        //                                     className="nav-link" 
        //                                     to={`${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`}
        //                                 >
        //                                     Dashboard
        //                                 </Link>}
        //                                 <Link to='/profile'>
        //                                     <UserPhoto className="userphoto" id={isAuthenticated().user._id} name={isAuthenticated().user.name}  ></UserPhoto> 
        //                                 </Link>                              
        //                             </>
        //                         )}
        //                         <ul className="toplist">
                                    

        //                             {!isAuthenticated() && (<>
        //                                 <li className="topListItem">
        //                                     <Link style={isActive(props.history,"/signin" )} to="/signin">Sing in</Link>
        //                                 </li>
        //                                 <li className="topListItem">
        //                                     <Link style={isActive(props.history,"/signup" )} to="/signup">Register</Link>
        //                                 </li>
        //                             </>)}
        //                             {isAuthenticated() && (
        //                             <li className="topListItem">
        //                                 <span style={isActive(props.history,"/logout" )} onClick={signout}>Logout</span>
        //                             </li>
        //                             )}
        //                         </ul>
                        
        //                 </div>
        //         </div>
        //         </div>
        //     </div>
        // </nav>



        /////////////////////////// 
        
        // <div className="top ">
        //     <a className="navbar-brand" href="#">
        //          <img src={logo} alt="" width="125" height="50"/>
        //     </a>
        //     <div className="topcenter">
        //         <ul className="toplist">
        //             <li className="topListItem">
        //                 <Link style={isActive(props.history,"/" )} to="/">Home</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link style={isActive(props.history,"/courses" )} to="/courses">Courses</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link style={isActive(props.history,"/about" )} to="/about">About</Link>
        //             </li>
        //             <li className="topListItem">
        //                 <Link style={isActive(props.history, "/contact")} to="/contact">Contact</Link>
        //             </li>
                    
        //         </ul>
        //     </div>
        //     <div className="topright">
                    
        //             {isAuthenticated() &&(
        //                 <>
        //                     {isAuthenticated() && isAuthenticated().user.role === 1 &&
        //                     <Link 
        //                         style={isActive(props.history, `${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`)} 
        //                         className="nav-link" 
        //                         to={`${isAuthenticated() && isAuthenticated().user.role === 1 ? '/admin':''}/dashboard`}
        //                     >
        //                          Dashboard
        //                     </Link>}
        //                     <Link to='/profile'>
        //                         <UserPhoto className="userphoto" id={isAuthenticated().user._id} name={isAuthenticated().user.name}  ></UserPhoto> 
        //                     </Link>                              
        //                 </>
        //             )}
        //             <ul className="toplist">
                        

        //                {!isAuthenticated() && (<>
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history,"/signin" )} to="/signin">Sing in</Link>
        //                     </li>
        //                     <li className="topListItem">
        //                         <Link style={isActive(props.history,"/signup" )} to="/signup">Register</Link>
        //                     </li>
        //                 </>)}
        //                 {isAuthenticated() && (
        //                 <li className="topListItem">
        //                     <span style={isActive(props.history,"/logout" )} onClick={signout}>Logout</span>
        //                 </li>
        //                 )}
        //             </ul>
        //     </div>
        // </div> 
    )
}

export default withRouter(Menu)
