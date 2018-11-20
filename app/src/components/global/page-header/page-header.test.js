import React from 'react'
import { shallow } from 'enzyme'

import PageHeader from './index'

jest.mock('@anz/icon/filled/generic/print', () => 'PrintIcon')
jest.mock('@anz/icon/filled/arrows-and-symbols/question-help', () => 'HelpIcon')

describe('PageHeader', () => {
  const app = shallow(<PageHeader />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Print should render without crashing', () => {
    shallow(<PageHeader />)
  })

  it('PageContainer should render with action bar', () => {
    shallow(<PageHeader />)
  })
})
