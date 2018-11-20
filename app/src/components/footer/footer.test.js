import React from 'react'
import { shallow } from 'enzyme'

import Footer from './index'

describe('Footer', () => {
  const app = shallow(<Footer />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Footer should render without crashing', () => {
    shallow(<Footer />)
  })
})
