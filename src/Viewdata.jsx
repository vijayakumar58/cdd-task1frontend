import React, { useEffect, useState } from 'react'
import { env } from './config'
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Viewdata = () => {
    const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [datas, setDatas] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    try {
      let database = await axios.get(`${env.api}/viewdata/${params.id}`);
      setDatas(database.data);
    } catch (error) {}
  };
  return (
    <div>
      <nav className="navbar d-flex justify-content-center" >
          <h3>View an Account</h3>
        </nav>
      <>
        <div
          className="card text-left text-opacity ml-4 mr-4"
          style={{ color: "black", fontSize: "40px" }}
        >
          <div className="card-header">User Id : {datas._id}</div>
          <div
            className="card-body ml-5 mr-5 bg-warning"
            style={{ fontSize: "20px" }}
          > 
            <h5 className="card-title">Name : {datas.name}</h5>
            <h5 className="card-title">Emailid : {datas.email}</h5>
            <h5 className="card-title">Position : {datas.password}</h5>
            <h5 className="card-title">Office : {datas.address}</h5>
          </div>
        </div>
      </>
    </div>
  )
}

export default Viewdata