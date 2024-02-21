import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/apiInterceptor";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  let errorStatus= false
  
  const navigate = useNavigate();

const {login} = useAuth();
  const submit = async () => {
    try {
      const response = await api.post("/auth/login", {
        username: userName,
        password: password,
      });
      localStorage.setItem("token",response.data.token);
      login(true);
      navigate("/")
      
      
      console.log("🚀 ~ submit ~ response:", response);
    } catch (e) {
      toast(e.response.data);
      console.log(e);
    }
  };
  const validation =()=>{
    debugger
    if (userName === "" && password === "") {
      debugger
      // setErrorStatus(true)
      errorStatus = true
      setErrorMessage("Please enter username or password")
    }
    // else if (password < 8) {
    //   setErrorStatus(true)
    //   setErrorMessage("Password must be at least 8 character")
    // }
    else{
      errorStatus =false
      // setErrorStatus(false)
    }
  }

  const handleSubmit = () => {
    // validation
    validation()    
    // validation end
    // submit api
    if(errorStatus){
      console.log(errorStatus);
      submit();
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
        margin: "5rem auto",
      }}
    >
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
          name="username"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          name="password"
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
