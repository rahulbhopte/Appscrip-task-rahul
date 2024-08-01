import {createStore} from "redux"
import reducers from "./reducer/combine"
//here we get data from reducer combine component and sotre data in this redux store.
const store =createStore(reducers)

export default store