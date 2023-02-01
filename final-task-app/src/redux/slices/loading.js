import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    ok: true,
    fail: false,
    loading: false,
  },
  reducers: {
    setOk: (store) => {
      store.ok = true;
      store.fail = false;
      store.loading = false;
      console.log("Redux: OK")
    },
    setFail: (store) => {
      store.ok = false;
      store.fail = true;
      store.loading = false;
      console.log("Redux: Fail")

    },
    setLoading: (store) => {
      store.ok = false;
      store.fail = false;
      store.loading = true;
      console.log("Redux: Loading")
    }
  }
})

export const { setOk, setFail, setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;