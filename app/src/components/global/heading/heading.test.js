import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import 'jest-styled-components'

import Heading, {H1, H2, H3, P} from './index.js'

describe('<Heading />', () => {
  it('Component should be rendered without crashing', () => {
    mount(<Heading />)
    mount(<Heading level />)
    mount(<Heading level='1' />)
    mount(<Heading level='2' />)
    mount(<Heading level='3' />)
    mount(<Heading level='4' />)
  })

  it('Component should render children', () => {
    const heading = mount(<Heading><span>Hello</span></Heading>)
    expect(heading.find('span').exists()).toBe(true)
  })

  it('Should match snapshot', () => {
    const wrapper = mount(<Heading />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for H1', () => {
    const wrapper = mount(<H1 />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for H1 with Lightweight font prop', () => {
    const wrapper = mount(<H1 proLight />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for H2', () => {
    const wrapper = mount(<H2 />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for H3', () => {
    const wrapper = mount(<H3 />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for H3 with proLight font', () => {
    const wrapper = mount(<H3 proLight />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for P', () => {
    const wrapper = mount(<P />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for P with semiBold font', () => {
    const wrapper = mount(<P semiBold />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot for P proRegular FontSize', () => {
    const wrapper = mount(<P proRegularFontSize />)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
})
