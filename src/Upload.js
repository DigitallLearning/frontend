import { useState } from "react"
import axios from 'axios';
function Upload()
{
    const [pid,setPID]=useState()
    const [pname,setpname]=useState()
    const [pprice,setpprice]=useState()
    const [pcat,setpcat]=useState()
    const [pdesc,setpdesc]=useState()
    const [pimage,setPImage]=useState()
    function submitForm(e)
    {
      console.log(pimage)
       e.preventDefault()
       const url="http://localhost:4000/"
       const formData=new FormData()
       formData.append("pid",parseInt(pid))
       formData.append("pname",pname)
       formData.append("pprice",parseInt(pprice))
       formData.append("pcat",pcat)
       formData.append("pdesc",pdesc)
       formData.append("pimage",pimage)
       axios.post(url, formData).then(result => {
       // console.log(result.data)
        //alert('success')
      })
    }
       return(
        <div>
           <center>
            <form>
<input type="number" placeholder="Product Id" onChange={(e)=>setPID(e.target.value)}/><br></br>
<input type="text" placeholder="Product Name" onChange={(e)=>setpname(e.target.value)}/><br></br>
<input type="number" placeholder="Product Price" onChange={(e)=>setpprice(e.target.value)}/><br></br>
<input type="text" placeholder="Product Category" onChange={(e)=>setpcat(e.target.value)}/><br></br>
<input type="text" placeholder="Product Desc" onChange={(e)=>setpdesc(e.target.value)}/><br></br>
<input type="file" onChange={(e)=>setPImage(e.target.files[0])}></input><br></br>
                <button onClick={submitForm}>Submit</button>
            </form>
           </center>
        </div>
       )
}
export default Upload