import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "../../../config/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

function ReportReason({ questionData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reportReason, setReportReason] = useState("");
  const qid = questionData._id;
  

//question reporting and sending reason for reporting
  const handleReason = (event) => {
      setReportReason(event.target.value);
    };
  const handleSubmit = (e) => {
      toast.success("question reported !!");
    e.preventDefault();
    try {
      axios.post(`/api/question-report/${qid}`,{reason : reportReason});
      setReportReason("")
    } catch (error) {
      console.log("error ", error);
    }
    ("/question")
    setShow(false)
  };

  return (
    <>
      <Button variant="warning" style={{ width: "65px" }} onClick={handleShow}>
        <small>Report</small>
      </Button>

      <Modal show={show} onHide={handleClose}>
            <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Type Reason</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control
              required
                value={reportReason}
                onChange={handleReason}
                as="textarea"
                rows={3}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-primary" type="submit">Report</button>
        </Modal.Footer>
        <Toaster />
          </form>
      </Modal>
    </>
  );
}

export default ReportReason;
