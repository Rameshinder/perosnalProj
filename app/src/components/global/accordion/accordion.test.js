import React from 'react'
import {mount} from 'enzyme'

import Accordion from './index'

describe('Accordion', () => {
  let wrapper = mount(<Accordion
    title='Want to tell us more?'
    stayOpen={false}
    enableEnter
    id='feedbackComments'
    showTransition
    collapseAccordion />)
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('on handleclick method', () => {
    let wrapper = mount(<Accordion
      title='Want to tell us more?'
      stayOpen={false}
      enableEnter
      id='feedbackComments'
      media={{ currentTime: 0, duration: 500 }}
      timeout={(fn, _) => fn()}
      showTransition
    />)
    jest.useFakeTimers()
    const handleClick = jest.fn()
    handleClick()
    wrapper.instance().handleClick()
    jest.runAllTimers()
    expect(handleClick).toHaveBeenCalled()
  })
  test('on handleclick method without transition', () => {
    let wrapper = mount(<Accordion
      title='Want to tell us more?'
      stayOpen={false}
      enableEnter
      id='feedbackComments'
      showTransition={false}
    />)
    const handleClick = jest.fn()
    handleClick()
    wrapper.instance().handleClick()
    expect(handleClick).toHaveBeenCalled()
  })
  test('on handleclick method with stayopen true', () => {
    let wrapper = mount(<Accordion
      title='Want to tell us more?'
      stayOpen
      enableEnter
      id='feedbackComments'
      media={{ currentTime: 0, duration: 1000 }}
      timeout={(fn, _) => fn()}
      showTransition
    />)
    jest.useFakeTimers()
    const handleClick = jest.fn()
    handleClick()
    wrapper.instance().handleClick()
    jest.runAllTimers()
    expect(handleClick).toHaveBeenCalled()
  })
  test('keypress event of the accordion', () => {
    const onEnterKeyPress = jest.fn()
    onEnterKeyPress()
    wrapper.instance().onEnterKeyPress({key: 'Enter'})
    expect(onEnterKeyPress).toHaveBeenCalled()
  })
  test('keypress event of the accordion other than Enter key', () => {
    const onEnterKeyPress = jest.fn()
    onEnterKeyPress()
    wrapper.instance().onEnterKeyPress({key: 'shift'})
    expect(onEnterKeyPress).toHaveBeenCalled()
  })
  test('accordion enable enter false', () => {
    let wrapper = mount(<Accordion
      title='Want to tell us more?'
      stayOpen={false}
      enableEnter={false}
      id='feedbackComments'
    />)
    const onEnterKeyPress = jest.fn()
    onEnterKeyPress()
    wrapper.instance().onEnterKeyPress({key: 'shift'})
    expect(onEnterKeyPress).toHaveBeenCalled()
  })
})
