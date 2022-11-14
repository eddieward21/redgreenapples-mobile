import { createSlice, configureStore } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'counter',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems= (state) => state.basket.items
export default basketSlice.reducer;


const store = configureStore({
  reducer: basketSlice.reducer
})

