import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FooterContainer } from './styles'

import Button from '@anz/button'

export default class TileFooter extends Component {
  render () {
    return (
      <FooterContainer>
        {this.props.showSecondaryButton ? <Button id='footer-secondary-button' name='footer-secondary-button' data-test-id='footer-secondary-button' variant='ghost' size='small' onClick={this.props.onSecondaryButtonClick} disabled={this.props.secondaryButtonDisabled} secondary> {this.props.secondaryButtonText} </Button> : null}
        {this.props.showPrimaryButton ? <Button id='footer-primary-button' name='footer-primary-button' data-test-id='footer-primary-button' variant='normal' size='small' appearance={this.props.primaryButtonAppearance} onClick={this.props.onPrimaryButtonClick} disabled={this.props.primaryButtonDisabled} primary> {this.props.primaryButtonText} </Button> : null}
      </FooterContainer>
    )
  }
}

TileFooter.propTypes = {
  showSecondaryButton: PropTypes.bool,
  showPrimaryButton: PropTypes.bool,
  primaryButtonDisabled: PropTypes.bool,
  secondaryButtonDisabled: PropTypes.bool,
  onSecondaryButtonClick: PropTypes.func,
  onPrimaryButtonClick: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  primaryButtonText: PropTypes.string
}

TileFooter.defaultProps = {
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false
}
