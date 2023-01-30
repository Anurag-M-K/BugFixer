import React from 'react'
import Navbar from '../AdminDashboard/Navbar'
import Sidebar from '../AdminDashboard/Sidebar'
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector } from 'react-redux';

function AdminQuestion() {


  const {questionDetails} = useSelector(state=> state.question)
  console.log("from adminquestion page ",questionDetails)
  
  return (
    <div>
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
              <tr>
                <th className="text-center" scope="row">
                  1
                </th>
                <td className="text-center" >
                 asdasd
                </td>
                <td className="text-center">asdad</td>
                <td className="text-center">csadasd</td>
                <td className="text-center">skldnmfosnmdf
                  
                </td>
                <td
                  className="text-center blockbtn"
                  style={{ cursor: "pointer", color: "red" }}
                >
                  
                    <button
                      className="btn btn-danger"
                      onClick={() => userBlock(value._id)}
                    >
                      <RemoveCircleOutlineIcon />
                    </button>
                  
                    <button
                      className="btn btn-success"
                      onClick={() => userUnBlock(value._id)}
                    >
                      unblock
                    </button>
                  
                </td>
              </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AdminQuestion