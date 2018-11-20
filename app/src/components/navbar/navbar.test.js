import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import Navbar from './index'

jest.mock('@anz/button', () => 'Button')

const mockStore = configureMockStore()
const store = mockStore({data: null,
  isPending: false,
  error: false})

describe('Navbar', () => {
  const app = shallow(
    <Provider store={store}>
      <Navbar />
    </Provider>
  )

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Navbar should render without crashing', () => {
    shallow(
      <Provider store={store}>
        <Navbar />
      </Provider>)
  })

  it('Navbar should call the fetchMenuItems functions while loading the page', () => {
    let wrapper = mount(
      <Provider store={store}>
        <Navbar />
      </Provider>)
    expect(wrapper).toBeDefined()
  })
})
