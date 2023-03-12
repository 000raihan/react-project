import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import logo from "../assets/exiumps_logo.png";

const Success = (props) => {
    const navigate = useNavigate();

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div style={{fontSize: 20, marginTop: 10,color: '#F46919'}}>Ardiance Detailing</div>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height: '70vh'}}>

                    <div style={{fontSize: 18}}>Upload Successfully</div>

                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{marginTop: 40,width: 300, height: 50}}
                        onClick={()=> navigate("/video-record")}
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Success;
