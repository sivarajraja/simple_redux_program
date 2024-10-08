import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "../slice/UserSlice";
const Store = configureStore({
    reducer:{
        UserInfo : userSlice,
    }
});

export default Store;