import React from 'react';
import { useEffect, useState } from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

export default function SingleCard() {
    const location=useLocation()
    const carddata=location.state
    const [apidata,setData]=useState({});
    useEffect(()=>{
        fetch("https://jayant-5r66.onrender.com/search/"+carddata).then((result)=>{
          result.json().then((data)=>{
            var result1 = data.find(obj => {
                return obj.pid === carddata
              })
            console.log(result1)
           setData(result1)
          })
        })
     },[])
  return (

     
         <div>
               <MDBCard>
            <MDBCardImage src={apidata.pimage} position='top' alt='...' style={{width:"300px", height:"300px"}}/>
            <MDBCardBody>
              <MDBCardTitle>{apidata.pname}</MDBCardTitle>
              <MDBCardTitle>{apidata.pprice}</MDBCardTitle>
              <MDBCardTitle>{apidata.pcat}</MDBCardTitle>
              <MDBCardText>
                {apidata.pdesc}
              </MDBCardText>
              <MDBBtn href='#'>Buy now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
         </div>
       
  );
}