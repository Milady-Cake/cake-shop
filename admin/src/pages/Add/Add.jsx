// import axios from "axios";
// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { assets } from '../../assets/assets';
// import { TextField, Select, MenuItem, FormControl, InputLabel, OutlinedInput, Checkbox, ListItemText, Button } from "@mui/material";
// import './Add.css';

// const Add = ({ url }) => {
//     const [images, setImages] = useState([]);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Freshcream Cake",
//         rating: 0,
//         weights: []
//     });

//     const weightsOptions = ["500g", "1kg", "1.5kg", "2kg", "3kg"];

//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;
//         setData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const onFileChange = (event) => {
//         const files = Array.from(event.target.files);
//         setImages(files);
//     };

//     const onWeightChange = (event) => {
//         setData((prevData) => ({ ...prevData, weights: event.target.value }));
//     };

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", data.name);
//         formData.append("description", data.description);
//         formData.append("price", Number(data.price));
//         formData.append("category", data.category);
//         formData.append("rating", Number(data.rating));
//         formData.append("weights", JSON.stringify(data.weights));

//         images.forEach((image) => {
//             formData.append("images", image);
//         });

//         try {
//             const response = await axios.post(`${url}/api/cake/add`, formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data"
//                 }
//             });

//             if (response.data.success) {
//                 setData({
//                     name: "",
//                     description: "",
//                     price: "",
//                     category: "Freshcream Cake",
//                     rating: 0,
//                     weights: []
//                 });
//                 setImages([]);
//                 toast.success(response.data.message);
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.error("Error uploading images:", error);
//             toast.error("Something went wrong!");
//         }
//     };

//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className="add-img-upload flex-col">
//                     <p>Upload Images</p>
//                     <label htmlFor="images">
//                         <div className="image-preview">
//                             {images.length > 0 ? (
//                                 images.map((image, index) => (
//                                     <img key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
//                                 ))
//                             ) : (
//                                 <img src={assets.upload_area} alt="Upload Area" />
//                             )}
//                         </div>
//                     </label>
//                     <input onChange={onFileChange} type="file" id="images" multiple hidden required />
//                 </div>

//                 <TextField label="Product Name" variant="outlined" name="name" value={data.name} onChange={onChangeHandler} fullWidth margin="normal" />
//                 <TextField label="Product Description" variant="outlined" name="description" value={data.description} onChange={onChangeHandler} fullWidth multiline rows={4} margin="normal" />

//                 <FormControl fullWidth margin="normal">
//                     <InputLabel>Product Category</InputLabel>
//                     <Select name="category" value={data.category} onChange={onChangeHandler} label="Product Category">
//                         <MenuItem value="Freshcream Cake">Freshcream Cake</MenuItem>
//                         <MenuItem value="Chocolate Cake">Chocolate Cake</MenuItem>
//                         <MenuItem value="Cup Cake">Cup Cake</MenuItem>
//                         <MenuItem value="Fondant Cake">Fondant Cake</MenuItem>
//                         <MenuItem value="Hampers">Hampers</MenuItem>
//                         <MenuItem value="Tier Cake">Tier Cake</MenuItem>
//                         <MenuItem value="Number Cake">Number Cake</MenuItem>
//                         <MenuItem value="Desserts">Desserts</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <TextField label="Product Price (₹)" type="number" variant="outlined" name="price" value={data.price} onChange={onChangeHandler} fullWidth margin="normal" />
//                 <TextField label="Rating" type="number" variant="outlined" name="rating" value={data.rating} onChange={onChangeHandler} fullWidth margin="normal" inputProps={{ min: 0, max: 5, step: 0.1 }} />

//                 <FormControl fullWidth margin="normal">
//                     <InputLabel>Available Weights</InputLabel>
//                     <Select multiple value={data.weights} onChange={onWeightChange} input={<OutlinedInput label="Available Weights" />} renderValue={(selected) => selected.join(", ")}>
//                         {weightsOptions.map((weight) => (
//                             <MenuItem key={weight} value={weight}>
//                                 <Checkbox checked={data.weights.includes(weight)} />
//                                 <ListItemText primary={weight} />
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>

//                 <Button type='submit' variant="contained" color="primary" fullWidth>ADD</Button>
//             </form>
//         </div>
//     );
// };

// export default Add;

