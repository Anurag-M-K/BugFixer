import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../AdminDashboard/Navbar";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import scrollreveal from "scrollreveal";
import { useDispatch } from "react-redux";
import toast,{Toaster} from 'react-hot-toast'
import './AdminQuestion.css'
import QuestionModal from './QusetionModal'

function AdminQuestion() {
    
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
      axios.defaults.baseURL = "http://localhost:80";
      axios.get("/admin/get-report-questions").then((response) => {
          setQuestions(response.data.data);
       
        });
    }, []);



    const questionDelete = async(qid)=>{
        // toast.success("Question deleted!!!")
try {
  swal({
    title: "Are you sure?",
    text: "are you sure you want to delete this question?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((deleteQuestion) => {
    if (deleteQuestion) {
      axios.defaults.baseURL = "http://localhost:80";
       axios.delete("/admin/question-delete/"+qid).then((res)=>{
          axios.get("/admin/get-report-questions").then((response)=>{
              dispatch(questionDetails(response))
          })
      })
      swal("Question deleted successfully !", {
        icon: "success",
      });
    } else {
      swal("Canceled");
    }
  });

} catch (error) {
    console.log(error)
}
    }

  
    const columns = [
        {
      name: "Qusetion ID",
      selector: (row) => <QuestionModal row={row._id}/>,
      srtable: true,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "User Name",
      selector: (row) => row.user.firstName,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name:"Vote",
      selector:(row)=>row.vote,
      style:{
        backgroundColor:"grey"
      }
    },
    {
      name: "Email",
      selector: (row) => row.user.email,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "Actions",
      selector: (row) => (
          <button className="btn btn-danger"
          onClick={()=>questionDelete(row._id)} >delete post</button>
          ),
          style: {
            backgroundColor: "grey",
          },
        },
    ];
    
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

return (
    <div className="body">
      <Section style={{ backGroundColor: "black" }}>
        <Navbar />
        <div className="grid">
          <div className="row__one"></div>
          <DataTable
            columns={columns}
            data={questions}
            pagination
            title="Question Handling "
            
            fixedHeader
            fixedHeaderScrollHeight="440px"
            highlightOnHover
            subHeaderComponent={<input type="text" placeholder="Search here" className=" text-danger w-25 form-control"/> 
        
          }
          subHeaderAlign="left"
          />
        </div>
        <Toaster/>
      </Section>
      <div className="secondDiv" >
        <h3></h3>
      </div>
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
.secondDiv{
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

export default AdminQuestion;
