// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const { register, handleSubmit } = useForm();
//   // const navigate= useNavigate


//   const submitHandler = async(data) => {
    
//     // data.roleId = "67c1ae46c5b4e3436f9d6601"
//     const res = await axios.post("http://localhost:7777/user",data)
//     console.log(res) //axiosobjec
//     console.log(res.data) //api response...
//     // navigate('/login')
//     // if(res.status===201){

      
//     // }
//     // else{
      
//     // }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>USER SIGNUP...</h1>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>Name</label>
//           <input type="text" {...register("name")}></input>
//         </div>
//         <div>
//           <label>email</label>
//           <input type="text" {...register("email")}></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" {...register("password")}></input>
//         </div>
//         <div>
//           <input type="submit"></input>
//         </div>
//       </form>
//     </div>
//   );
// };
//  export default Signup;



// import axios from "axios";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();
//   const [profilePicture, setProfilePicture] = useState(null);

//   // Handle File Upload
//   const handleFileChange = (e) => {
//     setProfilePicture(e.target.files[0]);
//   };

//   // const onSubmit = async (data) => {
//   //   try {
//   //     // Form Data for API
//   //     const formData = new FormData();
//   //     formData.append("name", data.name);
//   //     formData.append("email", data.email);
//   //     formData.append("password", data.password);
//   //     // formData.append("phone", data.phone);
//   //     // formData.append("role", data.role);
//   //     // if (profilePicture) {
//   //     //   formData.append("profilePicture", profilePicture);
//   //     // }

//   //     const response = await axios.post("/user", formData);

//   //     alert("Registration successful");
//   //     console.log("User Registered:", response.data);
//   //     navigate("/login");
//   //   } catch (error) {
//   //     console.error(
//   //       "Error registering user:",
//   //       error.response?.data || error.message
//   //     );
//   //     alert("Registration failed!");
//   //   }
//   // };

//   const onSubmit = async (data) => {

//     data.roleId='67c1ae46c5b4e3436f9d6601'
//     try {
//       // Creating a JSON object to send
//       const userData = {
//         name: data.name,
//         email: data.email,
//         password: data.password,
//         phone: data.phone, // Uncomment if needed
//         roleId: data.roleId,   // Uncomment if needed
//       };
  
//       const response = await axios.post("/user", userData, {
//         headers: { "Content-Type": "application/json" }, // Ensure JSON format
//       });
      
//       console.log('Form data',data);
      
//       alert("Registration successful");
//       console.log("User Registered:", response.data);
//       navigate("/login");
//     } catch (error) {
//       console.error(
//         "Error registering user:",
//         error.response?.data || error.message
//       );
//       alert("Registration failed!");
//     }
//   };
  

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light p-3">
//       <div
//         className="bg-white p-4 p-md-5 rounded shadow w-100"
//         style={{ maxWidth: "500px" }}
//       >
//         <h2 className="text-center fw-bold mb-1">Create an account</h2>
//         <p className="text-center text-muted mb-4">Sign up for a new account</p>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-3">
//             <label className="form-label fw-bold">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="John Doe"
//               {...register("name", { required: "Full name is required" })}
//             />
//             {errors.name && (
//               <p className="text-danger">{errors.name.message}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="m@example.com"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && (
//               <p className="text-danger">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Phone */}
//           {/* <div className="mb-3">
//             <label className="form-label fw-bold">Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               placeholder="Phone number"
//               {...register("phone", { required: "Phone number is required" })}
//             />
//             {errors.phone && (
//               <p className="text-danger">{errors.phone.message}</p>
//             )}
//           </div> */}

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Enter your password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters",
//                 },
//               })}
//             />
//             {errors.password && (
//               <p className="text-danger">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Profile Picture */}
//           {/* <div className="mb-3">
//             <label className="form-label fw-bold">Profile Picture</label>
//             <input
//               type="file"
//               className="form-control"
//               accept="image/*"
//               style={{ outline: "none" }}
//               onChange={handleFileChange}
//             />
//           </div> */}

//           {/* Role Selection */}
//           {/* <div className="mb-3">
//             <label className="form-label fw-bold">Register As</label>
//             <select
//               className="form-control"
//               style={{ outline: "none" }}
//               {...register("role", { required: "Role selection is required" })}
//             >
//               <option value="user">User</option>
//               <option value="owner">PG Owner</option>
//               <option value="admin">Admin</option>
//             </select>
//             {errors.role && (
//               <p className="text-danger">{errors.role.message}</p>
//             )}
//           </div> */}

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-dark w-100 mb-3">
//             Sign Up
//           </button>
//         </form>

