import { createSlice } from "@reduxjs/toolkit";

export const companiesSlice = createSlice({
    name: "companies",
    initialState: {
        list: [
            {
                name: "Anglo Eastern",
                service: "Provider of ship management services",
            },
            {
                name: "EPAM",
                service: "Software development",
            },
            {
                name: "Technorely",
                service: "Software development",
            },
            {
                name: "Maersk",
                service: "Provider of ship management services",
            },
            {
                name: "Enzyme",
                service: "Yeast production",
            },
            {
                name: "Roshen",
                service: "Sweets",
            },
            {
                name: "Anglo Eastern",
                service: "Provider of ship management services",
            },
            {
                name: "EPAM",
                service: "Software development",
            },
            {
                name: "Technorely",
                service: "Software development",
            },
            {
                name: "Maersk",
                service: "Provider of ship management services",
            },
            {
                name: "Enzyme",
                service: "Yeast production",
            },
            {
                name: "Roshen",
                service: "Sweets",
            },
        ],
        selectedCompany: "",
        sort: "",
    },

    reducers: {
        setCompaniesList: (state, action) => {
            state.list = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        }
    },
});

export const { setCompaniesList, setSort } = companiesSlice.actions;
export default companiesSlice.reducer;