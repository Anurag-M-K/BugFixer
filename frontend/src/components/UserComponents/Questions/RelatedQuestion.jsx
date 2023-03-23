import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getHotQuestions } from "../../../helper/homePageRightSideHelper";
import toast from 'react-hot-toast'
import { Link, useParams } from "react-router-dom";

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);
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

  return (
    <>
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {hotQuestions?.map((title, index) => {
  return (
    <div key={`hot-question-${index}`}>
      <div className="d-flex mt-3">
        <Link key={`hot-question-link-${title?._id}`} to={`/user/question?id=${title?._id}`}>
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
