import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { env } from './config'
import { useNavigate } from 'react-router-dom';

const Createdata = () => {
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
      let user = await axios.post(`${env.api}/createdata`, values);
      alert("Data Created");
      navigate("/");
    },
  });
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
          placeholder="1234 Main St"
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

export default Createdata