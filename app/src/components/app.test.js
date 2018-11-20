import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { App } from './app.js'

const mockStore = configureMockStore()
const store = mockStore({data: null,
  isPending: false,
  error: false})

// TODO: get webpack/jest working or compile things on publish in component library
jest.mock('@anz/icon/filled/generic/alert-notification', () => 'WhatsNewIcon')
jest.mock('@anz/icon/filled/generic/generic-contact-us', () => 'ContactUsIcon')
jest.mock('@anz/icon/filled/generic/email', () => 'MailIcon')
jest.mock('@anz/icon/filled/generic/login-security', () => 'LogoutIcon')
jest.mock('@anz/grid', () => 'AnzGrid')
jest.mock('@anz/grid', () => 'AnzCol')
jest.mock('@anz/styles-global', () => 'styleVars')
jest.mock('@anz/grid', () => 'AnzRow')
jest.mock('@anz/button', () => 'Button')
jest.mock('@anz/alert', () => 'Alert')

jest.mock('@anz/spinner', () => 'AnzSpinner')
jest.mock('./global/header', () => 'AnzHeader')
jest.mock('./footer', () => 'AnzFooter')
jest.mock('@anz/tooltip', () => 'Tooltip')
jest.mock('@anz/tooltip', () => 'TooltipWrapper')
jest.mock('@anz/icon/line/arrows-and-symbols/information', () => 'InfoIcon')

jest.mock('@anz/error', () => {
  return (props) => {
    return (
      <div {...props}>{props.children}</div>
    )
  }
})

jest.useFakeTimers()

describe('<App />', () => {
  it('App should render without crashing', () => {
    shallow(<App state={{showSpinner: {show: true}}} />)
  })

  it('Loads spinner', () => {
    const component = shallow(<App state={{showSpinner: {show: true}}} />)
    expect(component.find('[data-test-id="loading-message"]')).toBeDefined()
  })

  it('Loads spinner', () => {
    const component = shallow(<App state={{showSpinner: {show: false}}} />)
    expect(component.find('[data-test-id="loading-message"]')).toBeDefined()
  })

  it('Loads spinner', () => {
    const component = shallow(
      <Provider store={store}>
        <App state={{showSpinner: {show: true}}} />
      </Provider>)
    expect(component.find('[data-test-id="loading-message"]')).toBeDefined()
  })
})
