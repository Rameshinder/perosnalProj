import * as actionType from './action_types'
import * as action from './index'

describe('Actions', () => {
  it('should showSpinner', () => {
    expect(action.showSpinner().payload).resolves.toBe(true)
  })
  it('should hideSpinner', () => {
    expect(action.hideSpinner().payload).resolves.toBe(false)
  })
  it('should resetSpinner', () => {
    expect(action.resetStateValue(actionType.SHOW_SPINNER).type).toEqual('SHOW_SPINNER_RESET')
  })
  it('should FetchFailure', () => {
    expect(action.FetchFailure(actionType.FETCH_FAILURE).type).toEqual('FETCH_FAILURE')
  })
  it('should FetchRequest', () => {
    expect(action.FetchRequest(actionType.FETCH_REQUEST).type).toEqual('FETCH_REQUEST')
  })
  it('should FetchCardListSuccess', () => {
    expect(action.FetchCardListSuccess(actionType.FETCH_CARD_LIST_SUCCESS).type).toEqual('FETCH_CARD_LIST_SUCCESS')
  })
  it('should FetchMenuItemsFailure', () => {
    expect(action.FetchMenuItemsFailure(actionType.FETCH_MENU_ITEMS_FAILURE).type).toEqual('FETCH_MENU_ITEMS_FAILURE')
  })
  it('should FetchMenuItemsSuccess', () => {
    expect(action.FetchMenuItemsSuccess(actionType.FETCH_MENU_ITEMS_SUCCESS).type).toEqual('FETCH_MENU_ITEMS_SUCCESS')
  })
  it('should FetchUserInfoSuccess ', () => {
    expect(action.FetchUserInfoSuccess(actionType.FETCH_USER_INFO_SUCCESS).type).toEqual('FETCH_USER_INFO_SUCCESS')
  })
  it('should FetchUserInfoFailure ', () => {
    expect(action.FetchUserInfoFailure(actionType.FETCH_USER_INFO_FAILURE).type).toEqual('FETCH_USER_INFO_FAILURE')
  })
})