// // import axios from "axios";
// // import React, { useState } from 'react';
// // import { toast } from 'react-toastify';
// // import { assets } from '../../assets/assets';
// // import { TextField, Select, MenuItem, FormControl, InputLabel, OutlinedInput, Checkbox, ListItemText, Button } from "@mui/material";
// // import './Add.css';

// // const Add = ({ url }) => {
// //     const [images, setImages] = useState([]);
// //     const [data, setData] = useState({
// //         name: "",
// //         description: "",
// //         price: "",
// //         category: "Freshcream Cake",
// //         rating: 0,
// //         weights: []
// //     });

// //     const [prices, setPrices] = useState({}); // Stores price per weight

// //     const weightsOptions = ["500g", "1kg", "1.5kg", "2kg", "3kg"];

// //     const onChangeHandler = (event) => {
// //         const { name, value } = event.target;
// //         setData((prevData) => ({ ...prevData, [name]: value }));
// //     };

// //     const onFileChange = (event) => {
// //         const files = Array.from(event.target.files);
// //         setImages(files);
// //     };

// //     const onWeightChange = (event) => {
// //         const selectedWeights = event.target.value;
// //         setData((prevData) => ({ ...prevData, weights: selectedWeights }));

// //         // Initialize prices for new selections if not already set
// //         setPrices((prevPrices) => {
// //             const updatedPrices = { ...prevPrices };
// //             selectedWeights.forEach(weight => {
// //                 if (!(weight in updatedPrices)) {
// //                     updatedPrices[weight] = "";
// //                 }
// //             });
// //             return updatedPrices;
// //         });
// //     };

// //     const onPriceChange = (event, weight) => {
// //         const { value } = event.target;
// //         setPrices((prevPrices) => ({
// //             ...prevPrices,
// //             [weight]: value
// //         }));
// //     };

// //     const onSubmitHandler = async (event) => {
// //         event.preventDefault();
// //         const formData = new FormData();
// //         formData.append("name", data.name);
// //         formData.append("description", data.description);
// //         formData.append("category", data.category);
// //         formData.append("rating", Number(data.rating));
// //         formData.append("weights", JSON.stringify(data.weights));
// //         formData.append("prices", JSON.stringify(prices)); // Send weight-based prices

// //         images.forEach((image) => {
// //             formData.append("images", image);
// //         });

// //         try {
// //             const response = await axios.post(`${url}/api/cake/add`, formData, {
// //                 headers: {
// //                     "Content-Type": "multipart/form-data"
// //                 }
// //             });

// //             if (response.data.success) {
// //                 setData({
// //                     name: "",
// //                     description: "",
// //                     price: "",
// //                     category: "Freshcream Cake",
// //                     rating: 0,
// //                     weights: []
// //                 });
// //                 setImages([]);
// //                 setPrices({});
// //                 toast.success(response.data.message);
// //             } else {
// //                 toast.error(response.data.message);
// //             }
// //         } catch (error) {
// //             console.error("Error uploading images:", error);
// //             toast.error("Something went wrong!");
// //         }
// //     };

// //     return (
// //         <div className='add'>
// //             <form className='flex-col' onSubmit={onSubmitHandler}>
// //                 <div className="add-img-upload flex-col">
// //                     <p>Upload Images</p>
// //                     <label htmlFor="images">
// //                         <div className="image-preview">
// //                             {images.length > 0 ? (
// //                                 images.map((image, index) => (
// //                                     <img key={index} src={URL.createObjectURL(image)} alt={`preview-${index}`} />
// //                                 ))
// //                             ) : (
// //                                 <img src={assets.upload_area} alt="Upload Area" />
// //                             )}
// //                         </div>
// //                     </label>
// //                     <input onChange={onFileChange} type="file" id="images" multiple hidden required />
// //                 </div>

// //                 <TextField label="Product Name" variant="outlined" name="name" value={data.name} onChange={onChangeHandler} fullWidth margin="normal" />
// //                 <TextField label="Product Description" variant="outlined" name="description" value={data.description} onChange={onChangeHandler} fullWidth multiline rows={4} margin="normal" />

