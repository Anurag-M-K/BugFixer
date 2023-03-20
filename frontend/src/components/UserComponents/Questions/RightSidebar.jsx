import React from "react";
import RelatedQuestion from "./RelatedQuestion";
import RelatedTags from "./RelatedTags";

const RightSidebar = () => {
  return (
    <>
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
        {blog.map((content, index) => {
  return (
    <div key={`content-${index}`} className="d-flex">
      <i className="fas fa-pen mr-2"></i>
      <p>{content.title}</p>
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
       
        </div>
      </div>
      <RelatedTags />
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
