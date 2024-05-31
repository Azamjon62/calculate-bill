import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserFailure, loginUserStart, loginUserSuccess } from '../../Slice/auth';
import { Input } from '../../Components/Ui';
import { useState } from 'react';
import { generateToken } from "../../Utils/generateToken";
import AuthService from '../../Service/auth';
import { SharedStateContext } from '../../Components/SharedStateContext';

import "./style.css";

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    token, setToken
  } = useContext(SharedStateContext);

  const allowAskingNotification = () => {
    generateToken(setToken)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUserStart());

    const data = {
      name,
      password,
      token,
      signedIn: true,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await AuthService.userSignIn({
        collectionName: 'users',
        data: data
      });

      if (response.status === 200) {
        console.log('Document ID', response.data.id);
      } else {
        console.error('Error:', response);
      }

      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(error.response.data.errors));
    }

    navigate('/main');
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
                <input type="checkbox" onChange={allowAskingNotification} required />
                <label>Allow to asking notification </label>
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
