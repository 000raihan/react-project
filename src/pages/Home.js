import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{padding:"1rem"}}>
      <div className="row gap-2">
        <div className="col-sm-6">
        <Link style={{textDecoration:"none"}} to="/first-page">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize:"1.3rem"}}>For Doctor</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-sm-6">
            <Link style={{textDecoration:"none"}} to="/next-page">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize:"1.3rem"}}>For MIO</h5>
            
            </div>
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
