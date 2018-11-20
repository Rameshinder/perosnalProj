import React from 'react'
import { shallow, mount } from 'enzyme'

import PageContainer from './index'

jest.mock('@anz/icon/filled/generic/print', () => 'PrintIcon')
jest.mock('@anz/button', () => 'Button')

describe('PageContainer', () => {
  const footerProps = {
    showPrimaryButton: false,
    showSecondaryButton: true,
    onPrimaryButtonClick: jest.fn,
    onSecondaryButtonClick: jest.fn,
    primaryButtonText: 'Apply',
    secondaryButtonText: 'Cancel'
  }

  const app = shallow(<PageContainer />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Print should render without crashing', () => {
    shallow(<PageContainer withActionBar={false} />)
  })

  it('PageContainer should render with action bar', () => {
    mount(<PageContainer withActionBar footerProps={footerProps} />)
  })
})
