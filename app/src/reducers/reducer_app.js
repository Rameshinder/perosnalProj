import typeToReducer from 'type-to-reducer'
import * as actionTypes from '../actions/action_types'

const INITIAL_STATE = {
  data: null,
  isPending: false,
  error: false
}

export const ShowSpinnerReducer = typeToReducer({
  [ actionTypes.SHOW_SPINNER ]: {
    FULFILLED: (state, action) => ({
      ...INITIAL_STATE,
      show: action.payload
    })
  }
}, INITIAL_STATE)

export const FetchRequestReducer = typeToReducer({
  [ actionTypes.FETCH_REQUEST ]: {
    FULFILLED: (state, action) => ({
      ...INITIAL_STATE,
      status: action.status
    })
  }
}, INITIAL_STATE)

export const FetchFailureReducer = typeToReducer({
  [ actionTypes.FETCH_FAILURE ]: {
    FULFILLED: (state, action) => ({
      ...INITIAL_STATE,
      status: action.status,
      error: action.error
    })
  }
}, INITIAL_STATE)

export function CardListReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST : {
      const requested = Object.assign({}, state, {
        status: action.status
      })
      return requested
    }
    case actionTypes.FETCH_CARD_LIST_SUCCESS : {
      const successful = Object.assign({}, state, {
        status: action.status,
        cards: action.cardlist
      })
      return successful
    }
    case actionTypes.FETCH_FAILURE : {
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      })
      return failed
    }
    default: {
      return state
    }
  }
}

export function MenuItemsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST : {
      const requested = Object.assign({}, state, {
        status: action.status
      })
      return requested
    }
    case actionTypes.FETCH_MENU_ITEMS_SUCCESS : {
      const successful = Object.assign({}, state, {
        status: action.status,
        data: action.menuItems
      })
      return successful
    }
    case actionTypes.FETCH_MENU_ITEMS_FAILURE : {
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      })
      return failed
    }
    default: {
      return state
    }
  }
}

export function UserInfoReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST : {
      const requested = Object.assign({}, state, {
        status: action.status
      })
      return requested
    }
    case actionTypes.FETCH_USER_INFO_SUCCESS : {
      const successful = Object.assign({}, state, {
        status: action.status,
        data: action.userInfo
      })
      return successful
    }
    case actionTypes.FETCH_USER_INFO_FAILURE : {
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      })
      return failed
    }
    default: {
      return state
    }
  }
}

export function SetSelectedCardReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_CARD : {
      const newState = Object.assign({}, state, {
        data: action.selectedCard
      })
      return newState
    }
    default: {
      return state
    }
  }
}
