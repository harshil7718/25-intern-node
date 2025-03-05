import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "admin-lte/dist/css/adminlte.css";
import "admin-lte/dist/css/adminlte.min.css";

import UserSidebar from "./components/layouts/UserSidebar.jsx";
import Navbar from "./components/layouts/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./components/common/Login.jsx";
import Signup from "./components/common/Signup.jsx";
// import Deshboard1 from "./components/deshboards/Deshboard1.jsx";
import axios from "axios";
import Home from "./components/common/Home.jsx";
import ProductForm from "./components/common/AddProduct.jsx";
import AddProduct from "./components/common/AddProduct.jsx";
// import AddItem from "./components/layouts/AddItem.jsx";


function App() {

  axios.defaults.baseURL="http://localhost:7777"
  return (
      
    // <body className="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
    //   {/* <Navbar></Navbar>
    //     <UserSidebar></UserSidebar> */}

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/nav" element={<Navbar />}></Route>
        <Route path="/user" element={<UserSidebar />}>
        </Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        {/* <Route path='/item' element={<AddItem/>}></Route> */}
        {/* <Route path="/deshboard" element={<Deshboard1 />}></Route> */}
      </Routes>
    // </body>
  );
}

export default App;
