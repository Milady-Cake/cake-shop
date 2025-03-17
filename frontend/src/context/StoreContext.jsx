// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {
//     const url = "https://cake-shop-backend-qfhf.onrender.com/";
//     const [cartItems, setCartItems] = useState(() => {
//         const savedCart = localStorage.getItem("cartItems");
//         return savedCart ? JSON.parse(savedCart) : {};
//     });
//     const [cake_list, setCakeList] = useState([]);
//     const [token, setToken] = useState(localStorage.getItem("token") || "");

//     // ✅ Keep cart items in local storage on update
//     useEffect(() => {
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }, [cartItems]);

//     // ✅ Keep token in local storage
//     useEffect(() => {
//         if (token) {
//             localStorage.setItem("token", token);
//         } else {
//             localStorage.removeItem("token");
//             setCartItems({}); // Clear cart when logging out
//         }
//     }, [token]);

//     // ✅ Fetch Cake List
//     const fetchCakeList = async () => {
//         try {
//             const response = await axios.get(url + "api/cake/list");
//             setCakeList(response.data.data);
//         } catch (error) {
//             console.error("Error fetching cake list:", error);
//         }
//     };

//     // ✅ Load Cart Data from API
//     const loadCartData = async () => {
//         if (!token) return;

//         try {
//             const response = await axios.post(
//                 url + "api/cart/get",
//                 {},
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             console.log("Cart Data from API:", response.data);

//             // Transform cart structure
//             const transformedCart = {};
//             for (const [key, value] of Object.entries(response.data.cartData || {})) {
//                 transformedCart[key.replace("_", "-")] = value;
//             }

//             // Merge API cart with local storage cart
//             setCartItems((prev) => ({ ...prev, ...transformedCart }));
//         } catch (error) {
//             console.error("Error loading cart data:", error);
//         }
//     };

//     useEffect(() => {
//         fetchCakeList();
//         loadCartData();
//     }, [token]);

//     // ✅ Add to Cart (local & API)
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

//     // ✅ Remove One Item from Cart
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

//     // ✅ Remove Product from Cart
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

//     // ✅ Get Total Cart Amount
//     const getTotalCartAmount = () => {
//         return Object.entries(cartItems).reduce((total, [key, quantity]) => {
//             const [itemId, weight] = key.split("-");
//             const item = cake_list.find((cake) => cake._id === itemId);
//             return item ? total + (item.prices[weight] || 0) * quantity : total;
//         }, 0);
//     };

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
  const url = "https://cake-shop-backend-qfhf.onrender.com/";
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });
  const [cake_list, setCakeList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(true); // ✅ Added loading state

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

  // ✅ Fetch Cake List with Loading State
  const fetchCakeList = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.get(url + "api/cake/list");
      setCakeList(response.data.data);
    } catch (error) {
      console.error("Error fetching cake list:", error);
    } finally {
      setLoading(false); // Stop loading
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
        loading, // ✅ Added loading state
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
