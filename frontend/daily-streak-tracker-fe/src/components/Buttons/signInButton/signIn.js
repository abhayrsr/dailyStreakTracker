import "./signIn.css";
import Popup from "reactjs-popup";
import { GoogleLogin } from "@react-oauth/google";

export default function Signin() {
  const responseMessage = (response) => {
    console.log(response);
    console.log("x")
  };
  const errorMessage = (error) => {
    console.log(error);
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
                  onSuccess={responseMessage}
                  onError={errorMessage}
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
