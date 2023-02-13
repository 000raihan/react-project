import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import NextPage from "./pages/NextPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import {useEffect} from "react";

function App() {

    // useEffect( ()=>{
    //     const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    //     if(currentUser === null){
    //         window.location.replace("/");
    //     }
    // },[]);

  return (
    <div className="App">
      {/* <h1>This is NextPage</h1> */}
      <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/first-page" element={<FirstPage />}/>
        <Route path="/next-page" element={<NextPage />}/>
        {/* <Route path="/login" element={<LoginPage />}/> */}

      </Routes>
    </div>
  );
}

export default App;
