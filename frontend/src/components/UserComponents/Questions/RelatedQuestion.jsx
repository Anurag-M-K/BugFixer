import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotQuestions } from "../../../helper/homePageRightSideHelper";
import toast from 'react-hot-toast'
import { Link, useParams } from "react-router-dom";
import { setCommentDetails } from "../../../redux/features/commentSlice";
import axios from "../../../config/axiosInstance";
import { setHotQuestionDetails } from "../../../redux/features/hotQuestionSlice";
import { setParticularAnswerDetails } from "../../../redux/features/particularAnswersSlice";

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [questionData, setQuestionData] = useState([]);

  
let param = useParams()
  //geting all rightsid hot questins 
  useEffect(() => {
    (async () => {
      try {
        const hotQuestion = await getHotQuestions(tokenData);
        setHotQuestions(hotQuestion);

      } catch (error) {
        toast.error('Network Error..!');
        console.error(error);
      }
    })();
  }, [param]);
  console.log(hotQuestions)

  const fetchHotQuestion = (id)=>{
    console.log(id)
        try {
          
           axios.get(`/api/question/${id}`).then(async (res) => {
             dispatch(setHotQuestionDetails(res.data[0]))
            const comment = await axios.get(`/api/comment/${id}`);
            dispatch(setCommentDetails(comment.data));
            setQuestionData(res.data[0]);
            axios.get("/api/get-answer/" + id).then((getAnswer) => {
              dispatch(setParticularAnswerDetails(getAnswer.data));
            });
          });
        } catch (error) {
  
          console.log("error ",error);
        }
   
  }
  return (
    <>
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {hotQuestions?.map((title, index) => {
  return (
    <div key={`hot-question-${index}`}>
      <div className="d-flex mt-3">
        <Link onClick={()=>fetchHotQuestion(title?._id)}  key={`hot-question-link-${title?._id}`} to={`/user/question?id=${title?._id}`}>
          {title?.title || ""}
        </Link>
      </div>
    </div>
  );
})}
      </div>
    </>
  );
};

export default RelatedQuestion;
