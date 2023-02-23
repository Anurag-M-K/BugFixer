import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getHotQuestions } from "../../../helper/homePageRightSideHelper";

const RelatedQuestion = () => {
  const [hotQuestions, setHotQuestions] = useState([]);
  const { tokenData } = useSelector((state) => state.user);

  // useEffect(() => {
  //   (async () => {
  //     const hotQuestions = await getHotQuestions(tokenData);
  //     setHotQuestions(hotQuestions);
  //   })();
  // }, []);

  return (
    <>
      {/* quotes started */}
      <div className="relatedQuestion">
        <h5 className="mt-5">Hot Network Questions</h5>
        {/* {hotQuestions?.map((text) => { */}
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
              {/* <Link to={`/question?id=${text?._id}`}>{text?.title}</Link> */}
            </div>
          );
        {/* })} */}
      </div>
      {/* quotes started */}
    </>
  );
};

export default RelatedQuestion;
