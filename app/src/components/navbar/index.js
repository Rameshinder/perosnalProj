import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AnzButton from '@anz/button'

import { UList, List, Anchor, ButtonDiv, NavbarContainer } from './styles'
import AppConstants from '../../common/utils/constant'
import MenuItemsService from '../../common/services/api/menuItemService'
import * as Actions from '../../actions'
import Icon from '../icon/index'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState()
  }

  initialize () {
    this.fetchMenuItems = this.fetchMenuItems.bind(this)
    this.dispatchFetchRequest = this.dispatchFetchRequest.bind(this)
    this.dispatchFetchSuccess = this.dispatchFetchSuccess.bind(this)
    this.dispatchFetchFailure = this.dispatchFetchFailure.bind(this)
  }

  initializeState () {
    this.state = {
      urlHome: '',
      activeTab: false
    }
  }

  componentWillMount () {
    this.fetchMenuItems()
    this.dispatchFetchRequest()
  }

  fetchMenuItems () {
    MenuItemsService.getMenuItems()
      .then(response => {
        const menuItems = response.data
        this.dispatchFetchSuccess(menuItems)
      }).catch(error => {
        this.dispatchFetchFailure(error)
      })
  }

  dispatchFetchRequest () {
    this.props.actions.FetchRequest()
  }

  dispatchFetchSuccess (menuItems) {
    this.props.actions.FetchMenuItemsSuccess(menuItems)
  }

  dispatchFetchFailure (error) {
    this.props.actions.FetchMenuItemsFailure(error)
  }

  render () {
    return (
      <NavbarContainer>
        <UList>
          <List data-test-id='home'><Anchor tabIndex={0} href={AppConstants.IB_URL_HOME}>
            <Icon iconName='Home' />
          </Anchor></List>
          <List tabIndex={0} data-test-id={`menuItem-${AppConstants.PAYMENTS}`}>
            <Anchor href={AppConstants.IB_URL_PAYMENT}>{AppConstants.PAYMENTS}</Anchor>
          </List>
          <List tabIndex={0} data-test-id={`menuItem-${AppConstants.PROFILE}`}>
            <Anchor href='#/personaliseAccounts' onClick={this.handleClick}>{AppConstants.PROFILE}</Anchor>
          </List>
          <List data-test-id={`menuItem-${AppConstants.APPLY}`}>
            <Anchor href={AppConstants.IB_URL_APPLY}>{AppConstants.APPLY}</Anchor>
          </List>
          <List data-test-id={`menuItem-${AppConstants.FEEDBACK}`}>
            <Anchor tabIndex={0} href={AppConstants.IB_URL_FEEDBACK}>{AppConstants.FEEDBACK}</Anchor>
          </List>
          <ButtonDiv>
            <AnzButton appearance='ghost' size='medium'>JOIN ANZ SHARE INVESTING <Icon iconName='Arrow Right' /></AnzButton>
          </ButtonDiv>
        </UList>
      </NavbarContainer>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
