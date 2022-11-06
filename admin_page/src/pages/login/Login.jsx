import { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className='loginContainer'>
      <form className='formContainer'>
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginButton' onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
