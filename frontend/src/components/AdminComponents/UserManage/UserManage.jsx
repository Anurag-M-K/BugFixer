// export default UserManage;
import React, { useEffect } from "react";
import Navbar from "../AdminDashboard/Navbar";
import Sidebar from "../AdminDashboard/Sidebar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import scrollreveal from "scrollreveal";
import { useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { setUserDetails } from "../../../redux/features/userSlice";
import toast,{Toaster}  from 'react-hot-toast'
function AdminQuestion() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  console.log("jiobib", userDetails);
  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:80";
    const data = axios
      .get("/api/user-details")
      .then((response) => {
        setUsers(response.data);
        dispatch(setUserDetails(response.data));
        console.log("user details response ", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userBlock = async (id) => {
    try {
      axios.defaults.baseURL = "http://localhost:80";
      await axios.put("/admin/block-user/" + id).then((res) => {
        toast.error("User Blocked ")

        axios.get("/api/user-details").then((redds) => {

          dispatch(setUserDetails(redds.data));
        });
      });
    } catch (error) {
      console.log("error in catch ", error);
    }
  };



  const userUnBlock = async (id) => {
    try {
      axios.defaults.baseURL = "http://localhost:80";
      await axios.put("/admin/unblock-user/" + id).then((res) => {
        toast.success("User unblocked")
 axios.get('/api/user-details').then((response)=>{
  dispatch(setUserDetails(response.data))
 })
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Users Name",

      selector: (row) => row.firstName,
      sortable: true,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "Users email",
      selector: (row) => row.email,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "Users phone",
      selector: (row) => row.phone,
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "Users image",

      selector: (row) => (
        <img
          width={50}
          height={50}
          src={
            row.imageUrl
              ? row.imageUrl
              : "https://bootdey.com/img/Content/avatar/avatar7.png"
          }
          alt=""
        />
      ),
      style: {
        backgroundColor: "grey",
      },
    },
    {
      name: "Actions",
      selector: (row) => (
        <>
          {row?.isBlocked != true ? (
            <button
              className="btn btn-danger"
              onClick={() => userBlock(row._id)}
            >
              <RemoveCircleOutlineIcon />{" "}
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => userUnBlock(row._id)}
            >
              ok
            </button>
          )}
        </>
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
            data={userDetails}
            pagination
            title="Users Details"
            fixedHeader
            fixedHeaderScrollHeight="440px"
            highlightOnHover
          />
        </div>
      </Section>
      <Toaster/>
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
