import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import useUserStore from '../../userStore';
import AdminNav from './AdminNav';

function EditProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams(); 
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
async function fetchProduct() {
      try {
       const response = await axios.get(`http://localhost:5000/api/items/getItem/${user.item_id}`, { withCredentials: true });

        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product.");
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleSubmit = async (values) => {
    if (user.role === "admin") {
      try {
        setLoading(true);
        setError("");
        const response = await axios.patch(`http://localhost:5000/api/items/updateItem/${id}`,
          values,
          { withCredentials: true }
        );
        if (response.data.success) {
            setMessage("Product updated successfully");
            formik.resetForm();
          navigate('/Adminmain'); 
        } else {
          setError("Failed to update product.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("You do not have permission to update this product.");
    }
  };

  const formik = useFormik({
    initialValues: {
      image: product?.image || "",
      material: product?.material || "",
      description: product?.description || "",
      seller: product?.seller || "",
      similarProducts: product?.similarProducts || "",
      price: product?.price || "",
      ratings: product?.ratings || ""
    },
    enableReinitialize: true,
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

//   if (loading) return <p>Loading...</p>;

  return (
    <>
      <AdminNav />
      <div className='editProductContainer'>
        <h1>Edit Product</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Same fields as AddProduct but pre-filled with product data */}
          <div className="EditProducts">
            <label>Image</label>
            <input
              type="text"
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

          <div className="EditProducts">
            <label>material</label>
            <input
              type="text"
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

          <div className="EditProducts">
            <label>description</label>
            <input
              type="text"
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

          <div className="EditProducts">
            <label>seller</label>
            <input
              type="text"
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

          <div className="EditProducts">
            <label>similarProducts</label>
            <input
              type="text"
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

          <div className="EditProducts">
            <label>price</label>
            <input
              type="number"
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

          <div className="EditProducts">
            <label>ratings</label>
            <input
              type="text"
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
          <button type="submit" className="EditProductbtn" disabled={loading}>
            {loading ? "Please wait..." : "Update product"}
          </button>
        </form>
      </div>
    </>
  );
}

export default EditProduct;