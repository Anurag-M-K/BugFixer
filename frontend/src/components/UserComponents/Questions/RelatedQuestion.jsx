import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHotQuestions } from "../../../helper/homePageRightSideHelper";

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      const hotQuestions = await getHotQuestions(tokenData);
      setHotQuestions(hotQuestions);
    })();
  }, []);
  console.log("hotqeustions ",hotQuestions)

  return (
    <>
      {/* quotes started */}
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {hotQuestions?.map((title) => {
          return ( 
            <div className=" d-flex mt-3">
              <div>
                <img
                  // src={process.env.PUBLIC_URL + text.img}
                  alt=""
                  width="15px"
                  className="mr-2"
                />
              </div>
              <Link className="mt-2" to={`/question?id=${title?._id}`}>{title?.title ? title?.title : "" }</Link>
            </div>
       ) })}
      </div>
      {/* quotes started */}
    </>
  );
};

export default RelatedQuestion;
