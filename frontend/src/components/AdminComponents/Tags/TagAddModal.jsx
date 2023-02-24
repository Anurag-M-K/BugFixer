import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { addTag, getTags } from "../../../helper/adminTagHelper";
import { setTags } from "../../../redux/features/tagSlice";
function TagAddModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { adminToken } = useSelector((state) => state.adminToken);
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const onSubmit = (values) => {
    try {
      (async () => {
        const data = await addTag(values, adminToken);
        toast.success("Tag added successfully");
      })();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      tag: "",
    },
    onSubmit,
  });

  useEffect(() => {
    (async () => {
      const tags = await getTags(adminToken);
      setState(tags);
      dispatch(setTags(tags));
    })();
  }, []);

  console.log("state ", state);

  return (
    <>
      <div className="community-modal">
        <Button variant="warning ms-1" onClick={handleShow}>
          Add
        </Button>

        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Tags</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="add Tag"
                    autoFocus
                    name="tag"
                    value={values.tag}
                    onChange={handleChange}
                    autocomplete="off"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Save
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        <Toaster />
      </div>
    </>
  );
}

export default TagAddModal;
