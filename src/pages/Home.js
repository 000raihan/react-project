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
              <div style={{fontSize: 20, marginTop: 10,color: '#F46919'}}>Ardiance Detailing</div>
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
