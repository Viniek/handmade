import React, { useState } from "react";
import "./Login.css";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { url_api } from "../../../utils/config";
import useUserStore from "../../userStore";

toastConfig({ theme: "Colored Themes" });

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const changeuserInformation = useUserStore(
    (state) => state.changeUserInformation,
  );

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError("false");
      const response = await fetch(`${url_api}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data.data);
      if (data.success) {
        changeuserInformation(data.data);

        if (data.data.role === "admin") {
          navigate("/Admin");
        } else if (data.data.role === "seller") {
          navigate("/Sellers");
        } else {
          navigate("/Wishlist");
        }
      } else {
        toast(data.message, { theme: "failure" });
      }
    } catch (e) {
      setError(e.message);
      toast(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      emailaddress: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validate: (formValues) => {
      let errors = {};

      if (formValues.emailaddress === "") {
        errors.emailaddress = "Email address required";
      } else if (!formValues.emailaddress.includes("@")) {
        errors.emailaddress = "Enter a valid email...";
      }

      if (formValues.password === "") {
        errors.password = "Password required...";
      }

      return errors;
    },
  });

  return (
    <>
      <section className="schedule_a_visit">
        <h2>Sign In</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="formfield">
            <input
              type="text"
              name="emailaddress"
              id="emailaddress"
              placeholder="Email address..."
              value={formik.values.emailaddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              placeholder="Enter your password..."
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="errorp">{formik.errors.password}</p>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        {error && <p className="errorp">{error}</p>}
      </section>
    </>
  );
}

export default SignIn;
