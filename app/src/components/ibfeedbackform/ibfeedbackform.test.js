import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'
import FeedbackPage from './index'
jest.mock('@anz/button', () => 'Button')
jest.mock('@anz/spinner', () => 'Spinner')
describe('FeedbackPage', () => {
  let wrapper = shallow(<FeedbackPage />)

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('onKeyPress', () => {
    let e = {
      key: 'Enter'
    }
    wrapper.instance().onKeyPress(e)
    e = {
      key: 'xyz'
    }
    wrapper.instance().onKeyPress(e)
  })
})
