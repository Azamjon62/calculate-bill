import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../../Slice/auth';
import { Input } from '../../Components/Ui';
import { useState } from 'react';

import "./style.css";

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main');
    dispatch(loginUserStart());
  };

  return (
    <div>
      <div className="container">
        <div className="login-section" >
          <form onSubmit={handleSubmit} className="form">
            <div className="flex-column">
              <label>Name</label>
            </div>
            <div className="inputForm">
              <ion-icon name="person-outline"></ion-icon>
              <Input type={"text"} state={name} setState={setName} placeholder={"Enter your Name"} />
            </div>

            <div className="flex-column">
              <label>Password </label>
            </div>
            <div className="inputForm">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <Input type={"password"} state={password} setState={setPassword} placeholder={"Enter your Password"} />
            </div>

            <div className="flex-row">
              <div>
                <input type="checkbox" />
                <label>Remember me </label>
              </div>
              <span className="span">Forgot password?</span>
            </div>
            <button disabled={isLoading} type='submit' className="button-submit"> {isLoading ? 'Loading...' : 'Sign In'} </button>
            <p className="p">
              Dont have an account? <span className="span">Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
