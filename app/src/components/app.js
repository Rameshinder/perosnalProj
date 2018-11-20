/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {ThemeProvider} from 'styled-components'
import Neat from 'neat-components'

import AnzHeader from './global/header'
import AnzFooter from './footer'
import ErrorComponent from '@anz/error'
import AnzSpinner from '@anz/spinner'
import Navbar from './navbar/index'
import ManagePin from './managepin/index'
import SMSLanding from './sms-landing/index'
import ManagePinCard from './managecardpin/index'
import FeedbackPage from './ibfeedbackform'
import {Container, BodyContainer} from './global/grid/index'

const mapStateToProps = state => ({
  state
})

export class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showSpinner: this.props.state.showSpinner.show
    }
  }

  render () {
    return (
      <ThemeProvider theme={Neat()}>
        <Container>
          <AnzHeader />
          <Navbar />
          <BodyContainer>
            <Switch>
              <Route path='/error' component={ErrorComponent} />
              <Route path='/managePin' component={ManagePin} />
              <Route path='/smsLanding' component={SMSLanding} />
              <Route path='/setPin' component={ManagePin} />
              <Route path='/manageCardPin' component={ManagePinCard} />
              <Route path='/feedbackpage' component={FeedbackPage} />
              <Redirect from='*' to='/error' />
            </Switch>
          </BodyContainer>
          <AnzFooter />
          {this.props.state.showSpinner.show
            ? <AnzSpinner show message=' ' />
            : <AnzSpinner />
          }
        </Container>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps)(App)
