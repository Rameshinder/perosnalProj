import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'

import queryString from 'query-string'

import Alert from '@anz/alert'

import cardService from '../../common/services/api/cardService'

import CardSearchList from '../global/card-search-list/index'
import AppConstants from '../../common/utils/constant'
import Util from '../../common/utils/util'
import PageHeader from '../global/page-header/index'
import PageFooter from '../global/page-footer/index'
import PageContainer from '../global/page-container/index'

import { ManagePinWrapper, CardInfoText } from './styles'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
export class ManagePin extends Component {
  constructor (props) {
    super(props)

    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.state = {
      showSpinner: true,
      showCards: false,
      pepSessionVerified: false,
      urlProfile: ''
    }
  }

  initialize () {
    this.fetchCardList = this.fetchCardList.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
  }

  setSelectedCard (card) {
    this.props.actions.SetSelectedCard(card)
    this.props.history.push('/smsLanding')
  }

  handleCancelClick () {
    window.location.href = this.state.urlProfile
  }

  componentWillMount () {
    this.fetchCardList()
    this.dispatchFetchRequest()
  }

  componentDidMount () {
    const values = queryString.parse(this.props.location.search)
    Util.updateURL(values.sessionId)
    this.setState(
      {
        urlProfile: AppConstants.IB_URL_PROFILE
      }
    )
  }

  fetchCardList () {
    const payLoad = {
      'CRN': null,
      'CapCSID': null,
      'CardNumber': null,
      'AccountID': null
    }
    cardService
      .getCardDetails(payLoad)
      .then(response => {
        const cardlist = response.data
        this.dispatchFetchSuccess(cardlist)
      })
      .catch(e => {
        this.dispatchFetchFailure(e)
      })
  }

  dispatchFetchRequest () {
    this.props.actions.showSpinner()
  }

  dispatchFetchSuccess (cardlist) {
    this.props.actions.hideSpinner()
    this.props.actions.FetchCardListSuccess(cardlist)
    const cards = this.props.state.cardList.cards.data.cards
    this.setState({
      currentlyDisplayedCards: cards
    })
  }

  dispatchFetchFailure (error) {
    this.props.actions.hideSpinner()
    this.props.actions.FetchFailure(error)
  }

  render () {
    this.state.currentlyDisplayedCards && console.log('currently displayed cards', this.state.currentlyDisplayedCards.length)
    const footerProps = {
      showPrimaryButton: false,
      showSecondaryButton: true,
      onSecondaryButtonClick: this.handleCancelClick,
      secondaryButtonText: AppConstants.CANCEL
    }
    const reason = {
      success: 'success',
      information: 'information',
      warning: 'warning',
      error: 'error',
      fatal: 'fatal'
    }
    const { cardList } = this.props.state
    const { showCards } = this.state
    return (
      <ManagePinWrapper>
        <PageHeader dataTestId='manage-pin-header' id='manage-pin-header' name='manage-pin-header' heading={AppConstants.MANAGE_PIN_HEADER} />
        { ((this.state.currentlyDisplayedCards && this.state.currentlyDisplayedCards.length > 0) && Util.areEligibleCardsAvailable(this.state.currentlyDisplayedCards)) ? null : <Alert reason={reason.information} id='alert-eligible-cards' withIcon fullWidth={false} >{AppConstants.NO_CARDS_ELIGIBLE} </Alert>}
        <PageContainer withActionBar footerProps={footerProps}>
          {(this.state.currentlyDisplayedCards && this.state.currentlyDisplayedCards.length > 0)
            ? <CardSearchList showCards={showCards} cardlist={cardList.cards.data} onClose={this.hideCardListModal} handleCardSelection={(card) => this.setSelectedCard(card)} /> : null
          }
        </PageContainer>

        <PageFooter>
          <CardInfoText>
            <p>{AppConstants.CARD_IMP_INFO_1}</p>
            <p>{AppConstants.CARD_IMP_INFO_2}</p>
          </CardInfoText>
        </PageFooter>

      </ManagePinWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePin)
