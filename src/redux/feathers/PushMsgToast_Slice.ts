import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const PushMsgToastSlice = createSlice(
    {
        name:"pushMsgToastSlice",
        initialState:{
            toasts: [] as TOAST_REDUX[]
        },reducers:{
            pushMsg:(state,action:PayloadAction<TOAST_REDUX>)=>{
                state.toasts.push(action.payload);
            },
            removeMsg:(state)=>{
                state.toasts.shift()
            },
        }
    }
)

export const {pushMsg,removeMsg} = PushMsgToastSlice.actions;
export default PushMsgToastSlice.reducer;