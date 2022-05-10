import React from 'react'
import Menu from '../Menu/Menu'
import welcomeImg from "../img/Welcome.jpg"

function Home() {
    return (

            <div className="container">
                <div className="row" style={{paddingTop:30}}>
                    <div className="col-3">Menu</div>
                    <div className="col-9">

                                <div className="container bg-white pt-5">
                                    <div className="row blog-item px-3 pb-5">
                                        <div className="col-md-5">
                                            <img className="img-fluid mb-4 mb-md-0" src={welcomeImg} alt="Image" />
                                        </div>
                                        <div className="col-md-7">
                                            <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">Welcome to IEEE Ensaf Student Branch</h3>
                                            <div className="d-flex mb-3">
                                                <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> 10-May-2022</small>
                                                <small className="mr-2 text-muted"><i className="fa fa-folder"></i> Web Committee</small>
                                                <small className="mr-2 text-muted"><i className="fa fa-comments"></i> 15 Comments</small>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu suscipit orci velit id libero
                                            </p>
                                            <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                                        </div>
                                </div>

                    
                    </div>
                </div>
                </div>
            </div>




    )
}

export default Home
