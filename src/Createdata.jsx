import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { env } from './config'
import { useNavigate } from 'react-router-dom';

const Createdata = () => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
      address: "",
    },
    validate: (values) => {
      let errors = {};
      if(values.name === ""){
        errors.name = "Please enter name";
      }
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
      let user = await axios.post(`${env.api}/createdata`, values);
      alert("Data Created");
      navigate("/");
    },
  });
  return (
    <div className="container-xl">
        <nav className="navbar d-flex justify-content-center" >
          <h3>Create an Account</h3>
        </nav>
    <form onSubmit={formik.handleSubmit}>
      <div class="form-row">
      <div class="form-group col-md-6">
      <label style={{ color: "black" }}>Name</label>
          <input
            type="name"
            class="form-control"
            id={`${formik.errors.name ? `input-error` :``}`}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.name}</span>
        </div>
        <div class="form-group col-md-6">
          <label style={{ color: "black" }}>Email</label>
          <input
            type="email"
            class="form-control"
            id={`${formik.errors.email ? `input-error` :``}`}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        </div>
        <div class="form-group col-md-6">
          <label style={{ color: "black" }}>Password</label>
          <input
            type="password"
            class="form-control"
            id={`${formik.errors.password ? `input-error` :``}`}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        </div>
      </div>
      <div class="form-group">
        <label style={{ color: "black" }}>Address</label>
        <input
          type="text"
          class="form-control"
          id={`${formik.errors.address ? `input-error` :``}`}
          placeholder="1234 Main St"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        <span style={{ color: "red" }}>{formik.errors.address}</span>
      </div>
      <input className="btn btn-primary " type={"submit"} value="Submit" />
    </form>
  </div>
  )
}

export default Createdata