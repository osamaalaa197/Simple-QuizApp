import { createSlice } from "@reduxjs/toolkit";



const state = {
    UserName: "",
    Gmail: "",
  };

  const userSlice = createSlice({
    name:"user",
    initialState:state,
    reducers:{
        changeName:(state,action)=>{
            state.UserName=action.payload
        },
        changeGmail:(state,action)=>{
            state.Gmail=action.payload
        }
    }
  })


 export const userAction=userSlice.actions;
 export const userReducers=userSlice.reducer