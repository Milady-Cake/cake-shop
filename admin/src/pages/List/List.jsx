


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const List = ({ url }) => {
//   const [list, setList] = useState([]);
//   const navigate = useNavigate();

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/cake/list`);
//       if (response.data.success) {
//         setList(response.data.data);
//       } else {
//         toast.error("Error fetching data");
//       }
//     } catch (error) {
//       toast.error("Error fetching data");
//     }
//   };

//   const removeCake = async (cakeId) => {
//     try {
//       const response = await axios.post(`${url}/api/cake/remove`, {
//         id: cakeId,
//       });
//       await fetchList();
//       if (response.data.success) {
//         toast.success(response.data.message);
//       } else {
//         toast.error("Error");
//       }
//     } catch (error) {
//       toast.error("Error removing cake");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);
//   const handleEditClick = (cake) => {
//     navigate("/add", { state: { cake } }); // Pass cake data to Add component
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <div className="flex flex-col p-4 bg-white shadow-md rounded-lg w-full">
//       <p className="text-lg font-semibold mb-4">All Cake List</p>
//       <div className="w-full">
//         <div className="grid grid-cols-[0.5fr_2fr_1fr_2fr_0.5fr] items-center gap-4 p-3 border-b font-bold bg-gray-100 text-sm hidden md:grid">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Prices</b>
//           <b>Action</b>
//         </div>

//         {list.map((item, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_2fr_0.5fr] items-center gap-4 p-3 border-b text-sm text-gray-700"
//           >
//             <img
//               className="w-12 h-12 object-cover rounded"
//               src={`${url}/images/` + item.images[0]}
//               alt={item.name}
//             />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <div>
//               {Object.entries(item.prices).map(([weight, price]) => (
//                 <p key={weight}>
//                   <b>{weight}:</b> ₹{price}
//                 </p>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => handleEditClick(item)}
//                 className="text-blue-500 cursor-pointer font-bold"
//               >
//                 Edit
//               </button>
//               <p
//                 onClick={() => removeCake(item._id)}
//                 className="text-red-500 cursor-pointer font-bold text-center"
//               >
//                 x
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/cake/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const removeCake = async (cakeId) => {
    try {
      const response = await axios.post(`${url}/api/cake/remove`, { id: cakeId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error("Error removing cake");
      }
    } catch (error) {
      toast.error("Error removing cake");
    }
  };

  const handleEditClick = (cake) => {
    navigate("/add", { state: { cake } }); // Pass cake data to Add component
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full">
    <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">All Cake List</h2>
    
    {/* Table Header */}
    <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_2fr_1fr] items-center gap-4 px-4 py-2 border-b font-semibold bg-gray-100 text-sm text-gray-700 text-center">
      <span>Image</span>
      <span>Name</span>
      <span>Category</span>
      <span>Prices</span>
      <span>Action</span>
    </div>
  
    {/* Table Data */}
    {list.length > 0 ? (
      list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_2fr_1fr] items-center gap-4 px-4 py-3 border-b text-gray-700 text-sm hover:bg-gray-50 transition-all text-center"
        >
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-12 h-12 object-cover rounded-lg border border-gray-300"
              src={`${url}/images/` + item.images[0]}
              alt={item.name}
            />
          </div>
  
          {/* Name */}
          <p className="font-medium">{item.name}</p>
  
          {/* Category */}
          <p className="text-gray-600">{item.category}</p>
  
          {/* Prices */}
          <div className="text-gray-600">
            {Object.entries(item.prices).map(([weight, price]) => (
              <p key={weight}>
                <span className="font-medium">{weight}:</span> ₹{price}
              </p>
            ))}
          </div>
  
          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleEditClick(item)}
              className="p-2 text-black transition-all"
              title="Edit"
            >
              <FaEdit className="h-4 w-4" />
            </button>
  
            <button
              onClick={() => removeCake(item._id)}
              className="p-2 text-red-700 transition-all"
              title="Delete"
            >
              <FaTrashAlt className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-center mt-4">No cakes available</p>
    )}
  </div>
  
  );
};

export default List;