//         <div className="d-flex align-items-center mb-3">
//           <hr className="flex-grow-1" />
//           <span className="mx-2 text-muted">Or continue with</span>
//           <hr className="flex-grow-1" />
//         </div>

//         <div className="d-flex justify-content-center gap-2 mb-3">
//           <button
//             className="btn btn-light w-100 border"
//             onClick={() => alert("Google Login Coming Soon!")}
//           >
//             <FcGoogle size={22} /> Login with Google
//           </button>
//         </div>

//         <p className="text-center">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-primary fw-bold text-decoration-none"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);

  // Handle File Upload
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // Handle Form Submission
  const onSubmit = async (data) => {
    // Adding Role ID here based on selected role
    const roleMap = {
      user: '67c1ae70c5b4e3436f9d6605', // Replace with actual roleId from your database
      owner: '67be91cab339a2cdaf793810',
      admin: '67c1ae46c5b4e3436f9d6601',
    };
    const selectedRoleId = roleMap[data.role]; 
    if(!selectedRoleId){
      alert("Invalid Role Select")
      return
    };// Assign the corresponding roleId to data

    try {
      // Creating a JSON object to send
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone, // Uncomment if phone is required
        roleId: selectedRoleId, // Assign the roleId from selected role
      };

      const response = await axios.post("/user", userData, {
        headers: { "Content-Type": "application/json" }, // Ensure JSON format
      });

      console.log('Form data', data);
      
      alert("Registration successful");
      console.log("User Registered:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
      alert("Registration failed!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <p className="signup-text">Join AuctionBidder and start bidding!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          {/* Full Name */}
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="John Doe"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="input-group">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="m@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          {/* Uncomment if phone is required */}
          {/* <div className="input-group">
            <label className="input-label">Phone</label>
            <input
              type="tel"
              className="input-field"
              placeholder="Phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="error-text">{errors.phone.message}</p>}
          </div> */}

          {/* Password */}
          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>

          {/* Role Selection */}
          <div className="input-group">
            <label className="input-label">Register As</label>
            <select
              className="input-field"
              style={{ outline: "none" }}
              {...register("role", { required: "Role selection is required" })}
            >
              <option value="user">User</option>
              <option value="owner">Owner</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="error-text">{errors.role.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>

        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <button className="google-btn" onClick={() => alert("Google Login Coming Soon!")}>
            <FcGoogle size={22} /> Login with Google
          </button>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          /* Body & Global Styles */
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f3f4f6;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Signup Container */
          .signup-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
          }

          /* Form Container */
          .signup-form-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 450px;
            width: 100%;
          }

          /* Title & Text */
          .signup-form-container h2 {
            text-align: center;
            color: #333;
            margin-bottom: 10px;
          }

          .signup-text {
            text-align: center;
            color: #888;
            font-size: 14px;
            margin-bottom: 20px;
          }

          /* Form Fields */
          .input-group {
            margin-bottom: 20px;
          }

          .input-label {
            font-size: 14px;
            font-weight: 600;
            color: #333;
          }

          .input-field {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .input-field:focus {
            border-color: #0056b3;
          }

          .error-text {
            color: red;
            font-size: 12px;
            margin-top: 5px;
          }

          /* Submit Button */
          .submit-button {
            width: 100%;
            padding: 12px;
            background-color: #0056b3;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #003f7f;
          }

          /* Social Login */
          .social-login {
            text-align: center;
            margin-top: 20px;
          }

          .divider {
            display: flex;
            align-items: center;
            margin: 15px 0;
          }

          .divider span {
            flex-grow: 1;
            border-top: 1px solid #ddd;
            padding: 0 10px;
            font-size: 14px;
            color: #888;
          }

          .google-btn {
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            color: #333;
            padding: 10px 15px;
            border-radius: 4px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .google-btn:hover {
            background-color: #e0e0e0;
          }

          /* Login Link */
          .login-link {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
          }

          .login-link a {
            color: #0056b3;
            text-decoration: none;
            font-weight: 600;
          }

          .login-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
