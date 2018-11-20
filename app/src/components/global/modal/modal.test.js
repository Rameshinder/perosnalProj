import React from 'react'
import { shallow, mount } from 'enzyme'
import Modal from './index'
jest.mock('../../icon', () => 'Icon')
jest.mock('@anz/button', () => 'Button')
describe('Modal', () => {
  const app = shallow(<Modal />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
  it('Modal should render without crashing', () => {
    shallow(<Modal />)
  })
  it('Modal should call closeModal on click of close', () => {
    shallow(<Modal />)
  })
  it('should clear the search field when cross icon is clicked', () => {
    const spy = jest.spyOn(Modal.prototype, 'closeModal')
    const wrapper = mount(<Modal title='test modal' show onClose={jest.fn()} />)
    const searchIcon = wrapper.find('a')
    searchIcon.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
  it('Footer should render without crashing', () => {
    shallow(<Modal />)
  })
  it('renders sendFooterText and cancelFooterText props', () => {
    const wrapper = mount(<Modal
      show={false}
      cancelFooterText=' '
      sendFooterText=' '
      title='Feedback'
      onClose={jest.fn()}
      disabled
      handleClick={jest.fn()}
      height=' '
      width=' ' />)
    wrapper.setProps({sendFooterText: null, cancelFooterText: null, height: '1100', width: '738', addAnimation: 'slidedown'})
    expect(wrapper.prop('sendFooterText')).toBe(null)
    expect(wrapper.prop('cancelFooterText')).toBe(null)
    expect(wrapper.prop('height')).toBe('1100')
    expect(wrapper.prop('width')).toBe('738')
    expect(wrapper.prop('addAnimation')).toBe('slidedown')
  })
  test('handleClick', () => {
    const handleClickProp = jest.fn()
    const wrapper = mount(<Modal
      show
      cancelFooterText='Cancel'
      sendFooterText='Send'
      title='Feedback'
      onClose={jest.fn()}
      disabled
      handleClick={handleClickProp}
      height='100'
      width='400' />
    )
    wrapper.instance().handleClick()
    expect(handleClickProp).toHaveBeenCalled()
  })
})
