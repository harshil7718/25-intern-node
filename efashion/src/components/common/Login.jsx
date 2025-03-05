
// import axios from "axios";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";

// const Login = ({ setUser }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const navigate = useNavigate();

//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");


//   const onSubmit = async (data) => {
    
//       const response = await axios.post("/user/login", data);
//       console.log(response.data);
//       if(response.status===200){

//         alert('login success')
//         // Store User Data in Local Storage
//         localStorage.setItem("id", response.data.data._id);
//         localStorage.setItem('role',response.data.data.roleId.name);

//         if(response.data.data.roleId.name === "user"){
//           navigate('/user')
//         }
//       }
//       else{
//         alert('login failed')
//       }
  
//       // Ensure setUser is available before calling it
//     }
  
  

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light p-3">
//       <div
//         className="bg-white p-4 p-md-5 rounded shadow w-100"
//         style={{ maxWidth: "500px" }}
//       >
//         <h2 className="text-center fw-bold mb-1">Welcome back</h2>
//         <p className="text-center text-muted mb-4">Login to your account</p>

//         {errorMessage && (
//           <div className="alert alert-danger">{errorMessage}</div>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Email</label>
//             <input
//               type="email"
//               style={{ outline: "none" }}
//               className="form-control"
//               placeholder="m@example.com"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^\S+@\S+\.\S+$/,
//                   message: "Invalid email format",
//                 },
//               })}
//             />
//             {errors.email && (
//               <p className="text-danger">{errors.email.message}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Password</label>
//             <div className="input-group">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="form-control"
//                 style={{ outline: "none" }}
//                 placeholder="Enter your password"
//                 {...register("password", { required: "Password is required" })}
//               />
//               <button
//                 type="button"
//                 className="btn btn-outline-secondary"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 {passwordVisible ? "🙈" : "👁"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-danger">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Forgot Password */}
//           <div className="mb-3 text-end">
//             <Link
//               to="/forgot-password"
//               className="text-primary text-decoration-none"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-dark w-100 mb-3">
//             Login
//           </button>
//         </form>

//         <div className="d-flex align-items-center mb-3">
//           <hr className="flex-grow-1" />
//           <span className="mx-2 text-muted">Or continue with</span>
//           <hr className="flex-grow-1" />
//         </div>

//         {/* Google Login */}
//         <div className="d-flex justify-content-center gap-2 mb-3">
//           <button
//             className="btn btn-light w-100 border"
//             onClick={() => alert("Google Login Coming Soon!")}
//           >
//             <FcGoogle size={22} /> Login with Google
//           </button>
//         </div>

//         {/* Signup Redirect */}
//         <p className="text-center">
//           Don't have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-primary fw-bold text-decoration-none"
//           >
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // const onSubmit = async (data) => {
  //   try {
  //     // Prepare the login data to be sent to the backend
  //     const loginData = {
  //       email: data.email,
  //       password: data.password,
  //     };

  //     const res = await axios.post("/user/login", loginData, {
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     console.log("Login Successful:", res.data);
  //     alert("Login successful");
  //     localStorage.setItem("id",res.data.data._id)
  //     localStorage.setItem("role",res.data.data.roleId.name)
  //     if(res.data.data.roleId.name === "user"){
  //       navigate("/user") //check in app.js
  //     }
  //     if(res.data.data.roleId.name ==="user"){
  //       navigate("/addproduct") //check in app.js
  //     }
  //     // navigate("/user"); // After successful login, redirect to the dashboard
  //   } catch (error) {
  //     console.error("Login error:", error.res?.data || error.message);
  //     alert("Login failed! Please check your credentials.");
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      // Prepare the login data to be sent to the backend
      const loginData = {
        email: data.email,
        password: data.password,
      };
  
      const response = await axios.post("/user/login", loginData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("Login Successful:", response.data);
      alert("Login successful");
  
      // Corrected response variable
      localStorage.setItem("id", response.data.data._id);
      localStorage.setItem("role", response.data.data.roleId.name);
  
      // Role-based navigation
      if (response.data.data.roleId.name === "user") {
        navigate("/user");
      } if (response.data.data.roleId.name === "Admin") {
        navigate("/addproduct");
      }
  
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed! Please check your credentials.");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login to AuctionBidder</h2>
        <p className="login-text">Please enter your credentials to login</p>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        <div className="social-login">
          <div className="divider">
            <span>Or continue with</span>
          </div>
          <button
            className="google-btn"
            onClick={() => alert("Google Login Coming Soon!")}
          >
            <FcGoogle size={22} /> Login with Google
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
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

          /* Login Container */
          .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
          }

          /* Form Container */
          .login-form-container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 450px;
            width: 100%;
          }

          /* Title & Text */
          .login-form-container h2 {
            text-align: center;
            color: #333;
            margin-bottom: 10px;
          }

          .login-text {
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

          /* Sign Up Link */
          .signup-link {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
          }

          .signup-link a {
            color: #0056b3;
            text-decoration: none;
            font-weight: 600;
          }

          .signup-link a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
