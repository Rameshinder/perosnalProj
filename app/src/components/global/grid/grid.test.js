import React from 'react'
import { mount } from 'enzyme'

import { mountToJson } from 'enzyme-to-json'
import 'jest-styled-components'

import {Container, BodyContainer, Column, Row, Push} from './index.js'

describe('<Grid />', () => {
  it('Component should render Container', () => {
    const wrapper = mount(<Container />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Component should render Body Container', () => {
    const wrapper = mount(<BodyContainer />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Row', () => {
    const wrapper = mount(<Row />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Row with nogap prop', () => {
    const wrapper = mount(<Row nogap />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Row with collapse prop', () => {
    const wrapper = mount(<Row collapse />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Column', () => {
    const wrapper = mount(<Column />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Column with nogap prop', () => {
    const wrapper = mount(<Column nogap />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
  it('Component should render Push', () => {
    const wrapper = mount(<Push />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
})
