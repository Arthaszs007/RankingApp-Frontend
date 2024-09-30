import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { pushMsg, removeMsg } from "../../redux/feathers/PushMsgToast_Slice"


export const usePushMsgToast = () => {
    const dispatch = useDispatch<AppDispatch>()
    //return a func ,receive a param as toast data contruct and invoke push msg into redux, defualt 3 seconds later to invoke remove func
    const msgToast =(toasts:TOAST_REDUX,timeout= 2000)=>{
    dispatch(pushMsg(toasts))
    setTimeout(() => {
      dispatch(removeMsg())  
    }, timeout);
   }
    return{msgToast}
}
