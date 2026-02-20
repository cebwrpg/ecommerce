import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>  {/*default route*/}
    <Route path ="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
);
