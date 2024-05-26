import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import logo from "../assets/exiumps_logo.png";

const Success = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <img src={logo} width={140} />
        {/* <h1 style={{ color: "#3b3b3b" }}>C-19 SA</h1> */}
        <div
          className="col-12 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div style={{ fontSize: 18 }}>Thank you for submitting</div>

          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: 40, width: 300, height: 50 }}
            onClick={() => navigate("/video-record")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
