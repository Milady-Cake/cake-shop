// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
// import Add from './pages/Add/Add'
// import List from './pages/List/List'
// import Orders from './pages/Orders/Orders'

// // testing

// const App = () => {

//   const url="http://localhost:4000"

//   return (
//     <div>
//       <ToastContainer/>
//       <Navbar/>
//       <hr />

//       <div className="w-full flex justify-between">

//         <Sidebar/>
//         <Routes>
//           <Route path="/add" element={<Add url={url}/>} />
//           <Route path="/list" element={<List url={url}/>} />
//           <Route path="/orders" element={<Orders url={url}/>} />

//         </Routes>
//       </div>

//     </div>
//   )
// }

// export default App

import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";

const App = () => {
  const url = "https://cake-shop-backend-qfhf.onrender.com";

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50">
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex w-full p-6 bg-white shadow-md rounded-md overflow-auto">
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
