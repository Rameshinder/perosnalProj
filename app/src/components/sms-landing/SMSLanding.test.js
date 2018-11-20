import React from 'react'
// import { shallow } from 'enzyme'
import { shallow, mount } from 'enzyme'

import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import UserInfoService from '../../common/services/api/UserInfoService'

import { SMSLanding } from './index'

jest.mock('@anz/spinner', () => 'AnzSpinner')
jest.mock('@anz/button', () => 'button')
jest.mock('@anz/alert', () => 'alert')
jest.mock('@anz/icon/filled/generic/search', () => 'search')
jest.mock('@anz/icon/line/arrows-and-symbols/cancel-fail', () => 'clear')
jest.mock('../global/help/index', () => 'help')
jest.mock('../global/print/index', () => 'print')

jest.mock('@anz/tooltip', () => 'Tooltip')
jest.mock('@anz/tooltip', () => 'TooltipWrapper')
jest.mock('@anz/icon/line/arrows-and-symbols/information', () => 'InfoIcon')

const mockStore = configureMockStore()
const store = mockStore({data: null,
  isPending: false,
  error: false})

jest.mock('../../common/services/api/UserInfoService', () => {
  const UserInfo = {
    'info': [
      {
        'number': '4072200010054642',
        'productCode': 'PCP',
        'productSubCode': '008',
        'designCode': '0',
        'status': '',
        'name': 'MR PATRICK GLEN WILKINS',
        'category': 'CREDIT',
        'type': 'ANZ Frequent Flyer Platinum Visa',
        'primary': true,
        'activationRequired': false,
        'eligibleFor': [
          'AppleWalletProvisioning',
          'CardActivation',
          'SetPin',
          'ShowTC'
        ],
        'cardSetID': '4072200010054642',
        'reissued': false
      }]
  }
  return {
    getUserInfo: jest.fn(() => Promise.resolve(UserInfo))
  }
})

describe('SMSLanding', () => {
  const FetchRequest = jest.fn()
  const FetchUserInfoSuccess = jest.fn()
  const FetchUserInfoFailure = jest.fn()
  const FetchFailure = jest.fn()
  const showSpinner = jest.fn()
  const hideSpinner = jest.fn()
  const History = {
    push: jest.fn()
  }
  const app = shallow(
    <Provider store={store}>
      <SMSLanding />
    </Provider>
  )

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('SMSLanding should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <SMSLanding />
      </Provider>)
  })

  it('SMSLanding should call fetch', () => {
    let wrapper = mount(
      <Provider store={store}>
        <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
      </Provider>)
    wrapper.setState({card: '1234567890123'})
    expect(wrapper).toBeDefined()
  })

  it('SMSLanding should call sendSMSAndNavigate', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'sendSMSAndNavigate')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({card: '1234567890123'})
    const btnSendSMS = wrapper.find('[name="sms-navigate"]')
    btnSendSMS.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding should call verifyOTP', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'verifyOTP')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} history={History} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({showOTPField: true})
    const btnSendSMS = wrapper.find('[name="verify-otp-continue"]')
    btnSendSMS.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding should call onCacelClick', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'onCacelClick')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} history={History} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({showOTPField: true})
    const btnCancelSMS = wrapper.find('[name="cancel-send-sms"]').at(1)
    btnCancelSMS.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding should call resendSMS', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'resendSMS')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} history={History} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({showOTPField: true})
    const linkCancelSms = wrapper.find('[name="resendSMS"]').at(1)
    linkCancelSms.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding should call handleOTPChange', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'handleOTPChange')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} history={History} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({showOTPField: true})
    wrapper.setState({userInfo: {data: {mobileNumber: '123456789'}}})
    const txtOTP = wrapper.find('[name="otp-text"]').at(1)
    txtOTP.simulate('change', {value: 'abc'})
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding should call handleOTPChange', () => {
    const spy = jest.spyOn(SMSLanding.prototype, 'handleOTPChange')
    let wrapper = mount(
      <SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} history={History} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} location={{search: {card: '1234567890987'}}} />
    )
    wrapper.setState({showOTPField: true})
    wrapper.setState({userInfo: {data: {mobileNumber: '123456789'}}})
    const txtOTP = wrapper.find('[name="otp-text"]').at(1)
    txtOTP.simulate('change', {value: '123456'})
    expect(spy).toHaveBeenCalled()
  })

  it('SMSLanding snapshot test with fetch', async () => {
    const wrapper = shallow(<SMSLanding actions={{FetchRequest, FetchUserInfoSuccess, FetchUserInfoFailure, FetchFailure, showSpinner, hideSpinner}} state={{selectedCard: {data: {number: '123456789'}}, cardList: {cards: {jwtToken: '12345678'}}}} history={History} location={{search: {card: '1234567890987'}}} />)
    wrapper.instance().componentWillMount()
    expect(UserInfoService.getUserInfo).toHaveBeenCalled()
    expect(UserInfoService.getUserInfo).toHaveBeenCalled()
  })
})
