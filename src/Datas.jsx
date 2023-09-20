import axios from "axios";
import { env } from "./config";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faEye,faPenSquare,faTrashAlt,} from "@fortawesome/free-solid-svg-icons";

const Datas = () => {
  const [datas, setDatas] = useState([]);
  const [isLoadind, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);
  let loadData = async () => {
    setLoading(true);
    let datas = await axios.get(`${env.api}/getdatas`);
    setDatas(datas.data);
    setLoading(false);
  };

  let dataDelete = async (id) => {
    try {
      let ask = window.confirm("Are you sure ! Do you want Delete this Data ?");
      if (ask) {
        await axios.delete(`${env.api}/deletedata/${id}`);
      }
      loadData();
    } catch (error) {}
  };
  return (
    <div className="container-xl">
      <div>
        <nav className="navbar bg-primary" id="title" data-bs-theme="dark">
          <h1>Welcome To CDD CRUD Application</h1>
        </nav>
        <nav className="navbar d-flex justify-content-end" >
          <Link to={`/createdata`} className="btn btn-sm btn-primary mr-2">
            Create Data
          </Link>
        </nav>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email-Id</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.address}</td>
                <td>
                  <Link
                    to={`/viewdata/${data._id}`}
                    className="btn btn-sm btn-warning mr-2"
                  >
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  </Link>
                  <Link
                    to={`/editdata/${data._id}`}
                    className="btn btn-sm btn-primary mr-2"
                  >
                    <FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon>
                  </Link>
                  <button
                    onClick={() => {
                      dataDelete(data._id);
                    }}
                    className="btn btn-sm btn-danger mr-2"
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Datas;
