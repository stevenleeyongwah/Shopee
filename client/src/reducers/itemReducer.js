import {v4 as uuid} from "uuid"
import { GET_ITEMS, ITEMS_LOADING } from '../actions/types'

const initialState = {
  items: [],
  loading: false
}

export default function(state=initialState, action){
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

// items: [
//   { id: uuid(), title: "Kindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB (International Version)", seller: "Amazon", price: "$209.84" },
//   { id: uuid(), title: "Apple AirPods Pro", seller: "Apple", price: "S$269.00" },
//   { id: uuid(), title: "Google Pixel 4a Black 128GB", seller: "Google", price: "S$499.00" },
//   { id: uuid(), title: "Kindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB (International Version)", seller: "Amazon", price: "$209.84" },
//   { id: uuid(), title: "Apple AirPods Pro", seller: "Apple", price: "S$269.00" },
//   { id: uuid(), title: "Google Pixel 4a Black 128GB", seller: "Google", price: "S$499.00" }
// ]
