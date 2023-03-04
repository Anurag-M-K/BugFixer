import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getAllTags } from "../../../helper/homePageRightSideHelper";
import { setTags } from "../../../redux/features/tagSlice";
const RelatedTags = () => {

  const { tokenData } = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const { allTags } = useSelector((state) => state.tag);


  useEffect(() => {
    (async () => {
      const tags = await getAllTags(tokenData);
      dispatch(setTags(tags));
    })();
  }, []);

  return (
    <>
      {/* tags started */}
      <h4>Related Tags</h4>
      { allTags ?   allTags[0]?.tags?.map((tag) => {
        return (
          <div className="relatedTags d-flex align-items-center my-1">
            <button
              className="btn btn-small mr-1"
              style={{
                color: "rgb(122, 167, 199)",
                backgroundColor: "rgb(225, 236, 244)",
                fontSize: "10px",
              }}
            >
              {tag}
            </button>
            <small className="text muted ">× </small>
          </div>
        );
      }) : ""}
      <button
        className="btn"
        style={{ color: "rgb(122, 167, 199)", fontSize: "10px" }}
      >
        {" "}
        {/* <Link to="/">more related tags</Link> */}
      </button>
      {/* tags Ends */}
    </>
  );
};

export default RelatedTags;

// const tags = [
//   {
//     name: "python",
//     num: 1859181,
//   },
//   {
//     name: "java",
//     num: 1819276,
//   },
//   {
//     name: "c#",
//     num: 1514304,
//   },
//   {
//     name: "php",
//     num: 1424186,
//   },
//   {
//     name: "android",
//     num: 1360507,
//   },
//   {
//     name: "html",
//     num: 1109113,
//   },
//   {
//     name: "jquery",
//     num: 1024730,
//   },
//   {
//     name: "c++",
//     num: 749131,
//   },
//   {
//     name: "css",
//     num: 743718,
//   },
// ];
