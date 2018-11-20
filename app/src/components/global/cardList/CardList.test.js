import React from 'react'
import { shallow, mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'

import CardList from './index'
import CardListJson from '../stubs/cardList.json'
import 'jest-styled-components'

jest.mock('../../icon', () => 'Icon')

jest.mock('@anz/tooltip', () => 'Tooltip')
jest.mock('@anz/tooltip', () => 'TooltipWrapper')
jest.mock('@anz/icon/line/arrows-and-symbols/information', () => 'InfoIcon')

describe('Card', () => {
  const app = shallow(<CardList cards={CardListJson.cards} />)
  test('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  test('Card should render without crashing', () => {
    mount(<CardList cards={CardListJson} />)
  })

  it('Card should render without crashing', () => {
    shallow(<CardList cards={CardListJson.cardsNonEligible} />)
  })

  it('Card should handle onClick', () => {
    const spy = jest.spyOn(CardList.prototype, 'onClick')
    const cardlistWrapper = mount(<CardList cards={CardListJson.cards} handleCardSelection={jest.fn} />)
    const cardLink = cardlistWrapper.find('[id="card-link-1"]').at(0)
    cardLink.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('Card should handle onClick', () => {
    const cardlistWrapper = mount(<CardList cards={CardListJson.cards} handleCardSelection={jest.fn} />)
    const tree = mountToJson(cardlistWrapper)
    expect(tree).toMatchSnapshot()
  })
})
