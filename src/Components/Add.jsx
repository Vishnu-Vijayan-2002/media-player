import React, { useState } from 'react'
import { Modal,Button,FloatingLabel,Form} from 'react-bootstrap'
import { uploadVideoAPI } from './../services/allAPI';
function Add({setUploadVideoRespones}) {
const [uploadVideo,setUploadVideo]=useState({
 caption:'',imageURL:'',youtublink:''
})
console.log(uploadVideo);
 const [show, setShow] = useState(false);

  const handleClose = () => 
 { setShow(false);
  setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtublink:""})
}
  const handleShow = () => setShow(true);
  const getEmbedLink=(link)=>{
    if(link.includes('v='))
    {
      let videoId=link.split('v=')[1].slice(0,11)
      setUploadVideo({...uploadVideo,youtublink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      setUploadVideo({...uploadVideo,youtublink:""})
      alert("Input Proper Youtube Link !!")
    }

  }
  const  handleUpload=async()=>{
    // store upload video in http://localhost:5173/home to http://localhost:5173/home
    const {caption,imageURL,youtublink}=uploadVideo
    if(caption && imageURL && youtublink)
    {
      // alert("store the video")
      const result=await uploadVideoAPI(uploadVideo)
     console.log(result);
     if(result.status>=20 && result.status<=300)
     {
      alert(`Video "${result.data.caption}" uploaded successfully!!!`)
      setUploadVideoRespones(result.data)
      handleClose()
     }
     else{
      alert("API Call Failed.. Please try after some time!!!")
     }
    }else{
      alert("Please fill the form completly!!")
    }
  }
  return (
    <div>
      <div className="d-flex mt-2">
        <h5 style={{color:'white'}}>Upload A Video</h5>
        <button onClick={handleShow} style={{borderRadius:"50%",marginLeft:'5px'}} className='btn bg-secondary ms-2'><i style={{color:'white'}} class="fa-solid fa-plus"></i></button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className='border rounded border-secondary p-3'>
            <FloatingLabel controlId="floatingInput"
            label="Video Caption"
            className="mb-3">
                  <Form.Control value={uploadVideo.caption} onChange={e=>{setUploadVideo({...uploadVideo,caption:e.target.value})}} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"
            label="Image Url"
            className="mb-3">
                  <Form.Control value={uploadVideo.imageURL} onChange={e=>{setUploadVideo({...uploadVideo,imageURL:e.target.value})}} type="text" placeholder="Image Url" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput"
            label="Youtube Video Link"
            className="mb-3">
                  <Form.Control value={uploadVideo.youtublink} onChange={e=>{getEmbedLink(e.target.value)}} type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' variant="primary" onClick={handleUpload}>
            Uplad
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
