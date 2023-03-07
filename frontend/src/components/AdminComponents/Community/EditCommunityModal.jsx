import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { useFormik } from "formik";
import "./CommunityManage.css";
import {
  getAllCommunityPosts,
  updateCommunity,
} from "../../../helper/adminCommunityHelper";
import { setCommunityPosts } from "../../../redux/features/communityPostsSlice";

function EditCommunityModal(postId) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { adminToken } = useSelector((state) => state.adminToken);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.communityPosts);

  ///filtering data for geting clicked post
  const filteredPosts = posts.filter((post) => post._id === postId.postId);

  //submiting data to backend
  const onSubmit = (values) => {
    try {
      (async () => {
        const data = await updateCommunity(
          values,
          filteredPosts[0]._id,
          adminToken
        );
        const posts = await getAllCommunityPosts();
        dispatch(setCommunityPosts(posts));
        toast.success("Post Updated successfully");
      })();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit,
  });

  return (
    <>
      <div className="community-modal">
        <FaRegEdit onClick={handleShow} />

        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add Programming languages</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                {filteredPosts?.map((post) => {
                  return (
                    <>
                      <Form.Group key={post._id}
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Language</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={post?.title}
                          autoFocus
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          autocomplete="off"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Captions</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder={post.body}
                          name="body"
                          value={values.body}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  );
                })}
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
      </div>
    </>
  );
}

export default EditCommunityModal;
