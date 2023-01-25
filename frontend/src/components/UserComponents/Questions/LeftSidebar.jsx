import React from "react";
import { Link } from "react-router-dom";
import Qimg from "../Images/question.png";

const sideTabs = [
  { name: "Home", icon: <i class="fas fa-home mr-2"></i> },
  { name: "Public", icon: <i class="fas fa-users mr-2"></i> },
  { name: "Questions", icon: <i class="fas fa-globe-asia mr-2"></i> },
  { name: "Tags", icon: <i class="fas fa-hashtag mr-2"></i> },
  { name: "Users", icon: <i class="fas fa-users-cog mr-2"></i> },
  { name: "Collectives", icon: <i class="fas fa-shekel-sign mr-2"></i> },
  {
    name: "Explore collective Collective",
    icon: <i class="fas fa-bahai mr-1 text-warning"></i>,
  },
  { name: "Find a JOB", icon: <i class="fas fa-search-plus mr-2"></i> },

  { name: "Jobs", icon: <i class="fas fa-briefcase mr-2"></i> },
  { name: "Companies", icon: <i class="fas fa-laptop-house mr-2"></i> },
  { name: "TEAMS", icon: <i class="fas fa-users mr-2"></i> },
];

const LeftSidebar = () => {
  return (
    <>
    {/* Left sidebar started */}
      {sideTabs.map((tab) => {
        return (
          <button
            className=" btn text-muted list-group-item list-group-item-action my-1"
            href="#list-item-1"
            style={{ fontSize: "12px" }}
          >
            {tab.icon}
            {tab.name}
          </button>
        );
      })}

{/* Collaborate card started */}
      <div className="card text-left m-0 p-0">
        <div className="card-body">
          <p>
            <b>Stack Overflow for Teams -</b>Collaborate and share knowledge
            with a private group.
          </p>
          <img src={Qimg} alt="IMG" width="120px" />
          <button className="btn btn-primary btn-sm my-2">
            <small> Create a free Team</small>
          </button>
          <Link className="text-muted text-center" to="/">
            <small>What is Teams?</small>
          </Link>
        </div>
      </div>
      
{/* Collaborate card Ends */}
       {/* Left sidebar Ends */}
    </>
  );
};

export default LeftSidebar;
