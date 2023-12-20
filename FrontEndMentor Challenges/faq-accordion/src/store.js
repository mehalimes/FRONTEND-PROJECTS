import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../src/faq/faqSlice";

export default configureStore({
    reducer: {
        faq : faqReducer,
    },
});