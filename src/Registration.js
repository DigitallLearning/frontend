import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Registration()
{
  const [name,setName]=useState()
  const [pass,setPass]=useState()
  const [email,setEmail]=useState()
  const [mobile,setMobile]=useState()
  const handleApi = (e) => {
    const url = "https://jayant-5r66.onrender.com/register"
    const formData = new FormData()
    formData.append('name', name)
    formData.append('pass', pass)
    formData.append('email', email)
    formData.append('mobile', mobile)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
  }

     return(
        <div>
          <center>
            <br></br>
          <form>
<input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Password" onChange={(e)=>setPass(e.target.value)}></input><br></br>
<input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
<input type="number" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}></input><br></br>
<Button variant="primary" onClick={handleApi}>Submit</Button>
           </form>
          </center>
        </div>
     )
}
export default Registration