// //                 <FormControl fullWidth margin="normal">
// //                     <InputLabel>Product Category</InputLabel>
// //                     <Select name="category" value={data.category} onChange={onChangeHandler} label="Product Category">
// //                         <MenuItem value="Freshcream Cake">Freshcream Cake</MenuItem>
// //                         <MenuItem value="Chocolate Cake">Chocolate Cake</MenuItem>
// //                         <MenuItem value="Cup Cake">Cup Cake</MenuItem>
// //                         <MenuItem value="Fondant Cake">Fondant Cake</MenuItem>
// //                         <MenuItem value="Hampers">Hampers</MenuItem>
// //                         <MenuItem value="Tier Cake">Tier Cake</MenuItem>
// //                         <MenuItem value="Number Cake">Number Cake</MenuItem>
// //                         <MenuItem value="Desserts">Desserts</MenuItem>
// //                     </Select>
// //                 </FormControl>

// //                 <TextField label="Rating" type="number" variant="outlined" name="rating" value={data.rating} onChange={onChangeHandler} fullWidth margin="normal" inputProps={{ min: 0, max: 5, step: 0.1 }} />

// //                 <FormControl fullWidth margin="normal">
// //                     <InputLabel>Available Weights</InputLabel>
// //                     <Select multiple value={data.weights} onChange={onWeightChange} input={<OutlinedInput label="Available Weights" />} renderValue={(selected) => selected.join(", ")}>
// //                         {weightsOptions.map((weight) => (
// //                             <MenuItem key={weight} value={weight}>
// //                                 <Checkbox checked={data.weights.includes(weight)} />
// //                                 <ListItemText primary={weight} />
// //                             </MenuItem>
// //                         ))}
// //                     </Select>
// //                 </FormControl>

// //                 {data.weights.map((weight) => (
// //                     <TextField
// //                         key={weight}
// //                         label={`Price for ${weight} (₹)`}
// //                         type="number"
// //                         variant="outlined"
// //                         value={prices[weight] || ""}
// //                         onChange={(e) => onPriceChange(e, weight)}
// //                         fullWidth
// //                         margin="normal"
// //                         required
// //                     />
// //                 ))}

// //                 <Button type='submit' variant="contained" color="primary" fullWidth>ADD</Button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default Add;

// correctcode

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Cancel } from "@mui/icons-material";
// import {
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   Checkbox,
//   ListItemText,
//   Button,
//   IconButton,
// } from "@mui/material";

// const Add = ({ url }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const cakeToEdit = location.state?.cake || null;

//   const [images, setImages] = useState([]);
//   const [removedImages, setRemovedImages] = useState([]);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     category: "Freshcream Cake",
//     rating: 0,
//     weights: [],
//   });

//   const [prices, setPrices] = useState({});

//   useEffect(() => {
//     if (cakeToEdit) {
//       setData({
//         name: cakeToEdit.name,
//         description: cakeToEdit.description,
//         category: cakeToEdit.category,
//         rating: cakeToEdit.rating,
//         weights: cakeToEdit.weights,
//       });
//       setPrices(cakeToEdit.prices);
//       setImages(cakeToEdit.images);
//     }
//   }, [cakeToEdit]);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const newImages = files.map((file) => ({
//       file,
//       url: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//   };

//   const handleRemoveImage = (index) => {
//     const imageToRemove = images[index];

//     if (typeof imageToRemove === "string") {
//       setRemovedImages([...removedImages, imageToRemove]);
//     }

//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();

//     if (cakeToEdit) {
//       formData.append("id", cakeToEdit._id);
//     }

//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("category", data.category);
//     formData.append("rating", Number(data.rating));
//     formData.append("weights", JSON.stringify(data.weights));
//     formData.append("prices", JSON.stringify(prices));
//     formData.append("removedImages", JSON.stringify(removedImages));

//     images.forEach((image) => {
//       if (typeof image !== "string") {
//         formData.append("images", image.file);
//       }
//     });

//     try {
//       const response = await axios.post(
//         `${url}/api/cake/${cakeToEdit ? "update" : "add"}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       if (response.data.success) {
//         toast.success(
//           cakeToEdit ? "Cake Updated Successfully" : "Cake Added Successfully"
//         );
//         navigate("/list");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="w-full h-screen  p-6  px-44 ">
//       <div className="w-full lg:w-2/2  bg-white p-6 overflow-y-auto">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//           {cakeToEdit ? "Edit Cake" : "Add Cake"}
//         </h2>

