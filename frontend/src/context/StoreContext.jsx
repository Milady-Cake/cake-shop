




// // // udated code 

// // import axios from "axios";
// // import { createContext, useEffect, useState } from "react";
// // import React from "react";

// // export const StoreContext = createContext(null);

// // const StoreContextProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState(() => {
// //     const savedCartItems = localStorage.getItem("cartItems");
// //     return savedCartItems ? JSON.parse(savedCartItems) : {};
// //   });
// //   const [cake_list, setCakeList] = useState([]);
// //   const [token, setToken] = useState(localStorage.getItem("token") || "");
// //   const url = "http://localhost:4000/";

// //   useEffect(() => {
// //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
// //   }, [cartItems]);

// //   const addToCart = async (itemId, weight, quantity = 1) => {
// //     const key = `${itemId}-${weight}`;

// //     setCartItems((prev) => ({
// //       ...prev,
// //       [key]: (prev[key] || 0) + quantity,
// //     }));

// //     if (token) {
// //       try {
// //         await axios.post(
// //           url + "api/cart/add",
// //           { itemId, weight, quantity },
// //           { headers: { token } }
// //         );
// //       } catch (error) {
// //         console.error("Error adding to cart:", error);
// //         setCartItems((prev) => {
// //           const updatedCart = { ...prev };
// //           if (updatedCart[key] === quantity) {
// //             delete updatedCart[key];
// //           } else {
// //             updatedCart[key] -= quantity;
// //           }
// //           return updatedCart;
// //         });
// //       }
// //     }
// //   };

// //   const removeFromCart = async (itemId, weight) => {
// //     const key = `${itemId}-${weight}`;

// //     setCartItems((prev) => {
// //       const updatedCart = { ...prev };
// //       if (updatedCart[key] > 1) {
// //         updatedCart[key] -= 1;
// //       } else {
// //         delete updatedCart[key];
// //       }
// //       return updatedCart;
// //     });

// //     if (token) {
// //       try {
// //         await axios.post(
// //           url + "api/cart/remove",
// //           { itemId, weight },
// //           { headers: { token } }
// //         );
// //       } catch (error) {
// //         console.error("Error removing from cart:", error);
// //         setCartItems((prev) => ({
// //           ...prev,
// //           [key]: (prev[key] || 0) + 1,
// //         }));
// //       }
// //     }
// //   };

// //   const removeProductFromCart = async (itemId, weight) => {
// //     const key = `${itemId}-${weight}`;

// //     setCartItems((prev) => {
// //       const updatedCart = { ...prev };
// //       delete updatedCart[key];
// //       return updatedCart;
// //     });

// //     if (token) {
// //       try {
// //         await axios.post(
// //           url + "api/cart/remove-full",
// //           { itemId, weight },
// //           { headers: { token } }
// //         );
// //       } catch (error) {
// //         console.error("Error removing product from cart:", error);
// //         setCartItems((prev) => ({
// //           ...prev,
// //           [key]: 1,
// //         }));
// //       }
// //     }
// //   };

// //   const getTotalCartAmount = () => {
// //     return Object.entries(cartItems).reduce((total, [key, quantity]) => {
// //       const [itemId, weight] = key.split("-");
// //       const item = cake_list.find((cake) => cake._id === itemId);
// //       return item ? total + (item.prices[weight] || 0) * quantity : total;
// //     }, 0);
// //   };

// //   const fetchCakeList = async () => {
// //     try {
// //       const response = await axios.get(url + "api/cake/list");
// //       setCakeList(response.data.data);
// //     } catch (error) {
// //       console.error("Error fetching cake list:", error);
// //     }
// //   };

// //   const loadCartData = async () => {
// //     if (!token) return;
// //     try {
// //       const response = await axios.post(
// //         url + "api/cart/get",
// //         {},
// //         { headers: { token } }
// //       );
  
// //       console.log("Cart Data from API:", response.data);
  
