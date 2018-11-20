import React, { Component } from 'react'
import { Tooltip, TooltipWrapper } from '@anz/tooltip'
import { getCardName } from '../../../common/utils/util'
import AppConstant from '../../../common/utils/constant'

import { Card, CardContainer, CardDetails, Span, UList, List } from './styles'

import InfoIcon from '@anz/icon/line/arrows-and-symbols/information'

import PropTypes from 'prop-types'

import { P } from '../heading/index'

export class CardList extends Component {
  onClick (card, e) {
    e.preventDefault()
    this.props.handleCardSelection(card)
  }
  onKeyPress (card, e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.handleCardSelection(card)
    }
  }
  render () {
    const position = {
      top: 'top',
      bottom: 'bottom'
    }

    const positionX = {
      left: 'left',
      center: 'center',
      right: 'right'
    }

    const cardlist = this.props.cards.length > 0 ? this.props.cards.map((card, cardIndex) => {
      const imgName = 'assets/' + getCardName(card.productCode, card.productSubCode)
      const eligible = card.eligibleFor.indexOf('SetPin') !== -1
      return (
        eligible
          ? <List key={`Card-${cardIndex}`} >
            <a id={`card-link-${cardIndex}`} data-test-id={`card-link-${cardIndex}`} name={`card-link-${cardIndex}`} tabIndex={0} onClick={(e) => this.onClick(card, e)} onKeyPress={(e) => this.onKeyPress(card, e)} >
              <Card nonEligible={!eligible} data-test-id={`card-list-${cardIndex}`}>
                <img
                  src={`${imgName}`}
                  alt={`image of card type ${card.type}`}
                />
                <CardDetails data-test-id={`case-details-${cardIndex}`}>
                  <P semiBold id='Cardnameinthelist' data-test-id={`card-name-${cardIndex}`}>
                    {card.type}
                  </P>
                  <P id='Cardnumberinthelist' data-test-id={`card-num-${cardIndex}`}>
                    {card.number}
                  </P>
                </CardDetails>
              </Card>
            </a>
          </List>
          : <List key={`Card-${cardIndex}`} >
            <Card nonEligible={!eligible} data-test-id={`card-list-${cardIndex}`}>
              <img
                src={`${imgName}`}
                alt={`image of card type ${card.type}`}
              />
              <CardDetails data-test-id={`case-details-${cardIndex}`}>
                <P semiBold id='Cardnameinthelist' data-test-id={`card-name-${cardIndex}`}>
                  {card.type}
                </P>
                <P id='Cardnumberinthelist' data-test-id={`card-num-${cardIndex}`}>
                  {card.number}
                </P>
              </CardDetails>
              {card.eligibleFor.indexOf('SetPin') === -1 && <Span nonEligible fullOpacity showDesk><P proRegularFontSize ><TooltipWrapper data-test-id='ineligible-card-tag'>{AppConstant.INELIGIBLE_CARDS}<Tooltip position={this.props.cards.length === cardIndex + 1 ? position.top : position.bottom} arrowPosition='right' positionX={positionX.right}>{AppConstant.INELIGIBLE_CARDS}</Tooltip></TooltipWrapper></P></Span>}
              {card.eligibleFor.indexOf('SetPin') === -1 && <Span nonEligible showMobile fullOpacity><TooltipWrapper><InfoIcon /><Tooltip position={this.props.cards.length === cardIndex + 1 ? position.top : position.bottom} arrowPosition='right' positionX={positionX.right}>{AppConstant.INELIGIBLE_CARDS}</Tooltip></TooltipWrapper></Span>}
            </Card>
          </List>

      )
    }) : <Span D8>{AppConstant.NO_MATCHING_CARDS}</Span>
    return (
      <CardContainer>
        <UList>
          {cardlist}
        </UList>
      </CardContainer>
    )
  }
}

CardList.propTypes = {
  cards: PropTypes.array,
  handleCardSelection: PropTypes.func
}

export default CardList
