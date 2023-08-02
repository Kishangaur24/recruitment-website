import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src='https://static.ambitionbox.com/static/icons/company-placeholder.svg' height="40px" />Coursify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="ml-auto  ">
           
            <Nav.Link href="/employee" className='text-primary '>For Employers</Nav.Link>
            <Nav.Link href="/refer" className='text-primary'>Refer & Earn ₹15k</Nav.Link>
            <Nav.Link href="/login" className='text-primary'>Login</Nav.Link>
            <Nav.Link href="/signup" className='text-primary'>SignUp</Nav.Link>
            
         
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;