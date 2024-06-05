import { legacy_createStore as createStore } from "redux"
import { userReducer } from "./usersReducer"






export const store = createStore(userReducer)