import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "../../../config/axiosInstance"
import ReactHtmlParser from "react-html-parser";

function ReasonModal({row}) {
    const [lgShow, setLgShow] = useState(false);
    
    var i = 1;
    
    
  return (
    <>
 
      <Button className='btn btn-dark' onClick={() => setLgShow(true)}>View reason</Button>
   
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Reasons
          </Modal.Title>
        </Modal.Header>
        {row.map((reason)=>{

            return (
                <>

                
                <Modal.Body>
       <div className='text-center'>
          <h4>{ i++ } - {reason}</h4>
       </div>
       <div className='text-center'>
        <h6></h6>
       </div>
    
        </Modal.Body>
                </>
                )
    })}
      </Modal>
    </>
  );
}
export default ReasonModal;