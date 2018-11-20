import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Footer } from './styles'
import TileFooter from '../tile-footer/index'

export default class PageContainer extends Component {
  render () {
    return (
      <Container>
        {this.props.children}
        {
          this.props.withActionBar &&
            <Footer>
              <TileFooter
                showPrimaryButton={this.props.footerProps.showPrimaryButton}
                showSecondaryButton={this.props.footerProps.showSecondaryButton}
                primaryButtonDisabled={this.props.footerProps.primaryButtonDisabled}
                secondaryButtonDisabled={this.props.footerProps.secondaryButtonDisabled}
                onSecondaryButtonClick={this.props.footerProps.onSecondaryButtonClick}
                onPrimaryButtonClick={this.props.footerProps.onPrimaryButtonClick}
                primaryButtonText={this.props.footerProps.primaryButtonText}
                primaryButtonAppearance={this.props.footerProps.primaryButtonAppearance}
                secondaryButtonText={this.props.footerProps.secondaryButtonText}
              />
            </Footer>
        }
      </Container>
    )
  }
}

PageContainer.propTypes = {
  withActionBar: PropTypes.bool,
  footerProps: PropTypes.object
}

PageContainer.defaultProps = {
}
