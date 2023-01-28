import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";

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
            <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>
              <button
                  type="button"
                  className="btn btn-primary"
                  style={{marginTop: 20,width: 200}}
                  onClick={()=> navigate("/first-page")}
              >
                For Doctor
              </button>

              <button
                  type="button"
                  className="btn btn-primary"
                  style={{marginTop: 20,width: 200}}
                  onClick={()=> navigate("/next-page")}
              >
                For MIO
              </button>
            </div>
          </div>
        </div>

  );
};

export default Home;
