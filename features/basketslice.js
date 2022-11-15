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
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      )
      let newBasket = [...state.items]
      if(index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn("item is not in basket. cannot be removed.")
      }
      state.items = newBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export const selectBasketItems= (state) => state.basket.items
export default basketSlice.reducer;

export const selectItemsById = (state,id) => 
  state.basket.items.filter((item) => item.id === id)

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

const store = configureStore({
  reducer: basketSlice.reducer
})

