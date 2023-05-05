import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import logo from "../assets/exiumps_logo.png";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect( ()=>{
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if(currentUser === null){
          window.location.replace("/");
      }

      const u = localStorage.getItem("upload")
      localStorage.removeItem("upload");
      if(u === "success"){
          swal({
              title: "Upload Successfully",
              icon: "success",
              button: "Close!",
          });
      }



  },[]);

  return (
        <div className='container-fluid'>
          <div className='row'>
              <img src={logo} width={140} />
              <h1 style={{color:"#3b3b3b"}}>Digital Amnesia SA</h1>
            <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height: '70vh'}}>
              <button
                  type="button"
                  className="btn btn-primary"
                  style={{marginTop: 20,width: 300, height: 50}}
                  onClick={()=> navigate("/first-page")}
              >
                  D-Sales Aid
              </button>

              <button
                  type="button"
                  className="btn btn-primary"
                  style={{marginTop: 40,width: 300, height: 50}}
                  onClick={()=> navigate("/ardiance")}
              >
                For MIO
              </button>
            </div>
          </div>
            <div className='row'>
                <div>
                    <img src={logo} />
                </div>

            </div>
        </div>

  );
};

export default Home;
