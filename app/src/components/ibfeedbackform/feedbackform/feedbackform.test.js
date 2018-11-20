import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'
import FeedbackForm from './index'
jest.mock('@anz/button', () => 'Button')
jest.mock('@anz/spinner', () => 'Spinner')
describe('FeedbackForm', () => {
  let wrapper = shallow(<FeedbackForm onClose={jest.fn()} isOpen='true' />, {attachTo: document.body})
  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('onSend()', () => {
    jest.mock('../../../common/services/api/feedBackService')
    wrapper.setState({
      acknowledgestate: true,
      screenWidth: 500
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('onSend() for Dektop', () => {
    wrapper.setState({
      acknowledgestate: true,
      screenWidth: 1000
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('onSend() for Mobile', () => {
    wrapper.setState({
      acknowledgestate: true,
      screenWidth: 350
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('onSend() for Windows', () => {
    wrapper.setState({
      acknowledgestate: true,
      operatingSystem: 'Win'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })
  test('onSend() for Mac', () => {
    wrapper.setState({
      acknowledgestate: true,
      operatingSystem: 'Mac'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })
  test('onSend() for X11', () => {
    wrapper.setState({
      acknowledgestate: true,
      operatingSystem: 'X11'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })
  test('For checking Linux', () => {
    wrapper.setState({
      acknowledgestate: true,
      operatingSystem: 'Linux'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Opera', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Opera'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking MSIE', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'MSIE'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Chrome', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Chrome'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Safari', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Safari'
    })

    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Firefox', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Firefox'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Firefox', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0;'
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('For checking Firefox', () => {
    wrapper.setState({
      acknowledgestate: true,
      browserVersion: 'Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0 '
    })
    wrapper.instance().onSend()
    expect(wrapper.state().acknowledgestate).toBeTruthy()
  })

  test('onClose()', () => {
    const onCloseProp = jest.fn()
    const wrapper = shallow(<FeedbackForm
      onClose={onCloseProp} isOpen='true' />
    )
    wrapper.setState({
      acknowledgestate: false,
      buttonDisable: true
    })
    wrapper.instance().onClose()
    expect(onCloseProp).toHaveBeenCalled()
    expect(wrapper.state().acknowledgestate).toBeFalsy()
    expect(wrapper.state().buttonDisable).toBeTruthy()
  })

  test('ratingValue()', () => {
    const ratingSelected = 2
    wrapper.setState({
      ratingFeedback: ratingSelected
    })
    if (ratingSelected > 0) {
      wrapper.setState({
        buttonDisable: false
      })
    }

    wrapper.instance().ratingValue(ratingSelected)
    expect(wrapper.state().buttonDisable).toBeFalsy()
  })

  test('  handleTextAreaContent()', () => {
    const ratingDescription = 'Comments for the feedback'
    const wrapper = shallow(<FeedbackForm
      onClose={jest.fn()} isOpen='true' />
    )
    wrapper.setState({
      ratingDescription: ratingDescription
    })
    wrapper.instance().handleTextAreaContent(ratingDescription)
  })
  test('onApplyClick', () => {
    wrapper.instance().onApplyClick()
  })
  test('onClickSecuremail', () => {
    wrapper.instance().onClickSecuremail()
  })
  test('onKeyPress', () => {
    const onClickSecuremail = jest.fn()
    onClickSecuremail()
    wrapper.instance().onEnterSecureMail({key: 'Enter'})
    expect(onClickSecuremail).toHaveBeenCalled()
  })
  test('onKeyPress other than Enter key', () => {
    const onClickSecuremail = jest.fn()
    onClickSecuremail()
    wrapper.instance().onEnterSecureMail({key: 'Shift'})
    expect(onClickSecuremail).toHaveBeenCalled()
  })
})
