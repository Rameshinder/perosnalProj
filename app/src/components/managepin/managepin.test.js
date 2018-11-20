import React from 'react'
import { shallow, mount } from 'enzyme'

import CardService from '../../common/services/api/cardService'

import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { ManagePin } from './index'

import CardListJson from '../global/stubs/cardList.json'

jest.mock('@anz/spinner', () => 'AnzSpinner')
jest.mock('@anz/button', () => 'Button')
jest.mock('@anz/alert', () => 'Alert')
jest.mock('@anz/icon/filled/generic/search', () => 'Search')
jest.mock('@anz/icon/line/arrows-and-symbols/cancel-fail', () => 'Clear')
jest.mock('../global/help/index', () => 'Help')
jest.mock('../global/print/index', () => 'Print')

jest.mock('@anz/tooltip', () => 'Tooltip')
jest.mock('@anz/tooltip', () => 'TooltipWrapper')
jest.mock('@anz/icon/line/arrows-and-symbols/information', () => 'InfoIcon')

const mockStore = configureMockStore()
const store = mockStore({data: null,
  isPending: false,
  error: false,
  cardList: CardListJson.cards})

jest.mock('../../common/services/api/cardService', () => {
  const CardList = {
    'cards': [
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
    getCardDetails: jest.fn(() => Promise.resolve(CardList))
  }
})

describe('ManagePin', () => {
  const showSpinner = jest.fn()
  const hideSpinner = jest.fn()
  const FetchRequest = jest.fn()
  const FetchUserInfoSuccess = jest.fn()
  const History = {
    push: jest.fn()
  }

  const app = shallow(
    <Provider store={store}>
      <ManagePin />
    </Provider>

  )

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('ManagePin should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <ManagePin />
      </Provider>)
  })

  it('ManagePin should call fetch', () => {
    let wrapper = mount(
      <ManagePin actions={{FetchRequest, FetchUserInfoSuccess, showSpinner, hideSpinner}} store={store} state={{cardList: CardListJson}} location={{search: {sessionId: '123'}}} />)
    wrapper.setState({currentlyDisplayedCards: CardListJson})
    expect(wrapper).toBeDefined()
  })

  it('ManagePin should handle cancelClick', () => {
    const spy = jest.spyOn(ManagePin.prototype, 'handleCancelClick')
    let wrapper = mount(
      <ManagePin actions={{FetchRequest, FetchUserInfoSuccess, showSpinner, hideSpinner}} store={store} state={{cardList: CardListJson}} location={{search: {sessionId: '123'}}} />
    )
    wrapper.setState({currentlyDisplayedCards: CardListJson})
    const btnCancel = wrapper.find('[name="footer-secondary-button"]').at(0)
    btnCancel.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('ManagePin should handle card selection', () => {
    const spy = jest.spyOn(ManagePin.prototype, 'handleCancelClick')
    let wrapper = mount(
      <ManagePin actions={{FetchRequest, FetchUserInfoSuccess, showSpinner, hideSpinner}} store={store} state={{cardList: CardListJson}} location={{search: {sessionId: '123'}}} />
    )
    wrapper.setState({currentlyDisplayedCards: CardListJson})
    const btnCancel = wrapper.find('[name="footer-secondary-button"]').at(0)
    btnCancel.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('Managepin snapshot test with fetch', async () => {
    const wrapper = shallow(<ManagePin actions={{FetchRequest, FetchUserInfoSuccess, showSpinner, hideSpinner}} store={store} state={{cardList: CardListJson}} history={History} location={{search: {sessionId: '123'}}} />)
    wrapper.instance().componentWillMount()
    expect(CardService.getCardDetails).toHaveBeenCalled()
    expect(CardService.getCardDetails).toHaveBeenCalled()
  })
})
