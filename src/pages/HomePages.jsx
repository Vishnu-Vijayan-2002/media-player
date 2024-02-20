import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function HomePages() {
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
      <Add/>
      <Link style={{textDecoration:'none'}} to={'./watch'}>View History</Link>
      </div>
      <div className="contianer-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View/>
        </div>
        <div className="col-lg-6">
          <div className="d-flex  justify-content-around">
           <h3>All Categories</h3>
           <Category/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePages
