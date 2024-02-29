import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';
function VideoCard({displayData,setdeleteVideorespones,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // get video details
    const {caption,youtublink}=displayData
    let timeData=new Date()
    let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtublink,timeStamp})
  }
  
    // removing video function
  const deleteVideo= async(vId)=>{
    //  api call
    const result = await removeVideoAPI(vId)
    setdeleteVideorespones(result.data)
  }
// dragStart
const dragStarted=(e,vId)=>{
  console.log(`Dragging started with video id:${vId}`);
  e.dataTransfer.setData("videoId",vId)
}

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{marginLeft:'20px',marginTop:'10px'}} className='shadow'>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'210px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <p style={{color:'white'}}>{displayData?.caption}</p>
{  !insideCategory && <button onClick={(e)=>{deleteVideo(displayData?.id)}} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
}        </Card.Title> 
    </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtublink}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard
