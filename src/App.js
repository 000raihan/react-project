import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import NextPage from "./pages/NextPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <h1>This is NextPage</h1> */}
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/first-page" element={<FirstPage />}/>
        <Route path="/next-page" element={<NextPage />}/>
        {/* <Route path="/login" element={<LoginPage />}/> */}
          
      </Routes>
    </div>
  );
}

export default App;
