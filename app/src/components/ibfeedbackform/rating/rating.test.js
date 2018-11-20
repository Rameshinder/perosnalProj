import React from 'react'
import {shallow} from 'enzyme'
import 'jest-styled-components'
import Rating from './index'

describe('Rating', () => {
  let wrapper = shallow(<Rating />)

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('setRating', () => {
    const callbackFromParentProp = jest.fn()
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />
    )
    const e = {
      target: {
        value: 5
      }
    }
    wrapper.setState({
      rating: 5,
      starSelected: true
    })

    wrapper.instance().setRating(e)
    expect(callbackFromParentProp).toHaveBeenCalled()
    expect(wrapper.state().starSelected).toBeTruthy()
  })

  test('onKeyPress', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter',
      target: {
        value: ''
      }
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.instance().onKeyPress(e, 5)
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress other than Enter', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'shift'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.instance().onKeyPress(e, 5)
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })

  test('onKeyPress for 1star', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    const star1 = wrapper.find('[aria-label="1-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 2star', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    const star1 = wrapper.find('[aria-label="2-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 3star', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    const star1 = wrapper.find('[aria-label="3-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 4star', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    const star1 = wrapper.find('[aria-label="4-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 5star', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    const star1 = wrapper.find('[aria-label="5-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 1star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 1
    })
    const star1 = wrapper.find('[aria-label="1-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 1star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 1
    })
    const star1 = wrapper.find('[aria-label="1-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 2star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 2
    })
    const star1 = wrapper.find('[aria-label="2-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 3star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 3
    })
    const star1 = wrapper.find('[aria-label="3-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 4star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 4
    })
    const star1 = wrapper.find('[aria-label="4-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
  test('onKeyPress for 5star selected', () => {
    const callbackFromParentProp = jest.fn()
    const setRating = jest.fn()
    const onKeyPress = jest.fn()
    setRating()
    onKeyPress()
    const e = {
      key: 'Enter'
    }
    const wrapper = shallow(<Rating callbackFromParent={callbackFromParentProp} />)
    wrapper.setState({
      starSelected: true,
      rating: 5
    })
    const star1 = wrapper.find('[aria-label="5-rating-star"]')
    star1.simulate('keyup', {e})
    expect(setRating).toHaveBeenCalled()
    expect(onKeyPress).toHaveBeenCalled()
  })
})
