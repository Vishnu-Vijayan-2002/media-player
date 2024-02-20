import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
function LandingPages() {
  const navigate= useNavigate()
  const handleNavigate= ()=>{
    navigate('/home')
  }
  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center m-5 ">
          <div className="col-lg-5">
            <h3 style={{color:'white'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam minus accusantium earum beatae, nobis reiciendis. Iusto asperiores porro error consequatur blanditiis nisi magni nam voluptates aliquam veritatis quos, a ex.</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing imag" />
          </div>
        </div>
        <div className="features">
          <h3 style={{color:'white'}} className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" style={{height:'350px'}} src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" style={{height:'350px'}} src="https://gifdb.com/images/high/listening-to-music-playing-headphones-917xrfcj5ywy343q.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Categorize Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card >
      <Card.Img variant="top" style={{height:'350px'}} src="https://cdn.dribbble.com/users/495079/screenshots/3059457/spinout.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 align-items-center">
            <div className="col-lg-5">
              <h3 className='text-warning'>Simple, fast and powerful</h3>
              <p style={{textAlign:'justify'}}><span style={{color:'white'}} className='fs-4'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sapiente magnam impedit ut, asperiores, recusandae quam cum repellat ipsum deleniti saepe deserunt corrupti quidem et fuga! Molestiae repellat optio quae.</p>
              <p style={{textAlign:'justify'}}><span style={{color:'white'}} className='fs-4'>Categorize Videos:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil obcaecati recusandae rerum incidunt accusantium voluptate a excepturi, atque blanditiis impedit veritatis minima! Ratione consectetur voluptates, praesentium veritatis maiores reiciendis?</p>
              <p style={{textAlign:'justify'}}><span style={{color:'white'}} className='fs-4'>Watch History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at fuga molestiae. Voluptate tempore beatae recusandae expedita exercitationem et neque aut, soluta qui dignissimos officia quam laborum? Libero, corrupti voluptates.</p>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg-6">
            <iframe width="560" height="400" src="https://www.youtube.com/embed/mD0AkOxXhWY?si=wJN24q4fX5FmFtCX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
      </div>
      <hr/>
    </>
  )
}

export default LandingPages
