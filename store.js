import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketslice'

export default configureStore({
  reducer: {
    basket : basketReducer
  }
})