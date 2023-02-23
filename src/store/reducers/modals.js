import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: 'modals',
    initialState: {
        isShow: false,
        currentModalKey: '',
        options: {},
    },
    reducers: {
        setIsShow(state, value) {
            state.isShow = value.payload
        },
        setCurrentModalKey(state, value) {
            state.currentModalKey = value.payload
        },
        setOptions(state, value) {
            state.options = value.payload
        },
        setCurrOptionByKey(state, optionsArr) {
            optionsArr.forEach(({ key, val }) => {
                state.options[key] = val;
            });
        },
    }
})

export const showModal = (value) => (dispatch) => {
    dispatch(setIsShow(true))
    dispatch(setCurrentModalKey(value.key))
    dispatch(setOptions(value))
}

export const hideModal = () => (dispatch) => {
    dispatch(setIsShow(false))
    dispatch(setCurrentModalKey(''))
    dispatch(setOptions({}))
}

export const {setIsShow, setCurrentModalKey, setOptions, setCurrOptionByKey} = modalsSlice.actions

export default modalsSlice.reducer
