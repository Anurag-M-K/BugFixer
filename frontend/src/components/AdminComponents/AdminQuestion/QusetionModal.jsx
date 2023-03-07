import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "../../../config/axiosInstance"
import ReactHtmlParser from "react-html-parser";

function QuestionModal({row}) {
  const [lgShow, setLgShow] = useState(false);
  const [QuestionDetails,setQuestionDetails] = useState("")


  //geting question details
  useEffect(() => {
    async function getQuestionDetails() {
      await axios
      .get(`/api/question/${row}`)
      .then((res) => setQuestionDetails(res.data[0]))
      .catch((err) => console.log(err));
    }
    getQuestionDetails();
  }, []);

  


  return (
    <>
 
      <Button className='btn btn-dark' onClick={() => setLgShow(true)}>View Question</Button>
   
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Reported Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <div className='text-center'>
          <h4>{QuestionDetails?.title}</h4>
       </div>
       <div className='text-center'>
        <h6>{ReactHtmlParser(QuestionDetails?.body)}</h6>
       </div>
    
        </Modal.Body>
      </Modal>
    </>
  );
}
export default QuestionModal;