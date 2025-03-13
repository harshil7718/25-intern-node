import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {

    const id=useParams().id;
    
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch categories
  const getAllCategories = async () => {
    try {
      const res = await axios.get("/getcat");
      setCategories(res.data.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Fetch states
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

  useEffect(() => {
    getAllCategories();
    getAllStates();
  }, []);


  const { register, handleSubmit } = useForm({
    defaultValues:async()=>{
        const res = await axios.get("/get/"+id)
        return res.data.data
    }
});

const submitHandler = async (data) => {
  data.userId = localStorage.getItem("id");
  //console.log(data);
  delete data._id; //put _id -->
  console.log(data);
  const res = await axios.put("/update/"+id, data);
    console.log(res.data);
};

return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.title}>Update Product</h1>
        <form onSubmit={handleSubmit(submitHandler)} encType="multipart/form-data">
          {/* Category Dropdown */}
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

          {/* State Dropdown */}
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

          {/* City Dropdown */}
          <div style={styles.formGroup}>
            <label>Select City</label>
            <select {...register("cityId")} required>
              <option value="">Select City</option>
              {cities?.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
                <label>Select Product URL</label>
                <input type="file" {...register("image")}></input>
              </div>

          {/* Submit Button */}
          <div style={styles.formGroup}>
            <button type="submit" style={styles.button}>Submit Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 🌟 Stylish UI Styles
const styles = {
  background: {
    background: "linear-gradient(135deg, #1c1c1c, #3a3a3a)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s ease",
  },
};

export default UpdateProduct;