// //       const transformedCartData = {};
// //       for (const [key, value] of Object.entries(response.data.cartData || {})) {
// //         transformedCartData[key.replace("_", "-")] = value;
// //       }
  
// //       setCartItems(transformedCartData);
// //     } catch (error) {
// //       console.error("Error loading cart data:", error);
// //     }
// //   };
  

// //   useEffect(() => {
// //     fetchCakeList();
// //     if (token) loadCartData();
// //   }, [token]);

// //   return (
// //     <StoreContext.Provider
// //       value={{
// //         cake_list,
// //         cartItems,
// //         addToCart,
// //         removeFromCart,
// //         removeProductFromCart,
// //         getTotalCartAmount,
// //         url,
// //         token,
// //         setToken,
// //       }}
// //     >
// //       {children}
// //     </StoreContext.Provider>
// //   );
// // };

// // export default StoreContextProvider;




// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import React from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState(() => {
//         const savedCartItems = localStorage.getItem("cartItems");
//         return savedCartItems ? JSON.parse(savedCartItems) : {};
//     });

//     const [cake_list, setCakeList] = useState([]);
//     const [token, setToken] = useState(localStorage.getItem("token") || "");
//     const url = "http://localhost:4000/";

//     // ✅ Keep cart items in local storage
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [cartItems]);

//     // ✅ Keep token in local storage
//     useEffect(() => {
//         if (token) {
//             localStorage.setItem("token", token);
//         } else {
//             localStorage.removeItem("token");
//         }
//     }, [token]);

//     // ✅ Add item to cart
//     const addToCart = async (itemId, weight, quantity = 1) => {
//         const key = `${itemId}-${weight}`;
//         setCartItems((prev) => ({ ...prev, [key]: (prev[key] || 0) + quantity }));

//         if (token) {
//             try {
//                 await axios.post(
//                     url + "api/cart/add",
//                     { itemId, weight, quantity },
//                     { headers: { Authorization: `Bearer ${token}` } }
//                 );
//             } catch (error) {
//                 console.error("Error adding to cart:", error);
//             }
//         }
//     };

//     // ✅ Remove a single item from cart
//     const removeFromCart = async (itemId, weight) => {
//         const key = `${itemId}-${weight}`;
//         setCartItems((prev) => {
//             const updatedCart = { ...prev };
//             if (updatedCart[key] > 1) {
//                 updatedCart[key] -= 1;
//             } else {
//                 delete updatedCart[key];
//             }
//             return updatedCart;
//         });

//         if (token) {
//             try {
//                 await axios.post(
//                     url + "api/cart/remove",
//                     { itemId, weight },
//                     { headers: { Authorization: `Bearer ${token}` } }
//                 );
//             } catch (error) {
//                 console.error("Error removing from cart:", error);
//             }
//         }
//     };

//     // ✅ Remove a product completely from cart
//     const removeProductFromCart = async (itemId, weight) => {
//         const key = `${itemId}-${weight}`;
//         setCartItems((prev) => {
//             const updatedCart = { ...prev };
//             delete updatedCart[key];
//             return updatedCart;
//         });

//         if (token) {
//             try {
//                 await axios.post(
//                     url + "api/cart/remove-full",
//                     { itemId, weight },
//                     { headers: { Authorization: `Bearer ${token}` } }
//                 );
//             } catch (error) {
//                 console.error("Error removing product from cart:", error);
//             }
//         }
//     };

//     // ✅ Calculate total cart amount
//     const getTotalCartAmount = () => {
//         return Object.entries(cartItems).reduce((total, [key, quantity]) => {
//             const [itemId, weight] = key.split("-");
//             const item = cake_list.find((cake) => cake._id === itemId);
//             return item ? total + (item.prices[weight] || 0) * quantity : total;
//         }, 0);
//     };

//     // ✅ Fetch all cake products
//     const fetchCakeList = async () => {
//         try {
//             const response = await axios.get(url + "api/cake/list");
//             setCakeList(response.data.data);
//         } catch (error) {
//             console.error("Error fetching cake list:", error);
//         }
//     };

