import "./signIn.css";
import Popup from "reactjs-popup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { googleLogout, GoogleLogin } from "@react-oauth/google";

const instance = axios.create({
  baseURL: "http://localhost:5000",
})

export default function Signin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  
  

  const handleLoginSuccess = (response) => {
    console.log('response', response);
    const accessToken1 = response;
    console.log('accessToken1',accessToken1);
    setAccessToken(accessToken1);
    instance
      .post(
        "/users/google-auth",
        { accessToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      setIsAuthenticated(true);
      navigate('/dashboard', { replace: true });
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed: ", error);
  };

  const handleLogoutSuccess = () => {
    setAccessToken(null);
  };
  return (
    <div className="button-component">
      <div className="button-signin">
        <Popup
          trigger={<button className="signin"> sign in</button>}
          position="bottom"
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Sign in </div>
              <div className="content">
                <GoogleLogin
                  className="google-button"
                  onSuccess={handleLoginSuccess}
                  onFailure={handleLoginFailure}
                  isSignedIn={true}
                />

                {/* <button className="google-button">
                  <img className="google-image" src={Google} alt="Google" />
                  <span className="google-name">Google</span> 
                  
                </button> */}
              </div>
              <div className="actions">
                <p className="term">
                  By signing in, you agree to Streakos' terms of service and
                  privacy policy.
                </p>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
