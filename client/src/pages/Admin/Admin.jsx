import React, { useState, useEffect } from "react";
import axios from "axios";
import useUserStore from "../../userStore";
import { Link } from "react-router-dom";
import "./Admin.css";
import AdminNav from "./AdminNav";

function Admin() {
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [form, setForm] = useState({
    image: "",
    material: "",
    description: "",
    seller: "",
    similarProducts: "",
    price: "",
    ratings: "",
  });

  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user.role === "admin") {
      fetchItems();
    }
  }, [user]);

  const fetchRequests = async () => {
    if (user.role === "admin") {
      try {
        const response = await axios.get("http://localhost:5000/api/users/requests");
        setRequests(response.data.data);
        setShowRequests(true);
      } catch (error) {
        console.error("Error fetching requests:", error);
        setRequests([]);
      }
    }
  };

  const fetchItems = async () => {
    if (user.role === "admin") {
      try {
        const response = await axios.get("http://localhost:5000/api/items/getallItems", { withCredentials: true });
        setItems(response.data);
        setTotalItems(response.data.length);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = async () => {
    try {
      await axios.post("http://localhost:5000/api/items/createItem", form);
      fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/delete/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.item_id !== id));
      setTotalItems((prevTotal) => prevTotal - 1);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    setForm({
      image: item.image,
      material: item.material,
      description: item.description,
      seller: item.seller,
      similarProducts: item.similarProducts,
      price: item.price,
      ratings: item.ratings,
    });
  };

  return (
    <>
      <button className="View_requests" onClick={fetchRequests}>View Requests</button>
      <button className="Add_admin">Add Admin</button>
      <Link to="/AddProduct"><button className="addProductbtn">Add Post</button></Link>

      <div className="total-items">
        <h3>Total Items: {totalItems}</h3>
      </div>

      {items.length > 0 && (
        <div className="items-list">
          {items.map((item) => (
            <div key={item.item_id} className="itemscontainer">
              <img src={item.image} alt={item.image} />
              <p>Price: Ksh {item.price}</p>
              <h3>{item.description}</h3>
              <p>Made from {item.material}</p>
              <p>Made by {item.seller}</p>
              <p>
                Visit <a href={item.similarProducts} target="_blank" rel="noopener noreferrer">{item.similarProducts}</a> for similar products
              </p>
              <div className="adminbuttons">
                <button onClick={() => handleDeleteItem(item.item_id)}>Delete</button>
                <Link to={`/EditProduct/${item.id}`}>
                <button className="editbtn">Edit</button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {showRequests && (
        <div className="requests-container">
          {requests.length > 0 ? (
            requests.map((request) => (
              <div key={request.id} className="request-item">
                <p>Full Name: {request.fullname}</p>
                <p>Email Address: {request.emailaddress}</p>
              </div>
            ))
          ) : (
            <p>No requests found.</p>
          )}
        </div>
      )}
    </>
  );
}

export default Admin;
