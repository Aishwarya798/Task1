import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'



function Nevigation() {
  return (
   <>
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><img src="" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
           <Nav.Link href="dash">Dashboard</Nav.Link>
            <Nav.Link href="create">CreateAds</Nav.Link> 
            
           {/* o=' <Link to='dash' style={{textDecoration:'none'}}>Dashboard</Link>
            
            <Link tcreate' style={{textDecoration:'none'}}>Createad</Link> */}
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   </>
  )
}

export default Nevigation