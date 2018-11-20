import React, { Component } from 'react'

import { Footer } from './styles'

export default class PageFooter extends Component {
  render () {
    return (
      <Footer>
        {this.props.children}
      </Footer>
    )
  }
}

PageFooter.propTypes = {
}

PageFooter.defaultProps = {
}
