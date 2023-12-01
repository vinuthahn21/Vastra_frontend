// import { Button } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Components/Navbar/Navbar";
// import "../Styles/LoginOrSignUp.css";
// import { getData } from "./storage";
// // import "../css/Home.css";

// export const LoginOrSignUp = () => {
//   const [details, setDetails] = useState("userdetails");
//   const [buttonLogging, setButtonLogging] = useState(false);

//   console.log(details);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     // value=e.target.value;
//     setDetails(+e.target.value);
//   };

//   const handleSubmit = () => {
//     setButtonLogging(true);
//     setTimeout(() => {
//       console.log("submitted");
//       setButtonLogging(false);
//       navigate("/fullDetails");
//     }, 1000);
//   };

//   return (
//     <div className="background">
//       <Navbar />
//       <div className="Login_Master">
//         <div>
//           <img
//             src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
//             alt="Error"
//           />
//         </div>

//         <div className="form">
//           <h1 className="formh1">Login / Signup</h1>
//           <div className="forminput">
//             <h1>+91 | </h1>
//             <input
//               name="phone"
//               onChange={handleChange}
//               type="text"
//               maxlength={10}
//               placeholder="Mobile Number *"
//             />
//           </div>

//           <div className="termsAndCondition">
//             <p>By continuing, I agree to the </p>
//             <h1> Terms of Use </h1>
//             <p> & </p>
//             <h1> Privacy Policy</h1>
//           </div>
//           <div className="buttonFather">
//             <Button
//               className="logout"
//               isLoading={buttonLogging}
//               loadingText="Logging Out"
//               colorScheme="teal"
//               variant="outline"
//               onClick={handleSubmit}
//             >
//               CONTINUE
//             </Button>
//           </div>

//           <div className="termsAndCondition">
//             <p>Have trouble logging in?</p>
//             <h1>Get Help</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from 'react';
import axios from 'axios';

import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

export const LoginOrSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [loginResult, setLoginResult] = useState("");
  const [dashboardData, setDashboardData] = useState({});
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAction = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handlePost();
    }
  };

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { name, email })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
          setName("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert('${error}');
      });
  }

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { name, email })
      .then((response) => {
        const result = response.data;
        setLoginResult(result.success ? "Login successful" : "Login successful");
        if (result.success) {
          // If login is successful, fetch dashboard data
          fetchDashboardData();
          setShowDashboard(true);
        }
      })
      .catch((error) => {
        console.error("Login request error:", error);
        alert("Something went wrong during login.");
      });
  }

  const fetchDashboardData = () => {
    axios.get('http://localhost:5000/dashboard?name=${name}')
      .then((response) => {
        const data = response.data;
        setDashboardData(data);
      })
      .catch((error) => {
        console.error("Dashboard data request error:", error);
        alert("Failed to fetch dashboard data.");
      });
  }

  return (
    <>
    <body>
        <Navbar/><br /><br /><br /><br /><br /><br />
    <div className="cont">
      {showDashboard ? (
        <div>
          <h1>Welcome to Your Dashboard, {name}!</h1>
          <p>Dashboard Data:</p>
          <ul>
            {Object.entries(dashboardData).map(([key, value]) => (
              <li key={key}>{'${key}: ${value}'}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="container my-3 py-3">
        <div>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <hr/>
          <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            
          <form>
          <div class="form my-3">
          <label for="Name">Name:</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(f) => setName(f.target.value)}
            />
            </div>
            <label for="Email">Email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <button type="button" onClick={handleAction}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <br />
            <br />
            <p>{loginResult}</p>
            
            <button type="button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </button>
          </form>
          </div>
          </div>
        </div>
        </div>
      )}
    </div>
    
    <Footer className="foot"/>
    </body>
    </>
  );
}



