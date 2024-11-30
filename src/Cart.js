import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useEffect, useState } from "react"
export default function Cart() {
    const [apidata,setData]=useState([]);
    const [totalSum, setTotalSum] = useState(0);
    useEffect(()=>{
        fetch("https://jayant-5r66.onrender.com/cart").then((result)=>{
          result.json().then((data)=>{
           setData(data)
           
          })
        })
     },[])
     useEffect(() => {
        const total = apidata.reduce((acc, row) => acc + row.pprice, 0);
        // console.log(total)
         setTotalSum(total)
      }, [apidata]);
      function deletecart(pid)
      {
        console.log(pid)
      }
  return (
   <div>
    {
        
        apidata.map((item)=>
            
            <MDBCard style={{ maxWidth: '540px' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={item.pimage} fluid style={{width:"150", height:"150"}}/>
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>{item.pname}</MDBCardTitle>
              <MDBCardTitle>{item.pprice}</MDBCardTitle>
              <MDBBtn>Buy Now</MDBBtn>
              &nbsp;&nbsp;<MDBBtn>Remove</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
        )
  
    }
  <h1>Number of Items : {apidata.length}</h1>
  <h1>Total Amount : {totalSum}</h1>
  &nbsp;&nbsp;<MDBBtn>Place Order</MDBBtn>
   </div>
  );
}