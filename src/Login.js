import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Login()
{
  const [name,setName]=useState()
  const [pass,setPass]=useState()
  const navigate = useNavigate();
  const handleApi = (e) => {
    const url = "https://jayant-5r66.onrender.com/login"
   //  const formData = new FormData()
   //  formData.append('name', name)
   //  formData.append('pass', pass)
   const data={
      name:name,
      pass:pass
  }
    axios.post(url, data).then(result => {
      console.log(result.data)
      if(result.data=="User deos not exitst")
      {
         alert("User deos not exitst")
      }
      else  if(result.data=="Invalid user id or pass")
         {
            alert("Invalid user id or pass")
         }
         else{
            navigate("/upload")
         }
    })
  }

     return(
        <div>
          <center>
            <br></br>
          <form>
<input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input><br></br>
<Button variant="primary" onClick={handleApi}>Submit</Button>
           </form>
          </center>
        </div>
     )
}
export default Login