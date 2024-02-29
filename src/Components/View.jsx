import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllvideosAPI, getSingleCategoryAPI } from '../services/allAPI'
import { updateCategoryAPI } from './../services/allAPI';
function View({uploadVideoResponse,setRemoveCategoryDetails}) {
  const [allvideos,setAllVideos] =useState([])
  const [deleteVideoResponse,setdeleteVideorespones]=useState("")

  const getAllVideos= async()=>{
    const result = await getAllvideosAPI()
    // console.log(result);
    if(result?.status==200)
    {
      setAllVideos(result?.data);
    }
  }
  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])
  // console.log(allvideos);
  const dragOverView=(e)=>{
    e.preventDefault()
  }
    const handleCategoryVideo = async (e)=>{
      const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
      console.log(`Remove video Id:${videoId} from category Id:${categoryId}`);
      // get A category
     const {data} = await getSingleCategoryAPI(categoryId)   
     const updateVideoList =data.allvideos.filter(item=>item.id!=videoId)
     console.log(updateVideoList);
     const {id,categoryName}=data
     const result = await updateCategoryAPI(categoryId,{id,categoryName,allvideos:updateVideoList})
     setRemoveCategoryDetails(result.data)
     }
    
  
  return (
    <>
    <Row draggable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)} >
        {allvideos?.length>0? allvideos?.map((video,index)=>(<Col className='mb-4' sm={12} md={6} lg={4}>
         <VideoCard setdeleteVideorespones={setdeleteVideorespones} displayData={video}/>
        </Col>)):<div className='text-denger fw-bolder'>No video are upload yet!!!</div>}
    </Row> 
    </>
  )
}

export default View
