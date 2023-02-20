import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCommunityPosts } from "../../../helper/adminCommunityHelper";
import { setCommunityPosts } from "../../../redux/features/communityPostsSlice";
import AddCommunityDataModal from "./AddCommunityDataModal";
import "./CommunityManage.css";

function CommunityManage() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.communityPosts);

  useEffect(() => {
    try {
      (async () => {
        const posts = await getAllCommunityPosts();
        dispatch(setCommunityPosts(posts));
        console.log(posts);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [getAllCommunityPosts]);

  console.log("posts ", posts);

  return (
    <div>
      <Section className="bg-black" style={{ backGroundColor: "black" }}>
        <div className="add-data-btn">
          <div className="add-data-btn ">
            <AddCommunityDataModal />
          </div>
        </div>
        <div className="card-container">
          <CardGroup>
            {posts?.map((post, index) => (
            <div className="card-box">

              <Card key={index} className="community-card bg-dark">
                <Card.Body>
                  <Card.Title className="text-center">
                    {post?.title ? post.title : ""}
                  </Card.Title>
                  <Card.Text>{post?.body ? post.body : ""}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </div>
            ))}
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

export default CommunityManage;
