import React, { useState } from "react";
import Info from "../Info/Info";
import "./Input.scss";

const Input = ({ onSubmit, info }) => {
  const [state, setState] = useState("");
  const onInputChange = event => {
    setState(event.target.value);
  };

  const onFormSubmit = event => {
    event.preventDefault();

    onSubmit(state);
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(../../images/pattern-bg.png",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="title">
        <h1>IP Adress Tracker </h1>
      </div>
      <div className="input">
        <form onSubmit={onFormSubmit}>
          <input
            type="input-text"
            value={state}
            onChange={onInputChange}
            placeholder="Enter Valid IP Adress"
          />
          <button type="submit"> > </button>
        </form>
      </div>
    </div>
  );
};

export default Input;
