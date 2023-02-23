import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TagAddModal from "./TagAddModal";
import { getTags } from "../../../helper/adminTagHelper";
import './Tags.css'
import { setTags } from "../../../redux/features/tagSlice";

function Tags() {
  const dispatch = useDispatch();
  const { adminToken } = useSelector((state)=>state.adminToken)
  const { allTags } = useSelector((state)=>state.tag)

  useEffect(()=>{
    (async()=>{
      const tags = await getTags(adminToken)
      dispatch(setTags(tags))
    })()
  },[])

  console.log("tags from store ",allTags)


  return (
    <div style={{height:"100vh"}}>
      <Section className="bg-black" style={{ backGroundColor: "black" }}>
        <div className="add-data-btn">
          <div className="add-data-btn ">
            <TagAddModal/>
          </div>
        </div>
        <div className="card-container">
          <CardGroup>
    {allTags[0]?.tags?.map((tag,index)=>{
      return(
<>
        <div className="tag-card">

      <Card  className="community-card bg-dark">
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
