import React from 'react'
import { shallow, mount } from 'enzyme'
import InputText from './index'

describe('InputText', () => {
  const app = shallow(<InputText />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('InputText should render without crashing', () => {
    shallow(<InputText />)
  })

  it('InputText should fire onChange on text change ', () => {
    const spy = jest.spyOn(InputText.prototype, 'handleChange')
    const event = {target: {value: 'spam'}}
    const wrapper = mount(<InputText name='input-text' onChange={jest.fn()} />)
    const textbox = wrapper.find('[name="input-text"]').at(1)
    textbox.simulate('change', event)
    expect(spy).toHaveBeenCalled()
  })

  it('InputText should fire onclick on textbox click ', () => {
    const spy = jest.spyOn(InputText.prototype, 'handleClick')
    const event = {target: {value: 'spam'}}
    const wrapper = mount(<InputText name='input-text' onClick={jest.fn()} />)
    const textbox = wrapper.find('[name="input-text"]').at(1)
    textbox.simulate('click', event)
    expect(spy).toHaveBeenCalled()
  })

  it('onkeypress event for InputText', () => {
    const spy = jest.spyOn(InputText.prototype, 'handleKeypress')
    const event = {target: {value: 'spam'}}
    const wrapper = mount(<InputText name='input-text' onKeyPress={jest.fn()} />)
    const textbox = wrapper.find('[name="input-text"]').at(1)
    textbox.simulate('keypress', event)
    expect(spy).toHaveBeenCalled()
  })

  it('onkeyup event for InputText', () => {
    const spy = jest.spyOn(InputText.prototype, 'handleKeyup')
    const event = {target: {value: 'spam'}}
    const wrapper = mount(<InputText name='input-text' onKeyUp={jest.fn()} onkeyup={jest.fn()} />)
    const textbox = wrapper.find('[name="input-text"]').at(1)
    textbox.simulate('keyup', event)
    expect(spy).toHaveBeenCalled()
  })
})
