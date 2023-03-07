import React, { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { getAllTags } from "../../../helper/homePageRightSideHelper";
import { setTags } from "../../../redux/features/tagSlice";
const RelatedTags = () => {

  const { tokenData } = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const { allTags } = useSelector((state) => state.tag);

//geting all tags from database
  useEffect(() => {
    (async () => {
      const tags = await getAllTags(tokenData);
      dispatch(setTags(tags));
    })();
  }, []);

  return (
    <>
      <h4>Related Tags</h4>
      { allTags ?   allTags[0]?.tags?.map((tag) => {
        return (
          <div key={tag} className="relatedTags d-flex align-items-center my-1">
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
      </button>
    </>
  );
};

export default RelatedTags;

