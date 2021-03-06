import React, { Component } from 'react'

import _ from 'lodash'

import CardList from '../cardList/index'
import InputText from '../input-text/index'
import AppConstant from '../../../common/utils/constant'
import Icon from '../../icon'

import styleVars from '../../../common/styles-global/global'

import { CardSearch, CardSearchHeading, SearchInput, Link, NoCards } from './styles'
import { H3 } from '../heading/index'

class CardSearchList extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState = this.initializeState.bind(this)
    this.initializeState(props)
  }

  initialize () {
    this.clearSearchInput = this.clearSearchInput.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.filterCards = this.filterCards.bind(this)
  }

  initializeState (props) {
    let { showCards, cardlist, onClose } = props
    this.state = {
      showCards,
      onClose,
      searchTerm: '',
      currentlyDisplayedCards: cardlist.cards
    }
  }

  clearSearchInput () {
    const { cardlist } = this.props
    this.setState(
      {
        searchTerm: '',
        currentlyDisplayedCards: cardlist.cards
      }
    )
    this.forceUpdate()
  }

  onInputChange (value) {
    const searchTerm = value
    this.setState(
      {
        searchTerm
      }, this.filterCards(searchTerm)
    )
  }

  filterCards (searchTerm) {
    const { cardlist } = this.props
    if (searchTerm === '' || searchTerm === 'undefined') {
      this.setState(
        {
          currentlyDisplayedCards: cardlist.cards
        }
      )
    } else {
      const currentlyDisplayedCards = this.props.cardlist.cards
      let searchResult = _.map(currentlyDisplayedCards, (o) => {
        if (o.number.toUpperCase().includes(searchTerm.toUpperCase()) || o.type.toUpperCase().includes(searchTerm.toUpperCase())) {
          return o
        }
      })
      searchResult = _.without(searchResult, undefined)
      this.setState(
        {
          currentlyDisplayedCards: searchResult
        }
      )
    }
  }

  render () {
    let { currentlyDisplayedCards, searchTerm } = this.state
    return (
      <CardSearch>
        <CardSearchHeading >
          <H3 proLight data-test-id='card-Search-Heading'>{AppConstant.SELECT_ELIGIBLE_CARD}</H3>
        </CardSearchHeading>
        <SearchInput>
          <Link ><Icon iconName='Search' /></Link>
          <InputText ariaLabel='search text input' ariaRequired={false} id='card-search-input' name='card-search-input' data-test-id='card-search-input' placeholderText='Filter by card name or number' onChange={this.onInputChange} inputValue={searchTerm} />
          {searchTerm.length > 0 ? <Link id='clear-search' name='clear-search' data-test-id='clear-search' tabIndex={0} onClick={this.clearSearchInput} onKeyPress={this.clearSearchInput}><Icon iconName='Cross' color={styleVars.color.copy_Color} /></Link> : null }
        </SearchInput>
        {(currentlyDisplayedCards && currentlyDisplayedCards.length > 0) ? <CardList cards={currentlyDisplayedCards} handleCardSelection={this.props.handleCardSelection} /> : <NoCards data-test-id='No_Cards_in_search'>{AppConstant.NO_CARDS}</NoCards> }
      </CardSearch>
    )
  }
}

export default CardSearchList
