// receive a param as TOAST_REDUX type
const ToastItem = ({ data }: { data: TOAST_REDUX }) => {
  return (
    <div className={`alert ${data.type}`}>
      <span>{data.msg}</span>
    </div>
  );
};

export default ToastItem;
