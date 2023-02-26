const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
}

const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "light" : "dark";
        }
    }
})

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;