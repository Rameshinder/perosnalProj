import React from 'react'
import {shallow, mount} from 'enzyme'

import TextArea from './index'

describe('Heading', () => {
  const app = shallow(<TextArea
    rows={2}
    cols={2}
    maxlength={250}
    placeholder={'Place text'}
    onFocus={jest.fn()}
    onBlur={jest.fn()}
    onChange={jest.fn()} textAreaFunc={jest.fn()} autoFocus />)

  const wrapper = shallow(<TextArea
    rows={2}
    cols={2}
    placeholder={'Place text'}
    onFocus={jest.fn()}
    onBlur={jest.fn()}
    onChange={jest.fn()} textAreaFunc={jest.fn()} autoFocus />)

  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('TextArea should render without crashing', () => {
    shallow(<TextArea
      rows={2}
      cols={2}
      maxlength={250}
      placeholder={'Place text'}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      onChange={jest.fn()}
      autoFocus />)
  })

  test('on focus event for textarea component', () => {
    const handleFocus = jest.fn()
    handleFocus()
    app.instance().handleFocus()
    expect(handleFocus).toHaveBeenCalled()
  })

  test('on blur event for textarea component', () => {
    const handleBlur = jest.fn()
    handleBlur()
    app.instance().handleBlur()
    expect(handleBlur).toHaveBeenCalled()
  })

  test('onChange function to be called for textarea component', () => {
    const handleChange = jest.fn()
    handleChange('hi')
    app.instance().handleChange('hi')
    expect(handleChange).toHaveBeenCalled()
  })
  test('TextArea componentDidMount', () => {
    let wrapper = mount(<TextArea
      rows={2}
      cols={2}
      maxlength={250}
      placeholder={'Place text'}
      onFocus={jest.fn()}
      onBlur={jest.fn()}
      onChange={jest.fn()}
      hasTransition
      transitionTiming={500}
      media={{ currentTime: 0, duration: 500 }}
      timeout={(fn, _) => fn()}
      ref='textArea' />)
    jest.useFakeTimers()
    const componentDidMount = jest.fn()
    componentDidMount()
    wrapper.instance().componentDidMount()
    jest.runAllTimers()
    expect(componentDidMount).toHaveBeenCalled()
  })
})
