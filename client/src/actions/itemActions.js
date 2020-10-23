import axios from 'axios'
import { GET_ITEMS, ITEMS_LOADING } from '../actions/types'

export const getItems = () => dispatch => {
  dispatch(setItemsLoading())
  axios.get('/image/192b826b538b39197e1a942446f1f67a.jpg')
       .then(res => dispatch({
         type: GET_ITEMS,
         payload: res.data
       }))
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
