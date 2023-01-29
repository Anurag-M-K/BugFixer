import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../AdminDashboard/Navbar";
import Sidebar from "../AdminDashboard/Sidebar";
import "./userManage.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../redux/features/userSlice";
function UserManage() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()

  
  useEffect(() => {
    console.log("async  ");
    axios.defaults.baseURL = "http://localhost:80";
    const data = axios
      .get("/api/user-details")
      .then((response) => {
        setUsers(response.data);
        console.log("user details response ", response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let value = users;

  const userBlock = async (id) => {
    try {
      axios.defaults.baseURL = "http://localhost:80";
      await axios.put("/admin/block-user/" + id).then((res) => {
      dispatch(setUserDetails(res))
        console.log("res ", res);
      });
    } catch (error) {
      console.log("error in catch ", error);
    }
  };

  const userUnBlock = async (id) => {
    try {
      axios.defaults.baseURL = "http://localhost:80";
      await axios.put("/admin/unblock-user/" + id).then((res) => {
       
        console.log("before dispatch")
        dispatch(setUserDetails(res))
        console.log("unblock ", res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container col-lg-8 userManage mt-5  ">
        <table className="table table-striped-columns mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {value.map((value) => (
              <tr>
                <th className="text-center" scope="row">
                  1
                </th>
                <td className="text-center" key={value.phone}>
                  {value.firstName}
                </td>
                <td className="text-center">{value.email}</td>
                <td className="text-center">{value.phone}</td>
                <td className="text-center">
                  <img
                    src={
                      value.imageUrl
                        ? value.imageUrl
                        : "https://bootdey.com/img/Content/avatar/avatar7.png"
                    }
                    width="50px"
                    height="50px"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </td>
                <td
                  className="text-center blockbtn"
                  style={{ cursor: "pointer", color: "red" }}
                >
                  {value?.isBlocked != true ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => userBlock(value._id)}
                    >
                      <RemoveCircleOutlineIcon />
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => userUnBlock(value._id)}
                    >
                      unblock
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserManage;
