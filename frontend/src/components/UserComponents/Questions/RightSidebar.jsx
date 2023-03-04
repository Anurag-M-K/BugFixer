import React from "react";
import RelatedQuestion from "./RelatedQuestion";
import RelatedTags from "./RelatedTags";

const RightSidebar = () => {
  return (
    <>
      {/* Blog card started */}
      <div className="card shadow-sm">
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(241, 229, 188)" }}
        >
          <b>The Overflow Blog</b>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: "rgb(251, 243, 213)" }}
        >
          {blog.map((content) => {
            return (
              <div className="d-flex">
                <i class="fas fa-pen mr-2"></i>
                <p>{content}</p>
              </div>
            );
          })}
        </div>
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(241, 229, 188)" }}
        >
          <b>Featured on Meta</b>
        </div>
        <div
          className="card-body border-bottom"
          style={{ backgroundColor: "rgb(251, 243, 213)" }}
        >
          {/* {meta.map((content) => {
            return (
              <div className="d-flex">
                <i
                  class="far fa-comment-alt mr-2"
                  style={{ color: "rgb(122, 167, 199)" }}
                ></i>
                <p>{content}</p>
              </div>
            );
          })} */}
        </div>
      </div>
      {/* Blog card ends */}

   

      {/* Relative Tags part added */}
      <RelatedTags />

      {/* Network Questions added */}
      <RelatedQuestion />
    </>
  );
};

export default RightSidebar;

const meta = [
  `Providing a JavaScript API `,
  `Congratulations `,
];

const blog = [
  `Best practices for writing code `,
  ` Sequencing your DNA  `,
];

const apps = [
  {
    img: `../Images/go.png`,
    name: "Go Language",
    member: "16k Members",
    content: `The official Q&A channel for Google's Go Programming Language.`,
  },
  {
    img: `../Images/cloud.png`,
    name: "Google Cloud",
    member: "14k Members",
    content: `Google Cloud provides organizations with leading infrastructure, platform capabilities`,
  },
  {
    img: `../Images/githubLab.png`,
    name: "GitLab",
    member: "6k Members",
    content: `GitLab is the open DevOps platform, delivered as a single application. Our open source`,
  },
];
