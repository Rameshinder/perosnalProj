import { combineReducers } from 'redux'
import * as AppReducers from './reducer_app'

const rootReducer = combineReducers({
  showSpinner: AppReducers.ShowSpinnerReducer,
  cardList: AppReducers.CardListReducer,
  menuItems: AppReducers.MenuItemsReducer,
  userInfo: AppReducers.UserInfoReducer,
  selectedCard: AppReducers.SetSelectedCardReducer
})

export default rootReducer
