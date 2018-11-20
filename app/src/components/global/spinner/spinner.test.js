import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Spinner from './index'

jest.mock('@anz/icon', () => 'Icon')

describe('<Spinner />', () => {
  it('Spinner snapshot test', () => {
    const component = shallow(<Spinner />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })

  it('Spinner should render without crashing', () => {
    shallow(<Spinner />)
  })
})
