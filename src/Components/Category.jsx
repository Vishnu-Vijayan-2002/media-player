import React,{useEffect, useState}from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FloatingLabel,Form} from 'react-bootstrap';
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from './../services/allAPI';
import VideoCard from './VideoCard';
function Category({removeCategoryDetails}) {
  const[allCagetgories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);
  const handelAddCategory= async()=>{
    if(categoryName){
         const result= await addCategoryAPI({categoryName,allvideos:[]})
         handleClose()
         getAllCategory()
    }else{
      alert("Please fill the form copmletely!!!")
    }
  }
  const getAllCategory= async()=>{
    const result= await getCategoryAPI()
    setAllCategories(result.data)
  }
  // console.log(allCagetgories);
  useEffect(()=>{
    getAllCategory()
  },[removeCategoryDetails])
  // remove category
   const handleRemoveCategory=async(cId)=>{
    await removeCategoryAPI(cId)
    getAllCategory()
   }
   const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("dragging over category");
   }
// video dropping
   const videoDropped=  async (e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
  console.log(`video Dropped with vId:${videoId},inside category Id:${categoryId}`);
  const {data}= await getAVideoAPI(videoId)
  console.log(data);
  // get category  deatails where we have add video
  let selectedCategory = allCagetgories.find(item=>item.id==categoryId)
  selectedCategory.allvideos.push(data)
  console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getAllCategory()
    
   }
   const videodragStarted =(e,videoId,categoryId)=>{
    console.log(`Drag started from category Id:${categoryId} with video Id:${videoId}`);
    let dataShare= {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
     
   }
  return (
    <>
          <div className="d-flex  justify-content-around">
           <h3>All Categories</h3>
           <button onClick={handleShow} className='btn btn-secondary rounded-circle f-5'>+</button>
          </div>
      <div className="conatiner-fluid mt-3">
        {allCagetgories.length>0? allCagetgories.map((item,index)=>(
        <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-5">
          <div className='d-flex justify-content-between'>
            <h5>{item.categoryName}</h5>
            <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <div className='row mt-2'>
              {
                item.allvideos?.length>0 &&
                item.allvideos?.map((video,index)=>(
                  <div droppable onDragStart={e=>videodragStarted(e,video.id,item.id)}  key={index} className='col-lg-6'>
                    <VideoCard insideCategory={true} displayData={video}> </VideoCard>
                  </div>
                ))
              }
            </div>
            </div>)):<div className='text-danger fw-bolder'>
          No Categories are added yet!!!
      </div>}
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static"
      keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!</p>
          <FloatingLabel controlId="floatingInput"
            label="Category"
            className="mb-3">
              <Form.Control value={categoryName} onChange={e=>{setCategoryName(e.target.value)}} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelAddCategory}>
            Save Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
