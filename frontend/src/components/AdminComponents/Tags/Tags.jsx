import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TagAddModal from "./TagAddModal";
import { getTags  ,deleteTag } from "../../../helper/adminTagHelper";
import './Tags.css'
import { setTags } from "../../../redux/features/tagSlice";
import { BiTrashAlt } from 'react-icons/bi'
import { toast } from "react-hot-toast";
import Navbar from "../AdminDashboard/Navbar";


function Tags() {
  const dispatch = useDispatch();
  const { adminToken } = useSelector((state)=>state.adminToken)
  const { allTags } = useSelector((state)=>state.tag)

  //geting tags and updating redux
  useEffect(()=>{
    (async()=>{
      const tags = await getTags(adminToken)
      dispatch(setTags(tags))
    })()
  },[])

//deleting tags and geting tags  updating redux 
  const handleDeleteTag = async(tag)=>{
      try {
        await deleteTag(tag , adminToken)
        const tags = await getTags(adminToken)
      dispatch(setTags(tags))
        toast.success("Deleted successfully")
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div style={{height:"100vh"}}>
      <Section className="bg-black" style={{ backGroundColor: "black" }}>
        <Navbar/>
        <div className="add-data-btn">
          <div className="add-data-btn ">
            <TagAddModal/>
          </div>
        </div>
        <div className="tag-card-container">
          <CardGroup >
    {allTags[0]?.tags?.map((tag,index)=>{
      return(
<>
        <div className="tag-card">
      <Card  className="community-card-tag bg-dark">
        <div className="coll-md-12 d-flex justify-content-end">< div>
                  <BiTrashAlt onClick={()=>handleDeleteTag(tag)} style={{width:"25px",height:"25px",cursor:"pointer",color:"red"}}/>
                </div></div>
                <Card.Body className="card-body-tags">
                  <Card.Title key={index} className="text-center">
                    {tag}
                  </Card.Title>
                </Card.Body>
               
              </Card>
            </div>
</>
              )
              })}
           
          </CardGroup>
        </div>
      </Section>
    </div>
  );
}
const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }
  .secondDiv {
    height: 32vh;
    background-color: black;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Tags;
