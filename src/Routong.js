import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import Electronics from './Electronics';
import Mobile from './Mobile';
import Upload from './Upload';
import { Card } from 'react-bootstrap';
import Cart from './Cart';
import SingleCard from './SingleCard';
function Routong() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/mobile">Mobile</Nav.Link>
            <Nav.Link href="/men">Men Cloth</Nav.Link>
            <Nav.Link href="/woman">Woman Cloth</Nav.Link>
            <Nav.Link onClick={()=>navigate("/login")}><Button variant="danger">Login</Button></Nav.Link>
            <Nav.Link onClick={()=>navigate("/registration")}><Button variant="danger">Register</Button></Nav.Link>
            <Nav.Link onClick={()=>navigate("/cart")}><Button variant="danger">Cart</Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/electronics' Component={Electronics}></Route>
        <Route path='/mobile' Component={Mobile}></Route>
        <Route path='/upload' Component={Upload}></Route>
        <Route path='/registration' Component={Registration}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/item' Component={SingleCard}></Route>
        
      </Routes>
    </>
  );
}

export default Routong;