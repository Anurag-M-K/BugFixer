import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHotQuestions } from "../../../helper/homePageRightSideHelper";
import toast from 'react-hot-toast'

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);

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
  }, []);

  return (
    <>
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {hotQuestions?.map((title) => {
          return ( 
            <div key={title._id} className=" d-flex mt-3">
              <div>
              </div>
              <Link className="mt-2" to={`/user/question?id=${title?._id}`}> <small> {title?.title ? title?.title : "" }</small></Link>
            </div>
          ) })} 
      </div>
    </>
  );
};

export default RelatedQuestion;
