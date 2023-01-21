import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import NextPage from "./pages/NextPage";

function App() {
  return (
    <div className="App">
      {/* <h1>This is NextPage</h1> */}
      <Routes>
        <Route path="/" element={<FirstPage />}/>
        <Route path="/next-page" element={<NextPage />}/>
          
      </Routes>
    </div>
  );
}

export default App;
