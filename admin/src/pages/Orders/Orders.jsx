

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Orders.css"; // ✅ Import CSS file

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  // ✅ Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };

  // ✅ Handle status update
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update status: " + error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const statusOptions = ["Cake Processing", "Out for Delivery", "Delivered"];

  return (
    <div className="orders-container">
      <div className="orders-wrapper">
        <h3 className="orders-title">Order Management</h3>

        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order._id} className="order-card">
                {/* ✅ Order Details */}
                <div className="order-details">
                  {/* ✅ Show Product Image */}
                  <img
                    src={`https://cake-shop-backend-qfhf.onrender.com/images/${order.items[0]?.image}`}
                    alt={order.items[0]?.name || "Cake"}
                    className="order-image"
                  />

                  <div className="order-info">
                    {/* ✅ Show Cake Name & Weight */}
                    <p className="order-cake">
                      {order.items
                        .map(
                          (item) =>
                            `${item.name} (${item.weight}) x ${item.quantity}`
                        )
                        .join(", ")}
                    </p>

                    {/* ✅ Show Customer Name */}
                    <p className="order-text">
                      <strong>Customer:</strong> {order.address.firstName}{" "}
                      {order.address.lastName}
                    </p>

                    {/* ✅ Show Address */}
                    <p className="order-text">
                      {order.address.address}, {order.address.city},{" "}
                      {order.address.region}, {order.address.country} -{" "}
                      {order.address.postalCode}
                    </p>

                    {/* ✅ Show Phone Number */}
                    <p className="order-text">
                      <strong>Phone:</strong> {order.address.phone}
                    </p>
                  </div>
                  <div className="order-grid">
                    <p className="order-text">
                      <strong>Items:</strong> {order.items.length}
                    </p>

                    {/* ✅ Order Date */}
                    <p className="order-text">
                      <strong>Order Date:</strong>{" "}
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                   

                    {/* ✅ Show Payment Status */}
                    <p
                      className={`order-status ${
                        order.payment ? "paid" : "unpaid"
                      }`}
                    >
                      <strong>Payment Status:</strong>{" "}
                      {order.payment ? "Paid" : "Unpaid"}
                    </p>

                    <p className="order-text">
                      <strong>Total Amount:</strong> ₹{order.amount}
                    </p>
                    {/* ✅ Order Status Dropdown */}
                    <div className=" flex">
                      <label className="order-label">Order Status:</label>
                     
                    </div>
                    <select
                        onChange={(event) => statusHandler(event, order._id)}
                        value={order.status}
                        className="order-select"
                      >
                        {statusOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                  </div>
                </div>

                {/* ✅ Order Info Grid */}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-orders">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
