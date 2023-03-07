import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; //quills css important
import { useNavigate } from "react-router-dom";
import "./Question.css";
import { TagsInput } from "react-tag-input-component";
import { useDispatch, useSelector } from "react-redux";
import Editor from "react-quill/lib/toolbar";
import { toast } from "react-toastify";
import { addQuestion } from "../../../helper/userQuestionHelper";
import { getUserDetails } from "../../../helper/UserProfileHelper";
import { setUserDetails } from "../../../redux/features/userSlice";

function Question() {
  const [loading, setLoading] = useState(false);
  const { userDetails } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const navigate = useNavigate();
  const { tokenData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const notify = () =>
    toast.success("Question added successfully!", {
      position: "top-right",
    });

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title == "" || body == "") {
      toast.error("question cant be null");
    } else {
      const bodyJSON = {
        title: title,
        body: body,
        tags: tag,
        user: userDetails,
      };

      await addQuestion(tokenData, bodyJSON);
      const user = await getUserDetails(tokenData);
      dispatch(setUserDetails(user.response));
      notify("question added successfully");
      navigate("/user/home");
    }
  };

  try {
    return (
      <div className="add-question">
        <div className="add-question-container">
          <div className="head-title">
            <h1>Ask a public question</h1>
          </div>
          <div className="question-container">
            <div className="question-options">
              <div className="question-option">
                <div className="title">
                  <h3>Title</h3>
                  <small>
                    Be specific and imagine your re asking a question to another
                    person
                  </small>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add the question title"
                  />
                </div>
              </div>

              <div className="question-option">
                <div className="title">
                  <h3>Body</h3>
                  <small>
                    include all the information someone would need to answer
                    your question
                  </small>
                  <ReactQuill
                    value={body}
                    onChange={handleQuill}
                    className="react-quill"
                    theme="snow"
                    type="text"
                  />
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Tags</h3>
                  <small>
                    Add upto 5 tags to describe what your question is about
                  </small>
                  <TagsInput
                    value={tag}
                    onChange={setTag}
                    name="fruits"
                    placeHolder="enter add new tag"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="button btn btn-primary"
          >
            Add question{" "}
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message);
  }
}

export default Question;
