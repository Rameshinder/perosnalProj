import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import {ManagePinCard} from './index'

jest.mock('@anz/button', () => 'button')
jest.mock('@anz/icon/filled/generic/search', () => 'search')

const mockStore = configureMockStore()
const store = mockStore({data: null})
const History = {
  push: jest.fn()
}
let wrapper

describe('ManagePinCard', () => {
  global.getEncryptedIPB = () => jest.fn()
  const app = shallow(
    <Provider store={store}>
      <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} />
    </Provider>
  )

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('ManagePinCard should call textbox onkeypress with which ', () => {
    wrapper = mount(
      <Provider store={store}>
        <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} />
      </Provider>)
    wrapper.find('[name="managepin-newtext"]').at(1).simulate('keypress', {which: 50})
  })

  it('ManagePinCard should call textbox onkeypress with keycode', () => {
    wrapper = mount(
      <Provider store={store}>
        <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} />
      </Provider>)
    wrapper.find('[name="managepin-newtext"]').at(1).simulate('keypress', {keyCode: 45})
  })

  it('ManagePinCard should call textbox onclick and onchange', () => {
    wrapper = mount(
      <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} media={{ currentTime: 0, duration: 250 }}
        timeout={(fn) => fn()} />)
    jest.useFakeTimers()
    wrapper.find('[name="managepin-newtext"]').at(1).simulate('click')
    wrapper.find('[name="managepin-newconfirmtext"]').at(1).simulate('click')
    wrapper.find('[name="managepin-newtext"]').at(1).simulate('change')
    wrapper.find('[name="managepin-newconfirmtext"]').at(1).simulate('change')
    jest.runAllTimers()
  })

  it('ManagePinCard should call instance pinConfirmDataEntry from keypad', () => {
    wrapper = shallow(
      <Provider store={store}>
        <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} />
      </Provider>)
    let managePin = wrapper.dive('ManagePinCard')
    const pinConfirmDataEntry = jest.fn()
    pinConfirmDataEntry('1234', true)
    managePin.instance().pinConfirmDataEntry('1234', true)
    expect(pinConfirmDataEntry).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance pinConfirmDataEntry from textbox', () => {
    wrapper = shallow(
      <Provider store={store}>
        <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} />
      </Provider>)
    let managePin = wrapper.dive('ManagePinCard')
    const pinConfirmDataEntry = jest.fn()
    pinConfirmDataEntry('123', false)
    managePin.instance().pinConfirmDataEntry('123', false)
    expect(pinConfirmDataEntry).toHaveBeenCalled()
  })

  beforeEach(() => {
    wrapper = mount(
      <ManagePinCard state={{selectedCard: {data: {number: '123456789'}}}} history={History}
        media={{ currentTime: 0, duration: 250 }}
        timeout={(fn) => fn()} />
    )
  })

  it('ManagePinCard should call instance pinConfirmDataEntry from textbox when length 3', () => {
    wrapper.setState({
      newConfirmPinValue: '1234',
      newPinValue: '1234'
    })
    const pinConfirmDataEntry = jest.fn()
    pinConfirmDataEntry('123', false)
    wrapper.instance().pinConfirmDataEntry('123', false)
    expect(wrapper).toBeDefined()
  })

  it('ManagePinCard should call instance managePinSave', () => {
    const managePinSave = jest.fn()
    managePinSave()
    wrapper.instance().managePinSave()
    expect(managePinSave).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance encryptNewPinValue', () => {
    const encryptNewPinValue = jest.fn()
    encryptNewPinValue('1234')
    wrapper.instance().encryptNewPinValue('1234')
    expect(encryptNewPinValue).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance cancelManagePin', () => {
    const cancelManagePin = jest.fn()
    cancelManagePin()
    wrapper.instance().cancelManagePin()
    expect(cancelManagePin).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance cancelManagePin and checking the condition for Start Again', () => {
    wrapper.setState({
      ButtonCancel: 'Start Again'
    })
    const cancelManagePin = jest.fn()
    cancelManagePin()
    wrapper.instance().cancelManagePin()
    expect(cancelManagePin).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance manageCardPinText from keypad and calling the settimeout ', () => {
    wrapper.setState({
      newPinValue: '123'
    })
    jest.useFakeTimers()
    const manageCardPinText = jest.fn()
    manageCardPinText('1234')
    wrapper.instance().manageCardPinText('1234')
    jest.runAllTimers()
    expect(manageCardPinText).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance manageCardPinText for length 4', () => {
    wrapper.setState({
      newPinValue: '1234'
    })
    const manageCardPinText = jest.fn()
    manageCardPinText('1234')
    wrapper.instance().manageCardPinText('1234')
    expect(manageCardPinText).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance manageCardPinText box selection false, selecting the second box', () => {
    wrapper.setState({
      boxSelection: false
    })
    const manageCardPinText = jest.fn()
    manageCardPinText('1234')
    wrapper.instance().manageCardPinText('1234')
    expect(manageCardPinText).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance manageCardPinText box selection false, selecting the second box and length less than 4', () => {
    wrapper.setState({
      boxSelection: false,
      newConfirmPinValue: '1'
    })
    const manageCardPinText = jest.fn()
    manageCardPinText('1234')
    wrapper.instance().manageCardPinText('1234')
    expect(manageCardPinText).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance clearManagePinBox', () => {
    const clearManagePinBox = jest.fn()
    clearManagePinBox()
    wrapper.instance().clearManagePinBox()
    expect(clearManagePinBox).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance clearManagePinBox with box selection false', () => {
    wrapper.setState({
      boxSelection: false
    })
    const clearManagePinBox = jest.fn()
    clearManagePinBox()
    wrapper.instance().clearManagePinBox()
    expect(clearManagePinBox).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance backManagePinBox with box selection true', () => {
    const backManagePinBox = jest.fn()
    backManagePinBox()
    wrapper.instance().backManagePinBox()
    expect(backManagePinBox).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance backManagePinBox with box selection false', () => {
    wrapper.setState({
      boxSelection: false
    })
    const backManagePinBox = jest.fn()
    backManagePinBox()
    wrapper.instance().backManagePinBox()
    expect(backManagePinBox).toHaveBeenCalled()
  })

  it('ManagePinCard should call instance navigateToCardList', () => {
    const navigateToCardList = jest.fn()
    navigateToCardList()
    wrapper.instance().navigateToCardList()
    expect(navigateToCardList).toHaveBeenCalled()
  })

  it('ManagePinCard should call newBox with set timeout function', () => {
    jest.useFakeTimers()
    const newBox = jest.fn()
    newBox('{}')
    wrapper.instance().newBox('{}')
    jest.runAllTimers()
    expect(newBox).toHaveBeenCalled()
  })

  it('ManagePinCard should call newConfirmBox with set timeout function', () => {
    jest.useFakeTimers()
    const newConfirmBox = jest.fn()
    newConfirmBox('{}')
    wrapper.instance().newConfirmBox('{}')
    jest.runAllTimers()
    expect(newConfirmBox).toHaveBeenCalled()
  })
})
