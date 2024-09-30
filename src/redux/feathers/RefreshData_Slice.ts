import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const RefreshDataSlice = createSlice(
    {
        name:"refreshDataSlice",
        initialState:{
            homePage:false
        },reducers:{
            setRefreshData:(state,action:PayloadAction<boolean>)=>{
                state.homePage = action.payload;
            }
        }
    }
)

export const {setRefreshData} = RefreshDataSlice.actions;
export default RefreshDataSlice.reducer;