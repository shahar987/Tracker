import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/sessionService';
import { validateLogin } from '../../services/validations';
import "./LoginPage.scss";

const LoginPage = () => {

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onLoginClick = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const validationErrorCode = validateLogin(username, password);

    //if the user didn't fill the form as needed
    if (validationErrorCode != null) {
      alert(validationErrorCode);
      return;
    }

    //Starting to send the login request to the server
    setIsLoading(true);
    const loginSuccessul = await login(username, password);
    setIsLoading(false);

    if(loginSuccessul){
      navigate("/");
    } else{
      alert("Wrong username or password");
    }

  }
  return (
    <main className='login-page'>
      <h1>Trackr</h1>
      <section className='login-form'>
        <input type='text' placeholder='Username' ref={usernameRef} />
        <input type='password' placeholder='Password' ref={passwordRef} />
        <button type='button' onClick={async () => await onLoginClick()}>{isLoading ? "Loading..." : "Login"}</button>
      </section>
    </main>
  )
}

export default LoginPage