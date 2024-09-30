import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import Session_Slice from "./feathers/Session_Slice";
import refreshData_Slice from "./feathers/RefreshData_Slice";
import PushMsgToast_Slice from "./feathers/PushMsgToast_Slice";

export const  store  = configureStore({
    reducer:{
        Session_Slice,
        refreshData_Slice,
        PushMsgToast_Slice
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<Rootstate> = useSelector;