import React from 'react'
import { shallow } from 'enzyme'

import Icon from './index'

describe('Icon', () => {
  const app = shallow(<Icon iconName='Check' />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Icon should render without crashing', () => {
    shallow(<Icon iconName='Check' />)
  })
})
