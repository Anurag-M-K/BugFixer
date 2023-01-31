import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../AdminDashboard/Navbar";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import scrollreveal from "scrollreveal";
import { useDispatch } from "react-redux";
import toast,{Toaster} from 'react-hot-toast'

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
        toast.success("Question deleted!!!")
try {
    console.log("before delete ",qid)
    axios.defaults.baseURL = "http://localhost:80";
    await axios.delete("/admin/question-delete/"+qid).then((res)=>{
        axios.get("/admin/get-report-questions").then((response)=>{
            dispatch(questionDetails(response))
        })
    })
} catch (error) {
    console.log(error)
}
    }




    // const data = response.data
    console.log("outside of the useeffect ", questions)
    console.log("outside of the useeffect ", questions._id)
    
    const columns = [
        {
      name: "Qusetion ID",
      selector: (row) => row._id,
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
          />
        </div>
        <Toaster/>
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
