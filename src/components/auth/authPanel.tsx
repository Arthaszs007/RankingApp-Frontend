import { useState } from "react";
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";

const AuthPanel = ({ CloseModal }: { CloseModal: () => void }) => {
  // manage the panel forms to show
  const [panelState, setPanelSate] = useState("signin");

  // change the panel state to change the form , and pass this to form components to use
  const showSignIn = () => setPanelSate("signin");

  const showSignUp = () => setPanelSate("signup");

  // use conditioanl case to match panel state
  const renderPanel = () => {
    switch (panelState) {
      case "signin":
        return <SignInForm changeState={showSignUp} CloseModal={CloseModal} />;
      case "signup":
        return <SignUpForm changeState={showSignIn} CloseModal={CloseModal} />;
    }
  };

  return (
    <dialog id="auth_modal" className="modal">
      <div className="modal-box h-[30rem] flex flex-col gap-6 items-center">
        <h3 className="font-bold text-lg">Hello!</h3>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          {renderPanel()}
        </form>
      </div>
    </dialog>
  );
};

export default AuthPanel;
