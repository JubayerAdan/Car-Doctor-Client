import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleMethod, githubMethod, facebookMethod } =
    useContext(AuthContext);
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center">
        <button onClick={googleMethod} className="btn btn-circle me-2">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
            className="max-h-7"
          />
        </button>
        <button onClick={githubMethod} className="btn btn-circle me-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            className="max-h-7"
          />
        </button>
        <button onClick={facebookMethod} className="btn btn-circle me-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
            alt=""
            className="max-h-7"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
