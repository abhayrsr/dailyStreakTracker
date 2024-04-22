import "./signIn.css";
import Popup from "reactjs-popup";
import Google from "../../../assets/images/google.svg";

export default function Signin() {
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
               <button className="google-button">
                <img className="google-image" src={Google} alt="Google"/>
                <span className="google-name">Google</span>
               </button>
              </div>
              <div className="actions">
                <p className="term">By signing in, you agree to codeProMax's terms of service and privacy policy.</p>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}
