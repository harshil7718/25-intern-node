import React, { useState } from "react";

const AddItem = () => {
  const [item, setItem] = useState({ name: "", startingBid: "" });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.addItem}>
      <h2>Add Item</h2>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={item.name}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="number"
        name="startingBid"
        placeholder="Starting Bid"
        value={item.startingBid}
        onChange={handleChange}
        style={styles.input}
      />
      <button style={styles.button}>Submit</button>
    </div>
  );
};

const styles = {
  addItem: {
    flexGrow: 1,
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginLeft: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    width: "100%",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default AddItem;
