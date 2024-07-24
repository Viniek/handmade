import React, { useState } from 'react';
import { useFormik } from "formik";
import axios from "axios";
import useUserStore from '../../../userStore';
import AdminNav from '../AdminNav';
import toast, { toastConfig } from "react-simple-toasts";
import "./Addproduct.css"; 


function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const user = useUserStore((state) => state.user);

  const handleSubmit = async (values) => {
    if (user) {
      console.log(user);
      try {
        setLoading(true);
        setError("");
        const response = await axios.post(
          "http://localhost:5000/api/items/createItem",
          values,
          { withCredentials: true }
        );
        console.log(response);
        if (response.data.success === true) {
          setMessage("Product Added to Database");
          formik.resetForm();
        } else {
          setError("Failed to add product. Please try again.");
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("You do not have permission to add a product.");
    }
  };

  const formik = useFormik({
    initialValues: {
      image: "",
      material: "",
      description: "",
      seller: "",
      similarProducts: "",
      price: "",
      ratings: ""
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.image) errors.image = "Image is required";
      if (!values.material) errors.material = "Material is required";
      if (!values.description) errors.description = "Description is required";
      if (!values.seller) errors.seller = "Seller is required";
      if (!values.similarProducts) errors.similarProducts = "Similar products link is required";
      if (!values.price) errors.price = "Price is required";
      if (!values.ratings) errors.ratings = "Ratings are required";
      return errors;
    
    },
  
  });

  return (
    <>
      <AdminNav />
      <div className='addProductContainer'>
        <h1>Add Items To Database</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="AddProducts">
            <label>Image</label>
            <input
              type="text"
              placeholder="Enter Item image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.image && formik.errors.image && (
              <p>{formik.errors.image}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Product Material</label>
            <input
              type="text"
              placeholder="Enter Item material"
              name="material"
              value={formik.values.material}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.material && formik.errors.material && (
              <p>{formik.errors.material}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Product Description</label>
            <input
              type="text"
              placeholder="Enter Product Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.description && formik.errors.description && (
              <p>{formik.errors.description}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Seller</label>
            <input
              type="text"
              placeholder="Enter Product seller"
              name="seller"
              value={formik.values.seller}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.seller && formik.errors.seller && (
              <p>{formik.errors.seller}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Similar Products</label>
            <input
              type="text"
              placeholder="Enter link to similar products"
              name="similarProducts"
              value={formik.values.similarProducts}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.similarProducts && formik.errors.similarProducts && (
              <p>{formik.errors.similarProducts}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter Product price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.price && formik.errors.price && (
              <p>{formik.errors.price}</p>
            )}
          </div>

          <div className="AddProducts">
            <label>Ratings</label>
            <input
              type="text"
              placeholder="Enter Product ratings"
              name="ratings"
              value={formik.values.ratings}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.ratings && formik.errors.ratings && (
              <p>{formik.errors.ratings}</p>
            )}
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="AddProductbtn" disabled={loading} >
            {loading ? "Please wait..." : "Add product"}
          </button>
        
          <p className='addedToDbMessage'>{message}</p>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
