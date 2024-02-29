import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function HomePages() {
  const[uploadVideoResponse,setUploadVideoRespones]=useState("")
  const [removeCategoryDetails,setRemoveCategoryDetails]=useState("")

  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoRespones={setUploadVideoRespones}/>
      <Link style={{textDecoration:'none'}} to={'/watch'}>View History</Link>
      </div>
      <div className="contianer-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3 style={{color:'white'}}>All Videos</h3>
          <View setRemoveCategoryDetails={setRemoveCategoryDetails} uploadVideoResponse={uploadVideoResponse}/>
        </div>
        <div className="col-lg-6">
           <Category removeCategoryDetails={removeCategoryDetails}/>
        </div>
      </div>
    </div>
  )
}

export default HomePages