//         <div className=" w-3/3 flex flex-col px-20   ">
//           <form className="flex flex-col px-20  gap-6" onSubmit={handleSubmit}>
//             {/* Product Name */}
//             <TextField
//               label="Product Name"
//               variant="outlined"
//               name="name"
//               value={data.name}
//               onChange={handleChange}
//               fullWidth
//               required
//             />

//             {/* Product Description */}
//             <TextField
//               label="Product Description"
//               variant="outlined"
//               name="description"
//               value={data.description}
//               onChange={handleChange}
//               fullWidth
//               multiline
//               rows={4}
//               required
//             />

//             {/* Image Upload */}
//             <div className="flex flex-col px-8  gap-4 p-4 w-full">
//       <p className="font-semibold text-gray-700 text-lg">Upload Images</p>
//       <label
//         htmlFor="image-upload"
//         className="cursor-pointer border w-48 p-2 rounded-md bg-blue-100 hover:bg-blue-200 text-center font-medium transition-all"
//       >
//         Click to Upload
//       </label>
//       <input
//         type="file"
//         id="image-upload"
//         multiple
//         onChange={handleImageUpload}
//         hidden
//       />

//       {/* Image Preview Grid */}
//       {images.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-2 sm:px-4 md:px-6 w-full">
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full aspect-square">
//               <IconButton
//                 className="absolute top-2 right-2 bg-white/70 hover:bg-red-500 transition-all p-1 rounded-full"
//                 onClick={() => handleRemoveImage(index)}
//                 size="small"
//               >
//                 <Cancel className="text-red-500 hover:text-white" />
//               </IconButton>
//               <img
//                 src={typeof image === "string" ? `${url}/images/${image}` : image.url}
//                 alt="preview"
//                 className="w-full h-full object-cover rounded-lg border"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>

//             {/* Product Category */}
//             <FormControl fullWidth>
//               <InputLabel>Product Category</InputLabel>
//               <Select
//                 name="category"
//                 value={data.category}
//                 onChange={handleChange}
//                 label="Product Category"
//               >
//                 {[
//                   "Freshcream Cake",
//                   "Chocolate Cake",
//                   "Cup Cake",
//                   "Fondant Cake",
//                   "Hampers",
//                   "Tier Cake",
//                   "Number Cake",
//                   "Desserts",
//                 ].map((category) => (
//                   <MenuItem key={category} value={category}>
//                     {category}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Rating */}
//             <TextField
//               label="Rating"
//               type="number"
//               variant="outlined"
//               name="rating"
//               value={data.rating}
//               onChange={handleChange}
//               fullWidth
//               inputProps={{ min: 0, max: 5, step: 0.1 }}
//             />

