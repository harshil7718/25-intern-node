import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
//   const [areas, setAreas] = useState([]);

  // Fetch all categories
  const getAllCategories = async () => {
    try {
      const res = await axios.get("/getcat");
      setCategories(res.data.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Fetch all states
  const getAllStates = async () => {
    try {
      const res = await axios.get("/get");
      setStates(res.data.data);
    } catch (err) {
      console.error("Error fetching states:", err);
    }
  };

  // Fetch cities by state ID
  const getCityByStateId = async (stateId) => {
    try {
      const res = await axios.get(`/getcitybystate/${stateId}`);
      setCities(res.data.data);
    } catch (err) {
      console.error("Error fetching cities:", err);
    }
  };

  // Fetch areas by city ID
//   const getAreaByCityId = async (cityId) => {
//     try {
//       const res = await axios.get(`/area/getareabycity/${cityId}`);
//       setAreas(res.data.data);
//     } catch (err) {
//       console.error("Error fetching areas:", err);
//     }
//   };

  useEffect(() => {
    getAllCategories();
    getAllStates();
  }, []);

  const { register, handleSubmit } = useForm();

  // Submit Form
  const submitHandler = async (data) => {
    const sellerId = localStorage.getItem("id"); // Fetch seller ID from local storage
    data.sellerId = sellerId;

    try {
      const res = await axios.post("/products/add", data);
      console.log("Product added:", res.data);
      alert("Product added successfully!");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>
        {/* Category Dropdown First */}
        <div style={styles.formGroup}>
          <label>Category Type</label>
          <select {...register("categoryId")} required>
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>

        {/* Product Name */}
        <div style={styles.formGroup}>
          <label>Product Name</label>
          <input type="text" {...register("productName")} required />
        </div>

        {/* Description */}
        <div style={styles.formGroup}>
          <label>Description</label>
          <textarea {...register("description")} required></textarea>
        </div>

        {/* Starting Price */}
        <div style={styles.formGroup}>
          <label>Starting Price</label>
          <input type="number" {...register("startingPrice")} required />
        </div>

        {/* Condition */}
        <div style={styles.formGroup}>
          <label>Product Condition</label>
          <select {...register("condition")} required>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>

        {/* Image URL */}
        {/* <div style={styles.formGroup}>
          <label>Image URL</label>
          <input type="text" {...register("imageUrl")}  />
        </div> */}

        {/* Dynamic State Dropdown */}
        <div style={styles.formGroup}>
          <label>Select State</label>
          <select
            {...register("stateId")}
            onChange={(e) => getCityByStateId(e.target.value)}
            required
          >
            <option value="">Select State</option>
            {states?.map((state) => (
              <option key={state._id} value={state._id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic City Dropdown */}
        <div style={styles.formGroup}>
          <label>Select City</label>
          <select
            {...register("cityId")}
           
          >
            <option value="">Select City</option>
            {cities?.map((city) => (
              <option key={city._id} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Area Dropdown */}
        {/* <div style={styles.formGroup}>
          <label>Select Area</label>
          <select {...register("areaId")} required>
            <option value="">Select Area</option>
            {areas?.map((area) => (
              <option key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
          </select>
        </div> */}

        {/* Submit Button */}
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddProduct;