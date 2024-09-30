import { useAppSelector } from "../../redux/store";
import ToastItem from "./toastItem";

// get the toast list from redux , and re-render with map func
const ToastList = () => {
  const toasts = useAppSelector((state) => state.PushMsgToast_Slice.toasts);

  return (
    <div className="toast  toast-center z-30  mb-[3.5rem] md:mb-2">
      {toasts.map((item, index) => (
        <ToastItem data={item} key={index} />
      ))}
    </div>
  );
};

export default ToastList;
