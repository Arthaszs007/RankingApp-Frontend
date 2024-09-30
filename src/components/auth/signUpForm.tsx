import React, { useState } from "react";
import { Login_action, Register_action } from "../../lib/action/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

// receive 2 params as function, first to change the state to switch the form panel, second to close the auth modal
const SignUpForm = ({
  changeState,
  CloseModal,
}: {
  changeState: () => void;
  CloseModal: () => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const HandleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const HandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const HandleRepeat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeat(e.target.value);
  };

  // input verify and submit
  const HandleSubmit = async () => {
    if (!username || !password || !repeat) {
      setError("can't be empty");
      return;
    } else if (!(password === repeat)) {
      setError("twice password must be same");
      return;
    } else if (
      password.length < 6 ||
      repeat.length < 6 ||
      username.length < 6
    ) {
      setError("password or username must over 6 letters");
      return;
    } else if (
      repeat.length > 20 ||
      username.length > 20 ||
      username.length > 20
    ) {
      setError("password or username must be under 20 letters");
      return;
    }

    // reqire the api to register user
    const err = await Register_action(username, password, repeat);
    if (err) {
      setError(err.msg);
      return;
    }
    //invoke the login action after success to register
    const err2 = await Login_action(username, password, dispatch);
    if (err2) {
      setError(err2.msg);
      return;
    }
    // close the auth modal after success to register
    CloseModal();
  };

  return (
    <div className="flex flex-col gap-6 w-[16rem] sm:w-[20rem]">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="username"
          onChange={HandleUsername}
          value={username}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="password"
          onChange={HandlePassword}
          value={password}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="repeat password"
          onChange={HandleRepeat}
          value={repeat}
        />
      </label>

      <button
        className="btn btn-active btn-neutral"
        type="button"
        onClick={HandleSubmit}
      >
        Sign Up
      </button>
      <div className="flex flex-row justify-center gap-10 sm:gap-20">
        <a className="link link-primary" onClick={changeState}>
          Sign in
        </a>
        <a className="link link-primary">Forgot password</a>
      </div>
      {error && <p className="text-center text-red-600">{error}</p>}
    </div>
  );
};

export default SignUpForm;
