import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { env } from './config'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editdata = () => {
    const params = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      address: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") {
        errors.name = "Please enter email";
      }
      if (values.password === "") {
        errors.name = "Please enter password";
      }
      if (values.address === "") {
        errors.name = "Please enter address";
      }
      return errors;
    },
    onSubmit: async (values) => {
      let database = await axios.put(`${env.api}/editdata/${params.id}`, values);
      alert("Data Updated");
      navigate("/");
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    try {
      let data = await axios.get(`${env.api}/viewdata/${params.id}`);
      formik.setValues({
        email: data.data.email,
        password: data.data.password,
        address: data.data.address,
      });
    } catch (error) {}
  };
  return (
    <div className="container-xl">
      <form onSubmit={formik.handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
        <input className="btn btn-primary " type={"submit"} value="Submit" />
      </form>
    </div>
  )
}

export default Editdata