import { polyfill } from 'es6-promise'

import * as actionType from './action_types'

// Initiate polyfill for IE support of Promise
polyfill()

export function showSpinner () {
  return {
    type: actionType.SHOW_SPINNER,
    payload: new Promise((resolve) => {
      return resolve(true)
    })
  }
}

export function hideSpinner () {
  return {
    type: actionType.SHOW_SPINNER,
    payload: new Promise((resolve) => {
      return resolve(false)
    })
  }
}

export function resetStateValue (resetActionType) {
  return {
    type: resetActionType + '_RESET',
    payload: {}
  }
}

export function FetchFailure (error) {
  const FETCH_FAILURE = 'FETCH_FAILURE'
  return {
    type: FETCH_FAILURE,
    status: 'error',
    error
  }
}

export function FetchRequest () {
  const FETCH_REQUEST = 'FETCH_REQUEST'
  return {
    type: FETCH_REQUEST,
    status: 'loading'
  }
}

export function FetchCardListSuccess (cardlist) {
  const FETCH_CARD_LIST_SUCCESS = 'FETCH_CARD_LIST_SUCCESS'
  return {
    type: FETCH_CARD_LIST_SUCCESS,
    status: 'success',
    cardlist
  }
}

export function FetchMenuItemsFailure (error) {
  const FETCH_MENU_ITEMS_FAILURE = 'FETCH_MENU_ITEMS_FAILURE'
  return {
    type: FETCH_MENU_ITEMS_FAILURE,
    status: 'error',
    error
  }
}

export function FetchMenuItemsSuccess (menuItems) {
  const FETCH_MENU_ITEMS_SUCCESS = 'FETCH_MENU_ITEMS_SUCCESS'
  return {
    type: FETCH_MENU_ITEMS_SUCCESS,
    status: 'success',
    menuItems
  }
}

export function FetchUserInfoSuccess (userInfo) {
  const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS'
  return {
    type: FETCH_USER_INFO_SUCCESS,
    status: 'success',
    userInfo
  }
}

export function FetchUserInfoFailure (error) {
  const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE'
  return {
    type: FETCH_USER_INFO_FAILURE,
    status: 'error',
    error
  }
}

export function SetSelectedCard (card) {
  const SET_SELECTED_CARD = 'SET_SELECTED_CARD'
  return {
    type: SET_SELECTED_CARD,
    status: 'error',
    selectedCard: card
  }
}
