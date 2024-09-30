import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Login_action } from "../../lib/action/auth";

// receive 2 params as function, first to change the state to switch the form panel, second to close the auth modal
const SignInForm = ({
  changeState,
  CloseModal,
}: {
  changeState: () => void;
  CloseModal: () => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  // capture the username
  const HandleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  // capture the password
  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // input verify and submit
  const HandleSubmit = async () => {
    if (!username || !password) {
      setError("can't be empty");
      return;
    } else if (password.length < 6 || username.length < 6) {
      setError("password or username must over 6 letters");
      return;
    } else if (username.length > 20 || username.length > 20) {
      setError("password or username must be under 20 letters");
      return;
    }
    // invoke the login action,if err is not null, return
    const err = await Login_action(username, password, dispatch);
    if (err) {
      setError(err.msg);
      return;
    }

    // close the modal after success to login
    CloseModal();
  };
  return (
    <div className="flex flex-col gap-6 w-[16rem] sm:w-[20rem]">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="username"
          value={username}
          onChange={HandleUsername}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="password"
          value={password}
          onChange={HandlePassword}
        />
      </label>

      <button
        className="btn btn-active btn-neutral"
        type="button"
        onClick={HandleSubmit}
      >
        Sign In
      </button>
      <div className="flex flex-row justify-center gap-10 sm:gap-20">
        <a className="link link-primary" onClick={changeState}>
          Sign up
        </a>
        <a className="link link-primary">Forgot password</a>
      </div>
      {error && <p className="text-center text-red-600">{error}</p>}
    </div>
  );
};

export default SignInForm;
