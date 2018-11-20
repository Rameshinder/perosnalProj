import React, { Component } from 'react'
import Button from '@anz/button'
import {Maincontainer, RowWrapper, KeyDisplayDiv, KeyNumber, KeyText} from './styles'

export class Keypad extends Component {
  constructor (props) {
    super(props)
    this.keyPadClick = this.keyPadClick.bind(this)
    this.keyPadClear = this.keyPadClear.bind(this)
    this.keyPadBack = this.keyPadBack.bind(this)
  }

  keyPadClick (key) {
    this.props.callbackFromKeyPad(key)
  }

  keyPadClear (key) {
    this.props.callbackForKeyPadClear(key)
  }

  keyPadBack () {
    this.props.callbackForKeyPadBack()
  }

  render () {
    return (
      <Maincontainer>
        <p>Enter your PIN on the Keypad</p>
        <RowWrapper>
          <Button data-test-id='keypad-one' variant='normal' size='medium' onClick={() => this.keyPadClick(1)} value={1}><KeyDisplayDiv><KeyNumber>{1}</KeyNumber><KeyText>{''}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-two' variant='normal' size='medium' onClick={() => this.keyPadClick(2)}><KeyDisplayDiv><KeyNumber>{2}</KeyNumber><KeyText>{'ABC'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-three'variant='normal' size='medium' onClick={() => this.keyPadClick(3)}><KeyDisplayDiv><KeyNumber>{3}</KeyNumber><KeyText>{'DEF'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-four' variant='normal' size='medium' onClick={() => this.keyPadClick(4)}><KeyDisplayDiv><KeyNumber>{4}</KeyNumber><KeyText>{'GHI'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-five' variant='normal' size='medium' onClick={() => this.keyPadClick(5)}><KeyDisplayDiv><KeyNumber>{5}</KeyNumber><KeyText>{'JKL'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-six' variant='normal' size='medium' onClick={() => this.keyPadClick(6)}><KeyDisplayDiv><KeyNumber>{6}</KeyNumber><KeyText>{'MNO'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-seven' variant='normal' size='medium' onClick={() => this.keyPadClick(7)}><KeyDisplayDiv><KeyNumber>{7}</KeyNumber><KeyText>{'PQRS'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-eight' variant='normal' size='medium' onClick={() => this.keyPadClick(8)}><KeyDisplayDiv><KeyNumber>{8}</KeyNumber><KeyText>{'TUV'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-nine' variant='normal' size='medium' onClick={() => this.keyPadClick(9)}><KeyDisplayDiv><KeyNumber>{9}</KeyNumber><KeyText>{'WXYZ'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-clear' variant='normal' size='medium' onClick={() => this.keyPadClear('clear')}><KeyDisplayDiv><KeyNumber>{'Clear'}</KeyNumber><KeyText>{''}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-zero' variant='normal' size='medium' onClick={() => this.keyPadClick(0)}><KeyDisplayDiv><KeyNumber>{0}</KeyNumber><KeyText>{'.'}</KeyText></KeyDisplayDiv></Button>
          <Button data-test-id='keypad-back' variant='normal' size='medium' onClick={() => this.keyPadBack()}><KeyDisplayDiv><KeyNumber>{'Back'}</KeyNumber><KeyText>{''}</KeyText></KeyDisplayDiv></Button>
        </RowWrapper>
      </Maincontainer>
    )
  }
}

export default Keypad