//     // ✅ Load cart data from API when token is available
//     const loadCartData = async () => {
//         if (!token) return;

//         try {
//             const response = await axios.post(
//                 url + "api/cart/get",
//                 {},
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             console.log("Cart Data from API:", response.data);

//             const transformedCartData = {};
//             for (const [key, value] of Object.entries(response.data.cartData || {})) {
//                 transformedCartData[key.replace("_", "-")] = value;
//             }

//             setCartItems(transformedCartData);
//         } catch (error) {
//             console.error("Error loading cart data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchCakeList();
//         if (token) loadCartData();
//     }, [token]);

//     return (
//         <StoreContext.Provider
//             value={{
//                 cake_list,
//                 cartItems,
//                 addToCart,
//                 removeFromCart,
//                 removeProductFromCart,
//                 getTotalCartAmount,
//                 url,
//                 token,
//                 setToken,
//             }}
//         >
//             {children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;




import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const url = "https://cake-shop-backend-qfhf.onrender.com";
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });
    const [cake_list, setCakeList] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    // ✅ Keep cart items in local storage on update
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // ✅ Keep token in local storage
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
            setCartItems({}); // Clear cart when logging out
        }
    }, [token]);

    // ✅ Fetch Cake List
    const fetchCakeList = async () => {
        try {
            const response = await axios.get(url + "/api/cake/list");
            setCakeList(response.data.data);
        } catch (error) {
            console.error("Error fetching cake list:", error);
        }
    };

    // ✅ Load Cart Data from API
    const loadCartData = async () => {
        if (!token) return;

        try {
            const response = await axios.post(
                url + "api/cart/get",
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            console.log("Cart Data from API:", response.data);

            // Transform cart structure
            const transformedCart = {};
            for (const [key, value] of Object.entries(response.data.cartData || {})) {
                transformedCart[key.replace("_", "-")] = value;
            }

            // Merge API cart with local storage cart
            setCartItems((prev) => ({ ...prev, ...transformedCart }));
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };

    useEffect(() => {
        fetchCakeList();
        loadCartData();
    }, [token]);

    // ✅ Add to Cart (local & API)
    const addToCart = async (itemId, weight, quantity = 1) => {
        const key = `${itemId}-${weight}`;
        setCartItems((prev) => ({ ...prev, [key]: (prev[key] || 0) + quantity }));

        if (token) {
            try {
                await axios.post(
                    url + "api/cart/add",
                    { itemId, weight, quantity },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    };

    // ✅ Remove One Item from Cart
    const removeFromCart = async (itemId, weight) => {
        const key = `${itemId}-${weight}`;
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[key] > 1) {
                updatedCart[key] -= 1;
            } else {
                delete updatedCart[key];
            }
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(
                    url + "api/cart/remove",
                    { itemId, weight },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error removing from cart:", error);
            }
        }
    };

    // ✅ Remove Product from Cart
    const removeProductFromCart = async (itemId, weight) => {
        const key = `${itemId}-${weight}`;
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[key];
            return updatedCart;
        });

        if (token) {
            try {
                await axios.post(
                    url + "api/cart/remove-full",
                    { itemId, weight },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
            } catch (error) {
                console.error("Error removing product from cart:", error);
            }
        }
    };

    // ✅ Get Total Cart Amount
    const getTotalCartAmount = () => {
        return Object.entries(cartItems).reduce((total, [key, quantity]) => {
            const [itemId, weight] = key.split("-");
            const item = cake_list.find((cake) => cake._id === itemId);
            return item ? total + (item.prices[weight] || 0) * quantity : total;
        }, 0);
    };

    return (
        <StoreContext.Provider
            value={{
                cake_list,
                cartItems,
                addToCart,
                removeFromCart,
                removeProductFromCart,
                getTotalCartAmount,
                url,
                token,
                setToken,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
