import React, {useState} from 'react';
import { useNavigate  } from "react-router-dom";
import swal from "sweetalert";
import {CallApi} from "../api/Api";

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [sapID, setSapID] = useState(null);

    const onSubmit = async ()=>{
        if(sapID === null){
            swal({
                title: "Please enter your sap id",
                icon: "warning",
                button: "Close!",
            });
        }else{
            await getList();
        }
    };


    const getList = async () => {
        CallApi.fetchUserInfo(sapID).then((result) => {
                if(result.success){
                    // console.log("Fetch List",result.result);
                    localStorage.setItem('currentUser', JSON.stringify(result.result));
                    navigate("home")
                }else{
                    swal({
                        title: result.message,
                        icon: "warning",
                        button: "Close!",
                    });
                    console.log("error", result.error);
                }
            },(error) => {
                alert("Invalid data.");
            }
        );
    };

  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{height: '100vh'}}>

                    <input
                        placeholder='SAP ID'
                        style={{fontSize:"1.2rem", border:"1px solid #CACDD1",padding:".5rem 1rem", borderRadius:"5px"}}
                        onChange={(e)=> setSapID(e.target.value)}
                    />

                    <button
                        type="button"
                        className="btn btn-primary"
                        style={{marginTop: 20,width: 100}}
                        onClick={()=> onSubmit()}
                    >
                        Login
                    </button>

                </div>
            </div>
        </div>
    </>
  )
};

export default LoginPage
