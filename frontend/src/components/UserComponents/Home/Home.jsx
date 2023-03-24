import React from "react";
import secure from "../Images/secure.png";
import search from "../Images/search.png"
import LineImg from "../Images/line.png";
import blue from "../Images/blue.png";
import yellow from "../Images/yellow.png";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="col-md-12">
        <div className="homePage fixed">
          {/* mini black box */}
          <div className="homePage--innerDiv bg-dark text-light">
            {/* left images started */}
            <img
              src={yellow}
              alt="squre"
              className="homePage--innerDiv--sqere square"
            />
            <img
              src={LineImg}
              alt="Line"
              className="homePage--innerDiv--lineimg1 imgLine2"
            />

            <div className="homePage--innerDiv--lineimg2">
              <img className="imgLine" src={LineImg} alt="line" />
              <img src={blue} alt="squre" />
            </div>
            {/* left images ends */}

            {/* orange cards started */}
            <div className="homePage--innerDiv--box align-middle middlePart">
              <div className="homePage--innerDiv--box--find finding">
                <img src={search} alt="search" />
                <p>
                  Find the best answer to your technical question, help others
                  answer theirs
                </p>
                <button  onClick={()=>navigate('/user/community')}
                  type="button"
                  className="homePage--innerDiv--box--find--btn btn"
                >
                  Join the Community
                </button>
                <br />
                <small style={{ color: "gray" }}>
                  or
                  <Link
                    to="/"
                    style={{ color: "black", textDecoration: "underline" }}
                  >
                    search content
                  </Link>
                </small>
              </div>
              {/* orange cards ends */}

              {/* Blue cards started */}
              <div className="homePage--innerDiv--box--secure secure">
                <img src={secure} alt="search" />
                <p>
                  Want a secure, private space for your technical knowledge?
                </p>````

                <p style={{ marginBottom: "-1rem" }}>Get started</p>
                <hr text-primary />
                {/* <button type="button" className="btn btn-primary mr-2">
                For large orginations<i class="fas fa-dice-d20"></i>
                </button> */}
                <button type="button" className="btn btn-primary">
                  For Small teams <i className="fas fa-user-friends"></i>
                </button>
              </div>
            </div>
            {/* blue cards ends */}

            {/* data Developer header starts */}
            <h1 className="homePage--innerDiv--header">
              Every has a data <span> Developer</span> tab open to BugFixer
            </h1>
            {/* data Developer header starts */}
            <div className="homePage--innerDiv--plain"></div>

            <div className="homePage--innerDiv--reach">
              {details.map((det) => {
                return (
                  <>
                    <div key={det.reach}>
                      <h3>{det.reach}</h3>
                      <p>{det.detail1}</p>
                      <p>{det.detail2}</p>
                    </div>
                  </>
                );
              })}
            </div>
            {/* Stack Overflow reach Ends */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

const details = [
  {
    reach: "100+ million",
    detail1: "monthly visitors to Bug",
    detail2: "Fixer & Stack Exchange",
  },
  {
    reach: "45.1+ billion",
    detail1: "Times a developer got help",
    detail2: "since 2008",
  },
  {
    reach: "179% ROI",
    detail1: "from companies using Bug",
    detail2: "Fixer for Teams",
  },
  {
    reach: "5,000+",
    detail1: "Bug Fixer for Teams",
    detail2: "instances active every day",
  },
];
