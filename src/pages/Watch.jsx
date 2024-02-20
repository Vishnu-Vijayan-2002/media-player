import React from 'react'
import { Link } from 'react-router-dom';
function Watch() {
  return (
    <div className='conatiner mt-5 mb-5'>
     <div className="d-flex justify-content-between">
      <h3 style={{color:'white'}}>Watch History</h3>
      <Link to={'/home'}><i style={{marginRight:'10px'}} className='fa-solid fa-arrow-left'></i>Back To <i style={{marginRight:'10px'}} className='fa-solid fa-home'></i></Link>
     </div>
     <table className='table mt-5 mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>React</td>
            <td><a href='https://youtu.be/CgkZ7MvWUAA?si=rke-qm8iOy-qYmq7' target='_black'>https://youtu.be/CgkZ7MvWUAA?si=rke-qm8iOy-qYmq7</a></td>
            <td>02/19/2024,12:07:08 PM</td>
            <td><i className='fa-solid fa-trash text-danger'></i></td>
          </tr>
        </tbody>
     </table>
    </div>
  )
}

export default Watch
