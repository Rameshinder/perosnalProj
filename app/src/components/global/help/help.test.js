import React from 'react'
import {shallow} from 'enzyme'

import Help from './index'

jest.mock('@anz/icon/filled/arrows-and-symbols/question-help', () => 'HelpIcon')

describe('Help', () => {
  const app = shallow(<Help />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Help should render without crashing', () => {
    shallow(<Help />)
  })
})
