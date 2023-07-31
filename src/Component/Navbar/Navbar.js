import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Coursify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="ml-auto  ">
           
            <Nav.Link href="/employee">For Employers</Nav.Link>
            <Nav.Link href="/refer">Refer & Earn ₹15k</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            
         
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;