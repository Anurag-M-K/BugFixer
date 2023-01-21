import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; //quills css important
import { useNavigate } from "react-router-dom";
import './Question.css';
import { TagsInput } from "react-tag-input-component";
import { useSelector } from "react-redux";
import {userState} from '../../../redux/features/userSlice'
import axios from "axios";


function Question() {

  const [loading,setLoading] = useState(false)
  const user = useSelector(userState)
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [tags,setTags] = useState('');

  const navigate = useNavigate()

  const handleQuill = (value)=>{
    setBody(value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true);
    if(title !== "" && body !== ""){
      const bodyJSON = {
        title:title,
        body:body,
        tags: JSON.stringify(tags),
        user:user

      }

     axios.defaults.baseURL = "http://localhost:80"
      await axios.post("/api/question",bodyJSON).then((res)=>{
        console.log("hello")
        alert('question added successfully');
        setLoading(false)
        navigate('/')
      }).catch((err)=>{
        console.log(err);
        setLoading(false)
      })
    }

  }

  try {
    return (
      <div className="add-question">
        <div className="add-question-container">
          <div className="head-title">
            <h1>Ask a public question</h1>
          </div>
          <div className="question-container">
            <div className="question-options">
              <div className="question-option">
                <div className="title">
                  <h3>Title</h3>
                  <small>
                    Be specific and imagine your re asking a question to another
                    person
                  </small>
                  <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Add the question title" />
                </div>
              </div>
  
              <div className="question-option">
                <div className="title">
                  <h3>Body</h3>
                  <small>
                    include all the information someone would need to answer your
                    question
                  </small>
                  <ReactQuill value={body} onChange={handleQuill}  className="react-quill" theme="snow" />
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Tags</h3>
                  <small>
                    Add upto 5 tags to describe what your question is about
                  </small>
                  {/* <TagsInput value={tags} onChange={setTags}  /> */}
                <input type="text" className="input" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit} className="button  ">
            {loading ? 'Adding question.....':"Add your question"}</button>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message)
  }
 
}

export default Question;
