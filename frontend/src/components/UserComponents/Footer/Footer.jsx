import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer text-lg-start bg-dark text-muted py-5">
        <section className="">
          <div className="container text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-4 col-xl-3 mx-auto mb-4 "></div>

              {footerContent.map((content, index) => {
                return (
                  <div
                    key={`content-${index}`}
                    className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer--content"
                  >
                    <h6 className="text-uppercase fw-bold mb-4">
                      {content.header}
                    </h6>
                    <p>
                      <Link className="text-reset">{content.con1}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con2}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con3}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con4}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con5}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con6}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con7}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con8}</Link>
                    </p>
                    <p>
                      <Link className="text-reset">{content.con9}</Link>
                    </p>
                  </div>
                );
              })}
              {/* bugfixer st Ends */}

              {/* Social Links started */}
              <div className="col-md-3 col-lg-2 col-xl-2 d-flex m-auto">
                <p className="mx-4">
                  <Link className="text-reset">
                    <i className="fas fa-id-card"></i>Blog
                  </Link>
                </p>
                <p>
                  <Link className="text-reset  mx-4">
                    <i className="fab fa-facebook-square"></i>Facebook
                  </Link>
                </p>
                <p>
                  <Link className="text-reset  mx-3">
                    <i className="fab fa-instagram-square"></i>Instagram
                  </Link>
                </p>
                <p>
                  <Link className="text-reset  mx-4">
                    <i className="fab fa-twitter-square"></i>Twitter
                  </Link>
                </p>
                <p>
                  <Link className="text-reset mx-4">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Link>
                </p>
              </div>
              {/* Social Links Ends */}
            </div>
          </div>
        </section>

        {/* Copyright Started */}
        <div className="text-right bg-dark mr-5">
          © 2023 Copyright: {""}
          <Link className="text-reset fw-bold">created by Anurag MK</Link>
        </div>
        {/* Copyright Ends */}
      </footer>
    </>
  );
};

export default Footer;

const footerContent = [
  {
    header: "Bugfixer",
    con1: "Questions",
    con2: "Jobs",
    con3: "Developer Jobs Directory",
    con4: "Salary Calculator",
    con5: "Help",
    con6: "Mobile",
    con7: "Disable Responsiveness",
  },
  {
    header: "PRODUCTS",
    con1: "Teams",
    con2: "Talent",
    con3: "Advertising",
    con4: "Enterprise",
  },
  {
    header: "COMPANY",
    con1: "Questions",
    con2: "Press",
    con3: "Work Here",
    con4: "Legal",
    con5: "Privacy Policy",
    con6: "Terms of Service",
    con7: "Contact Us",
    con8: "Cookie Settings",
    con9: "Cookie Policy",
  },
  {
    header: " NETWORK",
    con1: "Technology",
    con2: "Culture & recreation",
    con3: "Life & arts",
    con4: "Science",
    con5: "Professional",
    con6: "Business",
    con7: "API",
    con8: "Data",
  },
];
