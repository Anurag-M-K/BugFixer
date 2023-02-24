import React, { useEffect, useState } from "react";
import "./Questions.scss";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import UserQuestions from "./UserQuestions";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import axios from "../../../config/axiosInstance";
import {useDispatch}  from 'react-redux'
import {filterQuestionDetails, setQuestionDetails} from '../../../redux/features/questionSlice'

const Questions = () => {
  const dispatch = useDispatch()
  const [questions,setQuestions] = useState([]);
const [searchTerm , setSearchTerm] = useState('');


console.log(searchTerm)

useEffect(()=>{
  async function findQuestions(){
    await axios.get("/api/getQuestion").then(res => {
      setQuestions(res.data.reverse())
      dispatch(setQuestionDetails(res.data))
      return res.data
    }).catch(err =>{
      console.log(err)
    })
  } 
  findQuestions()
},[])


questions.filter((val)=>{
  if(searchTerm == ""){
    return val
  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
dispatch(filterQuestionDetails([val]))

    return val
  }
}).map((val,key)=>{
    
  return val.title
})




  return (
    <>
      <div className="container-fluid questions pt-4">
        <div className="row" style={{ margin: "0 8%" }}>
          <div
            className="questions--LeftSidebar col-md-2 border"
            style={{ fontSize: "14px", overflowY: "scroll",backgroundColor:"" }}
          >
            <LeftSidebar />
          </div>
          <div
            className="questions--body col-md-7"
            style={{ fontSize: "12px" }}
          >
            <div>
              <div className="d-flex justify-content-between my-3">
                <h2 className="font-weight-normal">
                  Questions
                </h2>
                <input className="searchInput" type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}} />
                
                <Link to='/add-question'><button
                  className="btn btn-primary btn-small"
                  style={{ fontSize: "14px" }}
                >
                  Ask Question
                </button></Link>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p style={{ fontSize: "16px" }}>{ questions?.length} questions</p>
             
              <button
                className="btn border"
                style={{
                  color: "rgb(122, 167, 199)",
                  backgroundColor: "rgb(225, 236, 244)",
                }}
              >
                <i className="fas fa-sort-amount-up-alt"></i> Filter
              </button>
            </div>
            <hr />
            <UserQuestions  />

            <Pagination />
          </div>

          <div
            className="questions-rightSidebar col-md-3"
            style={{ fontSize: "12px", lineHeight: "10px" }}
          >
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