//             {/* Available Weights Selection */}
//             <FormControl fullWidth>
//               <InputLabel>Available Weights</InputLabel>
//               <Select
//                 multiple
//                 value={data.weights}
//                 onChange={(e) => setData({ ...data, weights: e.target.value })}
//                 input={<OutlinedInput label="Available Weights" />}
//                 renderValue={(selected) => selected.join(", ")}
//               >
//                 {["0.5kg", "1kg", "2kg", "3kg"].map((weight) => (
//                   <MenuItem key={weight} value={weight}>
//                     <Checkbox checked={data.weights.includes(weight)} />
//                     <ListItemText primary={weight} />
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* Dynamic Price Inputs */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {data.weights.map((weight) => (
//                 <TextField
//                   key={weight}
//                   label={`Price for ${weight} (₹)`}
//                   type="number"
//                   variant="outlined"
//                   value={prices[weight] || ""}
//                   onChange={(e) =>
//                     setPrices({ ...prices, [weight]: e.target.value })
//                   }
//                   fullWidth
//                   required
//                 />
//               ))}
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               className="w-full py-3 font-semibold bg-blue-600 hover:bg-blue-700 transition-all mt-6"
//             >
//               {cakeToEdit ? "Update Cake" : "Add Cake"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Cancel } from "@mui/icons-material";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Button,
  IconButton,
} from "@mui/material";

const Add = ({ url }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cakeToEdit = location.state?.cake || null;

  const [images, setImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Freshcream Cake",
    rating: 0,
    weights: [],
  });

  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (cakeToEdit) {
      setData({
        name: cakeToEdit.name,
        description: cakeToEdit.description,
        category: cakeToEdit.category,
        rating: cakeToEdit.rating,
        weights: cakeToEdit.weights,
      });
      setPrices(cakeToEdit.prices);
      setImages(cakeToEdit.images);
    }
  }, [cakeToEdit]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const imageToRemove = images[index];

    if (typeof imageToRemove === "string") {
      setRemovedImages([...removedImages, imageToRemove]);
    }

    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    if (cakeToEdit) {
      formData.append("id", cakeToEdit._id);
    }

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("rating", Number(data.rating));
    formData.append("weights", JSON.stringify(data.weights));
    formData.append("prices", JSON.stringify(prices));
    formData.append("removedImages", JSON.stringify(removedImages));

    images.forEach((image) => {
      if (typeof image !== "string") {
        formData.append("images", image.file);
      }
    });

    try {
      const response = await axios.post(
        `${url}/api/cake/${cakeToEdit ? "update" : "add"}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success(
          cakeToEdit ? "Cake Updated Successfully" : "Cake Added Successfully"
        );
        navigate("/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-evenly p-4 sm:p-6 lg:p-8 px-4 sm:px-10 lg:px-20">
    <div className="w-full max-w-7xl  p-6 mx-auto  rounded-lg  overflow-hidden">
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl  font-bold text-center mb-6 text-gray-800">
          {cakeToEdit ? "Edit Cake" : "Add Cake"}
        </h2>
  
        <div className="w-full">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Product Name */}
            <TextField
              label="Product Name"
              variant="outlined"
              name="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
              required
            />
  
            {/* Product Description */}
            <TextField
              label="Product Description"
              variant="outlined"
              name="description"
              value={data.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />
  
            {/* Image Upload */}
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-gray-700 text-lg">Upload Images</p>
              <label
                htmlFor="image-upload"
                className="cursor-pointer border w-full sm:w-48 p-2 rounded-md bg-blue-100 hover:bg-blue-200 text-center font-medium transition-all"
              >
                Click to Upload
              </label>
              <input
                type="file"
                id="image-upload"
                multiple
                onChange={handleImageUpload}
                hidden
              />
  
              {/* Image Preview Grid */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative w-full aspect-square">
                      <IconButton
                        className="absolute top-2 right-2 bg-white/70 hover:bg-red-500 transition-all p-1 rounded-full"
                        onClick={() => handleRemoveImage(index)}
                        size="small"
                      >
                        <Cancel className="text-red-500 hover:text-white" />
                      </IconButton>
                      <img
                        src={typeof image === "string" ? `${url}/images/${image}` : image.url}
                        alt="preview"
                        className="w-full h-full object-cover rounded-lg border"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
  
            {/* Product Category */}
            <FormControl fullWidth>
              <InputLabel>Product Category</InputLabel>
              <Select
                name="category"
                value={data.category}
                onChange={handleChange}
                label="Product Category"
              >
                {[
                  "Freshcream Cake",
                  "Chocolate Cake",
                  "Cup Cake",
                  "Fondant Cake",
                  "Hampers",
                  "Tier Cake",
                  "Number Cake",
                  "Desserts",
                ].map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            {/* Rating */}
            <TextField
              label="Rating"
              type="number"
              variant="outlined"
              name="rating"
              value={data.rating}
              onChange={handleChange}
              fullWidth
              inputProps={{ min: 0, max: 5, step: 0.1 }}
            />
  
            {/* Available Weights Selection */}
            <FormControl fullWidth>
              <InputLabel>Available Weights</InputLabel>
              <Select
                multiple
                value={data.weights}
                onChange={(e) => setData({ ...data, weights: e.target.value })}
                input={<OutlinedInput label="Available Weights" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {["0.5kg", "1kg", "2kg", "3kg"].map((weight) => (
                  <MenuItem key={weight} value={weight}>
                    <Checkbox checked={data.weights.includes(weight)} />
                    <ListItemText primary={weight} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
  
            {/* Dynamic Price Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.weights.map((weight) => (
                <TextField
                  key={weight}
                  label={`Price for ${weight} (₹)`}
                  type="number"
                  variant="outlined"
                  value={prices[weight] || ""}
                  onChange={(e) =>
                    setPrices({ ...prices, [weight]: e.target.value })
                  }
                  fullWidth
                  required
                />
              ))}
            </div>
  
            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full py-3 font-semibold bg-blue-600 hover:bg-blue-700 transition-all mt-6"
            >
              {cakeToEdit ? "Update Cake" : "Add Cake"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Add;
