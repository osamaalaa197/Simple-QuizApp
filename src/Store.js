import { rootReducer } from "./Store/reducers/rootReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer })

export default store