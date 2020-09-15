import axios from "./axios";
import React, { useState } from "react";
import "./AddUser.css";

const initialState = {
  name: "",
  imgUrl: "",
};

function AddUser() {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(values);
    setValues(initialState)
  };
  async function postData(data) {
    try {
      await axios.post("/tinder/cards", data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="adduser">
      <div className="adduser__container">
        <h1>Disclaimer: when i have time i shall style this page more</h1>
        <h2>I just wanted to know it works</h2>
        <form onSubmit={handleSubmit}>
          <h5>Name:</h5>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <h5>Picture:</h5>
          <input
            type="text"
            name="imgUrl"
            value={values.imgUrl}
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default AddUser;
