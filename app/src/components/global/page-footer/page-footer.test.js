import React from 'react'
import { shallow } from 'enzyme'

import PageFooter from './index'

jest.mock('@anz/button', () => 'Button')

describe('PageFooter', () => {
  const app = shallow(<PageFooter />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('PageFooter should render without crashing', () => {
    shallow(<PageFooter />)
  })

  it('PageFooter should render with action bar', () => {
    shallow(<PageFooter />)
  })
})
