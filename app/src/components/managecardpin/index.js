import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'

import InputText from '../global/input-text/index'
import PageHeader from '../global/page-header/index'
import AppConstants from '../../common/utils/constant'
import Keypad from '../global/keypad/index'
import { Column } from '../global/grid'
import Util from '../../common/utils/util'
import Icon from '../icon'
import styleVars from '../../common/styles-global/global'

import PageContainer from '../global/page-container/index'

import {
  ManageCardPinWrapper,
  Rowwrap,
  ManageCardName,
  CardDatalabel,
  CardDataWrapper,
  ManageCardPinTextContainer,
  CardDetails,
  ImageDivStyle,
  PinIncorrect,
  ManagePinMainLabel,
  KeypadContainer,
  CenterDiv
} from './styles'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})
export class ManagePinCard extends Component {
  constructor (props) {
    super(props)
    this.newBox = this.newBox.bind(this)
    this.newConfirmBox = this.newConfirmBox.bind(this)
    this.confirmBoxPin = this.confirmBoxPin.bind(this)
    this.newBoxPin = this.newBoxPin.bind(this)
    this.pinConfirmDataEntry = this.pinConfirmDataEntry.bind(this)
    this.cancelManagePin = this.cancelManagePin.bind(this)
    this.managePinSave = this.managePinSave.bind(this)
    this.pinKeyPress = this.pinKeyPress.bind(this)
    this.encryptNewPinValue = this.encryptNewPinValue.bind(this)
    this.navigateToCardList = this.navigateToCardList.bind(this)

    this.state = {
      newPinValue: '',
      newPinValueDisplay: '',
      newConfirmPinValue: '',
      newConfirmPinValueDisplay: '',
      boxSelection: true,
      passwordValidation: false,
      ButtonCancel: AppConstants.CANCEL,
      ButtonSave: true,
      cancelButtonDisabled: false,
      saveButtonDisabled: true,
      showPrimaryButton: true,
      showSecondaryButton: true,
      primaryButtonText: AppConstants.SAVE,
      managePinSetSuccess: false,
      encryptedPIn: ''
    }
  }

  newBox (e) {
    this.setState({
      newPinValue: e,
      newPinValueDisplay: e
    })
    setTimeout(() =>
      this.setState({
        newPinValueDisplay: this.encryptNewPinValue(this.state.newPinValue)
      })
      , 250)
    this.pinConfirmDataEntry()
    if (e.length === 4) {
      this.setState({
        boxSelection: false
      })
      document.getElementById('managepin-newconfirmtext').focus()
    }
  }

  navigateToCardList () {
    this.props.history.push('/managePin')
  }

  managePinSave () {
    const pubKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7iH53t3ftgT2+jei/i/nOGXKQCKi4vDpxwbLV5bcIPUbXN4UnXAP9MxwN2hQLhdJBr1g0EURAzrYemdHWaLMCSL6cYxvZNCi16ZxyqrgQ1H1B1qmIVPlcwbxxBWURxds/sL4dL1W1K6kJU6ECyAz4CfmxhhhUjZD/t7mK2rYuQS9eckM53Ta4oLzMX/ID28KsLqeQqmSkKvL831aZ82JW4PLEz83i35UDdUTded32iBeKIs3XuViqlNPl2Ad9DfgIlFYoLULG+QYz+vq8IXfLEMX6P+atoeKhdhUHWjGjNlwlx1FKSn0CuHVO68prGnZsBOFaFX8OutoK6iyotItlwIDAQAB'
    const data = this.state.newPinValue
    const panref = '4321987654321098'
    let encryptedString = window.getEncryptedIPB(pubKey, data, panref)
    console.log('encrypted string', encryptedString)
    this.setState({
      managePinSetSuccess: true,
      encryptedPIn: encryptedString
    })
  }
  newBoxPin () {
    this.setState({
      boxSelection: true
    })
  }

  confirmBoxPin () {
    this.setState({
      boxSelection: false
    })
  }

  newConfirmBox (e) {
    this.setState({
      newConfirmPinValue: e,
      newConfirmPinValueDisplay: e
    })
    setTimeout(() =>
      this.setState({
        newConfirmPinValueDisplay: this.encryptNewPinValue(this.state.newConfirmPinValue)
      })
      , 250)
  }

  encryptNewPinValue (value) {
    let encryptedValue = []
    for (let i = 0; i <= value.length; i++) {
      if (i < value.length) {
        encryptedValue.push('*')
      } else {
        encryptedValue.push(value.substring(i))
      }
    }
    return encryptedValue.join('')
  }

