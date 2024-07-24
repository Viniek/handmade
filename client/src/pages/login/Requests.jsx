import "./Login.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Assuming you are using react-toastify for toasts
import { url_api } from "../../../utils/config";
// import useUserStore from "../../userStore";
import useUserStore from "../../userStore";

function Requests() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const  changeuserInformation  = useUserStore((state)=>state.changeUserInformation)

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${url_api}/api/users/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.data.success) {
        // changeuserInformation(data.data);
        if (data.data.role === "admin") {
          navigate("/Admin");
        } else if (data.data.role === "seller") {
          navigate("/Sellers");
        } else {
          navigate("/Wishlist");
        }
      } else {
        toast.error(data.message, { theme: "failure" });
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      emailaddress: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};

      if (!values.fullname) {
        errors.fullname = "Full name required.";
      } else if (values.fullname.length < 3) {
        errors.fullname = "Must have 3 characters or more.";
      }

      if (!values.emailaddress) {
        errors.emailaddress = "Email address required.";
      } else if (!/\S+@\S+\.\S+/.test(values.emailaddress)) {
        errors.emailaddress = "Enter a valid email.";
      }

      if (!values.password) {
        errors.password = "Password required.";
      }

      if (!values.confirmpassword) {
        errors.confirmpassword = "Confirm password required.";
      } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = "Passwords must match.";
      }

      return errors;
    },
  });

  return (
    <section className="schedule_a_visit">
      <h2>Sign up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="formfield">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name e.g. vee..."
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="errorp">{formik.errors.fullname}</p>
          )}
        </div>

        <div className="formfield">
          <input
            type="email"
            name="emailaddress"
            id="emailaddress"
            placeholder="Email address..."
            value={formik.values.emailaddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.emailaddress && formik.errors.emailaddress && (
            <p className="errorp">{formik.errors.emailaddress}</p>
          )}
        </div>

        <div className="formfield">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <p className="errorp">{formik.errors.password}</p>
          )}
        </div>

        <div className="formfield">
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm password..."
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <p className="errorp">{formik.errors.confirmpassword}</p>
          )}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Please wait..." : "Request"}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
}

export default Requests;
