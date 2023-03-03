import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHotQuestions } from "../../../helper/homePageRightSideHelper";
import toast from 'react-hot-toast'
import { CoPresentOutlined } from "@mui/icons-material";

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);

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

  console.log("hotQuestions ",hotQuestions)

  return (
    <>
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {hotQuestions?.map((title) => {
          return ( 
            <div className=" d-flex mt-3">
              <div>
                <img
                  alt=""
                  width="15px"
                  className="mr-2"
                />
              </div>
              <Link className="mt-2" to={`/question?id=${title?._id}`}>{title?.title ? title?.title : "" }</Link>
            </div>
          ) })} 
      </div>
    </>
  );
};

export default RelatedQuestion;
