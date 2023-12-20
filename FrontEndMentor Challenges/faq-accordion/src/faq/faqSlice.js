import { createSlice } from "@reduxjs/toolkit";

export const faqSlice = createSlice({
    name: "faq",
    initialState: {
        faqs: [
            {
                text: "What is Frontend Mentor, and how will it help me?",
                active: false
            },
            {
                text: "Is Frontend Mentor free?",
                active: false
            },
            {
                text: "Can I use Frontend Mentor projects in my portfolio?",
                active: false
            },
            {
                text: "How can I get help if I'm stuck on a challenge?",
                active: false
            }
        ]
    },
    reducers: {
        changeActiveState: (state, action) => {
            state.faqs.map((item, index, array) => {
                if (index == action.payload) {
                    item.active = !item.active;
                }
            });
        },
        changeAllToFalse: (state, action) => {
            state.faqs.map((item, index, array) => {
                item.active = false;
            });
        }
    }
});

export const { changeActiveState, changeAllToFalse } = faqSlice.actions;

export default faqSlice.reducer;