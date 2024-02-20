import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="footer-content d-flex justify-content-between">
        <div style={{width:'400px'}} className="media">
          <h5 style={{color:'white'}} className='d-flex'><i className="fa-sharp fa-solid fa-headphones-simple fa-bounce me-3 mt-2" style={{fontSize:'30px',color:'white'}}></i>Media Player</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique laboriosam libero hic? Voluptas minus aperiam ipsum dolorem odit, cumque totam ab fuga quae iste quas dolore ratione quia itaque doloribus.</p>

        </div>
        <div className="links d-flex flex-column">
          <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none'}}>Home Page</Link>
          <Link to={'/watch'} style={{textDecoration:'none'}}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5 style={{color:'white'}}>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React Js</a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React Routing</a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React</a>
        </div>
        <div className="contact">
          <h5 style={{color:'white'}}>CONTACT US</h5>
          <div className="d-flex">
            <input type="text" className='form-control me-1' placeholder='Eamil Id Please' />
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right mt-2'></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href=""><i className='fa-brands fa-instagram'></i></a>
            <a href=""><i className='fa-brands fa-facebook'></i></a>
            <a href=""><i className='fa-brands fa-linkedin'></i></a>
            <a href=""><i className='fa-brands fa-whatsapp'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright &copy;2024 Media Player.Built with React</p>
    </div>
  )
}

export default Footer
