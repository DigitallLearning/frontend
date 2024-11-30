import { useEffect, useState } from "react"
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
function Electronics()
{
  const [apidata,setData]=useState([]);
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
              item.pcat=="electronics"?
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
              <MDBBtn>Buy Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>:null
          )}
    </MDBRow>
    </div>
  )
}
export default Electronics