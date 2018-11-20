import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppConstants from '../../../common/utils/constant'

import Print from '../print/index'
import Help from '../help/index'

import { Header, Helpers } from './styles'

import { H1 } from '../heading/index'

export default class PageHeader extends Component {
  render () {
    return (
      <Header>
        <H1 proLight data-test-id={this.props.dataTestId}>{this.props.heading}</H1>
        <Helpers>
          {this.props.print && <Print /> }
          {this.props.help && <Help link={AppConstants.ACCOUNT_HELP_LINK} /> }
        </Helpers>
      </Header>
    )
  }
}

PageHeader.propTypes = {
  print: PropTypes.bool,
  help: PropTypes.bool,
  dataTestId: PropTypes.string
}

PageHeader.defaultProps = {
  print: true,
  help: true
}
