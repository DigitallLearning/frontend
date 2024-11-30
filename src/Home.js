import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from "./Footer";
function Home()
{
  const navigate = useNavigate();
  const [apidata,setData]=useState([]);
  
  function addtoCart(name,price,image)
  {
    const url="https://jayant-5r66.onrender.com/cart"
    const formData=new FormData()
    formData.append("pname",name)
    formData.append("pprice",parseInt(price))
    formData.append("pimage",image)
    axios.post(url, formData).then(result => {
     console.log(result.data)
     alert('Add to cart Sucessfully')
   })
  }
  function singlecard(pid)
  {
  
    navigate("/item",{state:pid})
  }
  useEffect(()=>{
     fetch("https://jayant-5r66.onrender.com/").then((result)=>{
       result.json().then((data)=>{
        setData(data)
       })
     })
  },[])


  return(
    <div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
        {
          apidata.map((item)=>
            <MDBCol>
          <MDBCard>
           <center>
           <MDBCardImage
              src={item.pimage}
              alt='...'
              position='top'
              style={{width:"200px",height:"200px"}}
            />
           </center>
            <MDBCardBody>
              <MDBCardTitle>{item.pname}</MDBCardTitle>
              <MDBCardText>{item.pprice}</MDBCardText>
              <MDBCardText>{item.pcat}</MDBCardText>
              <MDBCardText>{item.pdesc}</MDBCardText>
              <MDBBtn onClick={()=>singlecard(item.pid)}>View Details</MDBBtn>
              &nbsp;&nbsp;<MDBBtn onClick={()=>addtoCart(item.pname,item.pprice,item.pimage)}>Add to Cart</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
          )}
    </MDBRow>
    <Footer></Footer>
    </div>
  )
}
export default Home