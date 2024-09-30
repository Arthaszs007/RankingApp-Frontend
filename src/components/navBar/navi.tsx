import { useEffect } from "react";
import AuthPanel from "../auth/authPanel";
import MyNav from "./myNav";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { VerifyJWT } from "../../lib/JWT";
import { setSession } from "../../redux/feathers/Session_Slice";
import { Logout_action } from "../../lib/action/auth";
import { usePushMsgToast } from "../../lib/hook/pushMsgToast";

const Navi = () => {
  const dispatch = useDispatch<AppDispatch>();
  // get username from redux
  const username = useAppSelector((state) => state.Session_Slice.username);
  // get the toast msg func and pass to log out func
  const { msgToast } = usePushMsgToast();

  //new open-> check jwt ->verify if have-> show name or show login
  //invoke one time the jwt check when this component render
  useEffect(() => {
    //first open page to check jwt
    const fetchData = async () => {
      const res = await VerifyJWT();
      if (res instanceof Error) {
        return;
      } else {
        dispatch(setSession(res));
      }
    };
    fetchData();
  }, []);

  // open the modal of auth
  const OpenModal = () => {
    const modal = document.getElementById("auth_modal");
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };
  // close the modal of auth
  const CloseModal = () => {
    const modal = document.getElementById("auth_modal");
    if (modal) {
      (modal as HTMLDialogElement).close();
    }
  };
  return (
    <div className="flex flex-row justify-between w-full h-16 items-center bg-orange-300  shadow-md">
      <div className=" hidden sm:block">
        <a className="btn btn-ghost text-xl">React+Go Project</a>
      </div>
      <div className="flex flex-row gap-6 ml-2">
        <MyNav path="/home" name="Home" />
        <MyNav path="/rank" name="Rank" />
      </div>
      <div className="mr-2">
        {/* check the info of redux, if valid, show info, or show login */}
        {username ? (
          <a
            className="btn bg-orange-300 "
            onClick={() => Logout_action(dispatch, msgToast)}
          >
            {"Welcome, " + username}
          </a>
        ) : (
          <a className="btn bg-orange-300 " onClick={OpenModal}>
            Sign In
          </a>
        )}

        <AuthPanel CloseModal={CloseModal} />
      </div>
    </div>
  );
};

export default Navi;
