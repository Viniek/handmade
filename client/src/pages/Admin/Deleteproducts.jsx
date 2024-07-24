import React, { useState, useEffect } from "react";
// import "./AdminProducts.css";
import { url_api } from "../../../utils/config";
import axios from "axios";
import useUserStore from "../../userStore";
import AdminNav from "./AdminNav";
import { Link } from "react-router-dom";

function Deleteproducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = useUserStore((state) => state.user);
  
  useEffect(() => {
    async function fetchProducts() {
      if (user) {
        try {
          const response = await axios.get(`${url_api}//api/items/getallItems`, { withCredentials: true });
          setProducts(response.data.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setError("404 - Page Not Found");
        setLoading(false);
      }

    }

    fetchProducts();
  }, [user]);
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`${url_api}/api/items/delete/${productId}`, { withCredentials: true });
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : "Failed to delete product. Please try again later.");
    }
  };
  
  // const deleteProduct = async (productId) => {
  //   try {
  //     await axios.delete(`${url_api}/api/items/delete/${productId}`, { withCredentials: true });
  //     setProducts(products.filter((product) => product.id !== productId));
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //     setError("Failed to delete product. Please try again later.");
  //     console.log(error.message);
  //   }
   
  // };

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  

  return (
    <>
      <AdminHeader />
      <section className="Adminproducts">
        {products.map((product) => (
          <div className="Adminproductscontainer" key={product.id}>
            <img src={product.productImage} alt={product.productName} />
            <h1>{product.productName}</h1>
            <p>{product.productDescription}</p>
            <p className="pricenow">Price Ksh {product.productPrice}</p>

            <div className="adminoperationButtons">
              <Link to='/EditProduct'><button className="editbtn">Edit</button></Link>
              <button
                className="delbtn"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
<Link to ="/AddProduct"><button className="addProductbtn" >Add New Post</button></Link>      </section>
      
    </>
  );
}

export default Deleteproducts;
