import * as reducer from './reducer_app'
import * as actionType from '../actions/action_types'
import rootReducer from './index'

describe('rootReducer', () => {
  test('rootReducer invoked without crashing', () => {
    expect(rootReducer).toMatchSnapshot()
  })
})

describe('ShowSpinnerReducer', () => {
  it('should return the initial state', () => {
    expect(reducer.ShowSpinnerReducer(undefined, {})).toEqual({
      data: null,
      isPending: false,
      error: false
    })
  })

  // it('actionType.SHOW_SPINNER', () => {
  //   expect(reducer.ShowSpinnerReducer(undefined, {
  //     type: actionType.SHOW_SPINNER,
  //     payload: true
  //   })).toEqual({
  //     data: null,
  //     isPending: false,
  //     error: false,
  //     show: true
  //   })
  // })
})

describe('CardListReducer', () => {
  it('initial state', () => {
    expect(reducer.CardListReducer(undefined, {})).toEqual({
      data: null,
      isPending: false,
      error: false
    })
  })

  it('actionType.FETCH_REQUEST', () => {
    expect(reducer.CardListReducer(undefined, {
      type: actionType.FETCH_REQUEST,
      status: true
    })).toEqual({
      data: null,
      isPending: false,
      error: false,
      status: true
    })
  })

  it('actionType.FETCH_CARD_LIST_SUCCESS', () => {
    expect(reducer.CardListReducer(undefined, {
      type: actionType.FETCH_CARD_LIST_SUCCESS,
      status: true,
      cardlist: {'card': '1'}
    })).toEqual({
      data: null,
      isPending: false,
      error: false,
      status: true,
      cards: {'card': '1'}
    })
  })

  it('CardListReducer actionType.FETCH_FAILURE', () => {
    expect(reducer.CardListReducer(undefined, {
      type: actionType.FETCH_FAILURE,
      status: true,
      error: 'error'
    })).toEqual({
      data: null,
      isPending: false,
      error: 'error',
      status: true
    })
  })
})

describe('MenuItemsReducer', () => {
  it('default state', () => {
    expect(reducer.MenuItemsReducer(undefined, {})).toEqual({
      data: null,
      isPending: false,
      error: false
    })
  })

  it('actionType.FETCH_REQUEST', () => {
    expect(reducer.MenuItemsReducer(undefined, {
      type: actionType.FETCH_REQUEST,
      status: true
    })).toEqual({
      data: null,
      isPending: false,
      error: false,
      status: true
    })
  })

  it('actionType.FETCH_MENU_ITEMS_SUCCESS', () => {
    expect(reducer.MenuItemsReducer(undefined, {
      type: actionType.FETCH_MENU_ITEMS_SUCCESS,
      status: true,
      menuItems: 'sample data'
    })).toEqual({
      isPending: false,
      error: false,
      status: true,
      data: 'sample data'
    })
  })

  it('actionType.FETCH_MENU_ITEMS_FAILURE', () => {
    expect(reducer.MenuItemsReducer(undefined, {
      type: actionType.FETCH_MENU_ITEMS_FAILURE,
      status: true,
      error: 'error'
    })).toEqual({
      data: null,
      isPending: false,
      error: 'error',
      status: true
    })
  })
})

describe('UserInfoReducer ', () => {
  it('actionType.FETCH_REQUEST', () => {
    expect(reducer.UserInfoReducer(undefined, {
      type: actionType.FETCH_REQUEST,
      status: true
    })).toEqual({
      data: null,
      isPending: false,
      error: false,
      status: true
    })
  })

  it('actionType.FETCH_USER_INFO_SUCCESS', () => {
    expect(reducer.UserInfoReducer(undefined, {
      type: actionType.FETCH_USER_INFO_SUCCESS,
      status: true,
      userInfo: 'sample data'
    })).toEqual({
      isPending: false,
      error: false,
      status: true,
      data: 'sample data'
    })
  })

  it('actionType.FETCH_USER_INFO_FAILURE ', () => {
    expect(reducer.UserInfoReducer(undefined, {
      type: actionType.FETCH_USER_INFO_FAILURE,
      status: true,
      error: 'error'
    })).toEqual({
      data: null,
      isPending: false,
      error: 'error',
      status: true
    })
  })
})
