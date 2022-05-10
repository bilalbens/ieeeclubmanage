import React, { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Grid,FormControl,InputLabel,MenuItem,Select } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
// import formData from 'formdata';
import { API_URL } from "../../config"
import { isAuthenticated } from '../../helpers/isAuthenticated';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css';
import Spin from "react-cssfx-loading/lib/Spin";






const AddAdmin = (props) => {
    const {user,token} = isAuthenticated();




//post state
const [adminEmail, setAadminEmail] = useState({email:'',})


//Loading state

const [loadingSpin, setLoadingSpin] = useState(false);


//handle input
const handleChange =(e)=>{
  
  setAadminEmail({...adminEmail,[e.target.name]:e.target.value})

}




//submit newAdmin

  const submitAdmin=(e)=>{
    e.preventDefault()
    setLoadingSpin(true)

  

    return fetch(`${API_URL}/user/addadmin`,  {
      method: "POST",
      headers:{
        "Accpet":"application/json",
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
    },
    body:JSON.stringify(adminEmail)

    })
  .then(res=>{
    setLoadingSpin(false)

      if(res.error){
          toastr.warning(res.error, "Please check you form !",{
              "positionClass": "toast-bottom-left",
              "progressBar": true,
          })
      setLoadingSpin(false)

      }

      else{
          toastr.success(`${adminEmail.email} is Admin `,"New Admin",{
              "positionClass": "toast-bottom-left",
              "progressBar": true,
          })
          setAadminEmail({
              email: '',
              
          })
          setLoadingSpin(false)

      }
  })
  .catch(err=>toastr.error(err, "server error !",{
      "positionClass": "toast-bottom-left",
      "progressBar": true,
  }))

  };



  return (
     
    <Container sx={{height: '100%', width: '100%',pt:3, m: 0 }}>
              <h3 className="text-secondary" >Create a new post</h3>

              <Box sx={{ width: '100%', borderRadius: 8,bgcolor: '#FFFFFF' ,height: '96%',boxShadow: 3,   }} >
              <form onSubmit={submitAdmin} id="post_form">

              <div className="row pt-4 " style={{ width:'100%'}}>
                  <div className="col-10 " >
                  
                        <Grid container justifyContent="center" spacing={2} sx={{p:5}}>
                              <Grid item xs={10}  >
                                  <TextField
                                  className="mt-4"
                                    sx={{p:5}}
                                    fullWidth
                                    label="Admin Email"
                                    // id="filled-textarea standard-size-normal " 
                                    variant="filled"
                                    margin="dense" 
                                    name="email" 
                                    id="email" 
                                    onChange={handleChange}
                                    // value={value} 
                        
                                  />

                              </Grid>

                              
                              <Grid item xs={10}>
                                {!loadingSpin &&  <button  className="my-4 btn btn-outline-primary mt-2 mx-2">New Admin</button>}
                                {
                                  loadingSpin && <Spin></Spin>
                                }
                                

                              </Grid>


                          </Grid>


                      
                  </div>
                 
              </div>
              </form>

              </Box>


    </Container>
   





     

        
        
  );
};



export default AddAdmin
