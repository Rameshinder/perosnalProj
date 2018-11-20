import React from 'react'
import { shallow, mount } from 'enzyme'

import TileFooter from './index'

jest.mock('@anz/button', () => 'Button')

describe('TileFooter', () => {
  const app = shallow(<TileFooter />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('TileFooter should render without crashing', () => {
    shallow(<TileFooter />)
  })

  it('TileFooter should render with action bar', () => {
    shallow(<TileFooter />)
  })

  it('TileFooter should render with action bar', () => {
    mount(<TileFooter showPrimaryButton showSecondaryButton />)
  })
})
