import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const SessionSlice = createSlice(
    {
        name:"sessionSlice",
        initialState:{
            username:""
        },reducers:{
            setSession:(state,action:PayloadAction<string>)=>{
                state.username = action.payload;
            }
        }
    }
)

export const {setSession} = SessionSlice.actions;
export default SessionSlice.reducer;