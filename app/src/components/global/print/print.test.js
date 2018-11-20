import React from 'react'
import { shallow, mount } from 'enzyme'

import Print from './index'

jest.mock('@anz/icon/filled/generic/print', () => 'PrintIcon')

describe('Print', () => {
  const app = shallow(<Print />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Print should render without crashing', () => {
    shallow(<Print />)
  })

  it('Print should call printDiv on click', () => {
    const spy = jest.spyOn(Print.prototype, 'printDiv')
    const wrapper = mount(<Print />)
    const link = wrapper.find('a[id="print"]')
    link.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('Print should call printDiv on key Press', () => {
    const spy = jest.spyOn(Print.prototype, 'printDiv')
    const wrapper = mount(<Print />)
    const link = wrapper.find('a[id="print"]')
    link.simulate('keyPress', {
      key: 'Enter',
      keyCode: 13,
      which: 13
    })
    expect(spy).toHaveBeenCalled()
  })

  it('Print should not call printDiv on any other key Press', () => {
    const spy = jest.spyOn(Print.prototype, 'printDiv')
    const wrapper = mount(<Print />)
    const link = wrapper.find('a[id="print"]')
    link.simulate('keyPress', {
      key: 'tab',
      keyCode: 19,
      which: 19
    })
    expect(spy).toHaveBeenCalled()
  })
})
