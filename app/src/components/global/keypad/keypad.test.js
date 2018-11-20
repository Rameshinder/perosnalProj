import React from 'react'
import { shallow } from 'enzyme'
import Keypad from './index'
jest.mock('@anz/button', () => 'Button')

describe('Keypad', () => {
  const app = shallow(<Keypad callbackFromKeyPad={jest.fn()} callbackForKeyPadBack={jest.fn()} callbackForKeyPadClear={jest.fn()} />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('Keypad should render without crashing', () => {
    shallow(<Keypad />)
  })

  test('invoking onClick() function', () => {
    app.instance().keyPadClick()
  })

  test('button click', () => {
    app.find('[data-test-id="keypad-one"]').simulate('click')
    app.find('[data-test-id="keypad-two"]').simulate('click')
    app.find('[data-test-id="keypad-three"]').simulate('click')
    app.find('[data-test-id="keypad-four"]').simulate('click')
    app.find('[data-test-id="keypad-five"]').simulate('click')
    app.find('[data-test-id="keypad-six"]').simulate('click')
    app.find('[data-test-id="keypad-seven"]').simulate('click')
    app.find('[data-test-id="keypad-eight"]').simulate('click')
    app.find('[data-test-id="keypad-nine"]').simulate('click')
    app.find('[data-test-id="keypad-clear"]').simulate('click')
    app.find('[data-test-id="keypad-zero"]').simulate('click')
    app.find('[data-test-id="keypad-back"]').simulate('click')
  })
})
