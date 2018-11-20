import React, { Component } from 'react'
import PrintIcon from '../../icon'
import { Anchor } from './styles'

class Print extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
  }

  initialize () {
    this.printDiv = this.printDiv.bind(this)
    this.printDivOnKeyPress = this.printDivOnKeyPress.bind(this)
  }

  printDiv () {
    window.print()
  }

  printDivOnKeyPress (e) {
    if (e.key === 'Enter') {
      window.print()
    }
  }
  render () {
    return (
      <Anchor id='print' name='print' data-test-id='print' tabIndex={0} onKeyPress={this.printDivOnKeyPress} onClick={this.printDiv}>
        <PrintIcon iconName='Print' />
        <span>Print</span>
      </Anchor>
    )
  }
}
export default Print
