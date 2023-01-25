import React from "react";
import "./PublicPlatform.scss"
import Logo from "../Images/logo1.png";
import publicImg from "../Images/public.png"
import privateImg from "../Images/private.png"
import { Link } from "react-router-dom";

const PublicPlatform = () => {
  return (
    <>
      <div className="publicPlatform">

      {/* publicPlatform card started */}
        <div class="publicPlatform--public" >
          <img src={Logo} class="logoImg" alt="..."  />
          <img src={publicImg} class="imageIcon" alt="..." />
          <div class="card-body">
            <h4 class="card-title text-dark">A public platform building the definitive collection of coding questions & answers</h4>
            <p class="card-text">
            A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
            </p>
            <button href="#" class="btn btn-warning publicPlatform--public--btn mt-4 mb-3">
              Join the community
            </button>
        <div className="text-secondary">or <Link to="/" >search content</Link></div>
          </div>
        </div>
        {/* publicPlatform card ends */}

        {/* private card started */}
        <div class="publicPlatform--private">
          <img src={Logo}  alt="..."class="logoImg" />
          <img src={privateImg}  alt="..."  class="imageIcon"/>
          <div class="card-body">
            <h4 class="card-title text-dark">A private collaboration & knowledge sharing SaaS platform for companies</h4>
            <p class="card-text">
            A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.
            </p>
            <hr style={{margin:"2rem 5rem"}}/>
            <p>Get started</p>
              <button type="button" className="btn btn-primary mr-2">
                For large orginations<i class="fas fa-dice-d20"></i>
              </button>
              <button type="button" className="btn btn-primary">
                For Small teams <i class="fas fa-user-friends"></i>
              </button>
          </div>
        </div>
      </div>
      {/* private card ends */}
    </>
  );
};

export default PublicPlatform;
