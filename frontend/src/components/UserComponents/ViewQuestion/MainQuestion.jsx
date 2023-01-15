import { Bookmark, History } from "@mui/icons-material";
import { Avatar, Link } from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; //quills css important
import './index.css';

function MainQuestion() {
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">This is question title</h2>
          <Link top="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <div className="info">
            <p>Timestamp</p>
            <p>
              Active <span>today</span>
            </p>
            <p>
              Viewed <span>43 times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <span className="arrow">
                <svg aria-hidden="true" class="svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
                </span>
                <p className="arrow">0</p>
                <span className="arrow">
                <svg aria-hidden="true" class="svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>
                </span>
                <Bookmark />
                <History />
              </div>
            </div>
            <div className="question-answer">
              <p>This is test question body</p>
              <div className="author">
                <small>asked "Timestamp"</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author name</p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <p>
                   
                    
                    This is comment - <span>User Name</span>
                    <small>Timestamp</small>
                    <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                    style={{
                        margin:"5px 0px",
                        padding:"10px",
                        border:"1px solid rgba(0,0,0,0.2)",
                        borderRadius:"3px",
                        outline:"none"
                    }}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                     
                    ></textarea>
                    <button>Add comment</button>
                  </div>
                )}
                  </p>
                  
                </div>
              <br />
            
              </div>
              
              
              
            </div>
          </div>
        </div>
        <div  style={{
            flexDirection:"column"
        }}  className="all-questions">
          <p style={{
            marginBottom:"20px",
            fontSize:"1.3rem",
            fontWeight:"300" 
          }}>No. of answers</p>
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <span className="arrow">
                <svg aria-hidden="true" class="svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 25h32L18 9 2 25Z"></path></svg>
                </span>
                <p className="arrow">0</p>
                <span className="arrow">
                <svg aria-hidden="true" class="svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 11h32L18 27 2 11Z"></path></svg>
                </span>
                <Bookmark />
                <History />
              </div>
            </div>
            <div className="question-answer">
              <p>This is test question body</p>
              <div className="author">
                <small>asked "Timestamp"</small>
                <div className="auth-details">
                  <Avatar />
                  <p>Author name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-answer">
        <h3 style={{
            fontSize:"22px",
            margin:"10px 0",
            fontWeight:"400"
        }}>Your Answer</h3>
        <ReactQuill className="react-quill" theme="snow" style={{
            height:"200px"

        }}/>
      </div>
      <button style={{
        maxWidth:"fit-content",
        marginTop:"100px"
      }}>Post Your Answer </button>
    </div>
  );
}

export default MainQuestion;
