import React from 'react'
import { mount } from 'enzyme'

import ErrorMessage from './index'

describe('ErrorMessage', () => {
  let wrapper = mount(<ErrorMessage />)
  test('component renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('component renders without crashing', () => {
    let wrapper = mount(<ErrorMessage icon='warning' />)
    expect(wrapper.state('icon')).toBe('warning')
  })
})