  cancelManagePin () {
    if (this.state.ButtonCancel === AppConstants.START) {
      this.setState({
        newPinValue: '',
        newPinValueDisplay: '',
        newConfirmPinValueDisplay: '',
        newConfirmPinValue: '',
        ButtonCancel: AppConstants.CANCEL,
        passwordValidation: false,
        ButtonSave: true
      })
    }
    this.props.history.push('/managePin')
  }

  pinKeyPress (e) {
    let charCode = e.which ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault()
    }
  }

  pinConfirmDataEntry (dataFromKeyPad, value) {
    if (dataFromKeyPad && value !== undefined) {
      if (value && this.state.newPinValue.length < 4) {
        this.state.newPinValue += dataFromKeyPad
      } else if (!value && this.state.newConfirmPinValue.length < 4) {
        this.state.newConfirmPinValue += dataFromKeyPad
      }
    }
    if (
      this.state.newPinValue.length === 4 &&
      this.state.newConfirmPinValue.length === 4
    ) {
      if (this.state.newPinValue === this.state.newConfirmPinValue) {
        this.setState({
          passwordValidation: false,
          ButtonCancel: AppConstants.CANCEL,
          saveButtonDisabled: false,
          ButtonSave: false
        })
      } else {
        this.setState({
          passwordValidation: true,
          saveButtonDisabled: true,
          ButtonCancel: AppConstants.START,
          ButtonSave: true
        })
      }
    } else {
      this.setState({
        ButtonSave: true,
        saveButtonDisabled: true
      })
    }
  }

  manageCardPinText = dataFromKeyPad => {
    if (this.state.boxSelection === true) {
      if (this.state.newPinValue.length < 4) {
        this.setState({
          newPinValue: this.state.newPinValue + '' + dataFromKeyPad,
          newPinValueDisplay: this.state.newPinValueDisplay + '' + dataFromKeyPad
        })
        setTimeout(() =>
          this.setState({
            newPinValueDisplay: this.encryptNewPinValue(this.state.newPinValue)
          })
          , 250)
        if (this.state.newPinValue.length === 3) {
          this.setState({
            boxSelection: false
          })
          document.getElementById('managepin-newconfirmtext').focus()
        }
      }
      this.pinConfirmDataEntry(dataFromKeyPad, true)
    } else {
      if (this.state.newConfirmPinValue.length < 4) {
        this.setState({
          newConfirmPinValue:
          this.state.newConfirmPinValue + '' + dataFromKeyPad,
          newConfirmPinValueDisplay:
          this.state.newConfirmPinValueDisplay + '' + dataFromKeyPad
        })
      }
      setTimeout(() =>
        this.setState({
          newConfirmPinValueDisplay: this.encryptNewPinValue(this.state.newConfirmPinValue)
        })
        , 250)
      this.pinConfirmDataEntry(dataFromKeyPad, false)
    }
  };

  clearManagePinBox = () => {
    if (this.state.boxSelection === true) {
      this.setState({ newPinValue: '', newPinValueDisplay: '', saveButtonDisabled: true })
    } else {
      this.setState({ newConfirmPinValue: '', newConfirmPinValueDisplay: '', saveButtonDisabled: true })
    }
  };

  backManagePinBox = () => {
    if (this.state.boxSelection === true) {
      this.setState({
        saveButtonDisabled: true,
        newPinValue: this.state.newPinValue.substring(0, this.state.newPinValue.length - 1),
        newPinValueDisplay: this.state.newPinValueDisplay.substring(0, this.state.newPinValueDisplay.length - 1)
      })
    } else {
      this.setState({
        saveButtonDisabled: true,
        newConfirmPinValue: this.state.newConfirmPinValue.substring(0, this.state.newConfirmPinValue.length - 1),
        newConfirmPinValueDisplay: this.state.newConfirmPinValueDisplay.substring(0, this.state.newConfirmPinValueDisplay.length - 1)
      })
    }
  };

  render () {
    const { managePinSetSuccess } = this.state
    const card = this.props.state.selectedCard && this.props.state.selectedCard.data
    const cardName = (card && card.name) || 'Frequent Flyer Master Card'
    const cardNumber = (card && card.number) || '234567890'
    const cardProductCode = card && card.productCode
    const cardProductSubCode = card && card.productSubCode
    let cardImg = 'assets/' + Util.getCardName(cardProductCode, cardProductSubCode)
    const buttonAppearance = {
      action: 'action',
      primary: 'primary'
    }
    const footerProps = {
      showPrimaryButton: this.state.showPrimaryButton,
      showSecondaryButton: this.state.showSecondaryButton,
      primaryButtonDisabled: this.state.saveButtonDisabled,
      secondaryButtonDisabled: this.state.cancelButtonDisabled,
      onSecondaryButtonClick: this.cancelManagePin,
      onPrimaryButtonClick: this.managePinSave,
      primaryButtonText: this.state.primaryButtonText,
      secondaryButtonText: this.state.ButtonCancel,
      primaryButtonAppearance: buttonAppearance.action
    }
    const successFooterProps = {
      showPrimaryButton: true,
      showSecondaryButton: false,
      primaryButtonDisabled: false,
      onPrimaryButtonClick: this.navigateToCardList,
      primaryButtonText: AppConstants.DONE,
      primaryButtonAppearance: buttonAppearance.primary
    }

    return (
      <ManageCardPinWrapper>
        <PageHeader
          dataTestId='manage-pin-header'
          id='manage-pin-header'
          name='manage-pin-header'
          heading={AppConstants.MANAGE_PIN_HEADER}
        />
        { !managePinSetSuccess
          ? <PageContainer withActionBar footerProps={footerProps}>
            <Rowwrap >
              <CardDetails>
                <ImageDivStyle src={`${cardImg}`} />
                <CardDataWrapper>
                  <ManageCardName>
                    {cardName}
                  </ManageCardName>
                  <CardDatalabel>
                    {cardNumber}
                  </CardDatalabel>
                </CardDataWrapper>
              </CardDetails>
              <Column nogap xl={6} lg={6} md={6} sm={12} xs={12}>
                <ManageCardPinTextContainer>
                  <CardDatalabel>
                    {AppConstants.MANAGEPIN_4PIN}
                  </CardDatalabel>
                  <InputText
                    id='managepin-newtext'
                    type='text'
                    name='managepin-newtext'
                    data-test-id='managepin-newtext'
                    onChange={this.newBox}
                    onClick={this.newBoxPin}
                    onkeyup={this.pinConfirmDataEntry}
                    onKeyPress={this.pinKeyPress}
                    length={4}
                    maxLength={4}
                    inputValue={this.state.newPinValueDisplay}
                  />
                </ManageCardPinTextContainer>
                <ManageCardPinTextContainer>
                  <CardDatalabel>
                    {AppConstants.MANAGEPIN_CONFIRMPIN}
                  </CardDatalabel>
                  <InputText
                    id='managepin-newconfirmtext'
                    type='text'
                    name='managepin-newconfirmtext'
                    data-test-id='managepin-newconfirmtext'
                    onChange={this.newConfirmBox}
                    onClick={this.confirmBoxPin}
                    onkeyup={this.pinConfirmDataEntry}
                    onKeyPress={this.pinKeyPress}
                    length={4}
                    maxLength={4}
                    inputValue={this.state.newConfirmPinValueDisplay}
                  />
                </ManageCardPinTextContainer>
                <ManageCardPinTextContainer>
                  {this.state.passwordValidation
                    ? <PinIncorrect>
                      {AppConstants.MANAGEPIN_MISMATCH}
                    </PinIncorrect>
                    : <ManagePinMainLabel>
                      <CardDatalabel>
                        {AppConstants.MANAGEPIN_SUGGESTION}<br />
                        {AppConstants.MANAGEPIN_SUGGESTION_EX}
                      </CardDatalabel>

                    </ManagePinMainLabel>}
                </ManageCardPinTextContainer>
              </Column>
              <Column xl={6} lg={6} md={6} sm={12} xs={12}>
                <KeypadContainer>
                  <Keypad
                    callbackFromKeyPad={this.manageCardPinText}
                    callbackForKeyPadClear={this.clearManagePinBox}
                    callbackForKeyPadBack={this.backManagePinBox}
                  />
                </KeypadContainer>
              </Column>
            </Rowwrap>

          </PageContainer>
          : <PageContainer withActionBar footerProps={successFooterProps}>
            <CenterDiv>
              <Icon iconName='Check' color={styleVars.color.successColor} />
              <p>{AppConstants.SUCCESSFUL_PIN_CHANGE}</p>
              <p>{AppConstants.CHANGES_TO_CARD}</p>
              <ManageCardName>
                {cardName}
              </ManageCardName>
              <ManageCardName>
                {cardNumber}
              </ManageCardName>
            </CenterDiv>
          </PageContainer>
        }
      </ManageCardPinWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePinCard)
