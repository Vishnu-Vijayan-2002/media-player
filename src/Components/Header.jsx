import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
       <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand  className='fw-bolder d-flex align-items-center ' style={{color:'white'}}>
          <i className="fa-sharp fa-solid fa-headphones-simple fa-bounce me-3 mt-2" style={{fontSize:'30px',color:'black'}}></i>
           {' '}
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
