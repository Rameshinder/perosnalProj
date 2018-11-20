import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from './index'

jest.mock('./anz-logo.svg', () => 'logo')
jest.mock('@anz/button/styles', () => 'Button')
jest.mock('@anz/styles-global', () => 'styleVars')

describe('Header', () => {
  const app = shallow(<Header />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Header should render without crashing', () => {
    shallow(<Header />)
  })

  it('componentDidMount should get called on load', () => {
    const spy = jest.spyOn(Header.prototype, 'componentDidMount')
    const wrapper = mount(<Header />)
    console.log(wrapper)
    expect(spy).toHaveBeenCalled()
  })

  it('componentDidUpdate should get called on change', () => {
    const spy = jest.spyOn(Header.prototype, 'componentDidUpdate')
    const spy1 = jest.spyOn(Header.prototype, 'handleMenuInternalClick')
    const wrapper = mount(<Header />)
    const menu = wrapper.find('[id="contextMenu"]').at(0)
    expect(menu.exists()).toBe(false)
    wrapper.setState({open: true})
    const menu1 = wrapper.find('[id="contextMenu"]').at(0)
    menu1.simulate('click')
    expect(menu1.exists()).toBe(true)
    // const menuItem = wrapper.find('[data-test-id="Link_Whats_New"]').at(0)
    // menuItem.simulate('mousedown')
    expect(spy).toHaveBeenCalled()
    expect(spy1).toHaveBeenCalled()
  })

  it('openMenu should get called on click of 3 dots', () => {
    const spy = jest.spyOn(Header.prototype, 'openMenu')
    // const spy1 = jest.spyOn(Header.prototype, 'handleMenuInternalClick')
    const wrapper = mount(<Header />)
    wrapper.setState({open: true})
    const menu = wrapper.find('[id="contextMenuButton"]').at(0)
    menu.simulate('click')
    expect(spy).toHaveBeenCalled()
    // expect(spy1).toHaveBeenCalled()
  })
})
