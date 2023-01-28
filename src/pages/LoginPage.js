import React from 'react';
import { useNavigate  } from "react-router-dom";

const LoginPage = (props) => {
    const navigate = useNavigate();


    const onSubmit = ()=>{
        navigate("home")
        // props.history.push("first-page")
    }
  return (
    <div>
        <div style={{width:"100%", height:"100vh", padding:"1rem",display:"flex", alignItems:"center" }}>
            <div style={{}}>
            <form onSubmit={()=>onSubmit()}>

            <input placeholder='SEP id' style={{fontSize:"1.2rem", border:"1px solid #CACDD1",padding:".5rem 1rem", borderRadius:"5px"}}/>
            <input type="password" placeholder='password' style={{fontSize:"1.2rem",marginTop:"1rem", border:"1px solid #CACDD1",padding:".5rem 1rem", borderRadius:"5px"}}/>
            <input type="submit" placeholder='SEP id' style={{fontSize:"1.2rem",marginTop:"1rem", border:"1px solid #CACDD1",padding:".5rem 1rem",backgroundColor:"#007ACC",color:"white", borderRadius:"5px"}}/>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage