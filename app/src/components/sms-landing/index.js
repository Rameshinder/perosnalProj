import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'

import Button from '@anz/button'

import InputText from '../global/input-text/index'
import PageContainer from '../global/page-container/index'
import PageFooter from '../global/page-footer/index'
import { H1, P } from '../global/heading/index'

import AppConstants from '../../common/utils/constant'
import AppUtils from '../../common/utils/util'

import UserInfoService from '../../common/services/api/UserInfoService'

import {
  StepUp,
  StepUpWrapper,
  StepUpVerfication,
  CenterDiv,
  SendOTP,
  VerifyOTP,
  Anchor
} from './styles'

const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export class SMSLanding extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState()
  }

  initializeState () {
    this.state = {
      showOTPField: false,
      card: '',
      otpValue: '',
      error: true,
      sentOTP: '123456'
    }
  }

  initialize () {
    this.verifyOTP = this.verifyOTP.bind(this)
    this.sendSMSAndNavigate = this.sendSMSAndNavigate.bind(this)
    this.resendSMS = this.resendSMS.bind(this)
    this.handleOTPChange = this.handleOTPChange.bind(this)
    this.fetchUserInfo = this.fetchUserInfo.bind(this)
    this.dispatchFetchRequest = this.dispatchFetchRequest.bind(this)
    this.dispatchFetchFailure = this.dispatchFetchFailure.bind(this)
    this.dispatchFetchSuccess = this.dispatchFetchSuccess.bind(this)
    this.onCacelClick = this.onCacelClick.bind(this)
  }

  verifyOTP () {
    this.props.history.push('/manageCardPin')
  }

  onCacelClick () {
    this.props.history.push('/managePin')
  }

  sendSMSAndNavigate () {
    this.fetchUserInfo()
    this.dispatchFetchRequest()
    this.setState({
      showOTPField: true,
      sentOTP: '234567'
    })
  }

  resendSMS () {
    this.setState({
      showOTPField: true
    })
  }

  handleOTPChange (e) {
    this.setState({
      otpValue: e
    }, () => {
      if (e.length === 6 && e !== this.state.sentOTP) {
        this.setState({
          error: true,
          otpMatch: false,
          errorMessage: 'OTP does not match'
        })
      } else {
        this.setState({
          error: false,
          otpMatch: false
        })
      }
    })
  }

  getCardDigits (card) {
    return card && card.substring(12)
  }

  componentWillMount () {
    this.fetchUserInfo()
    this.dispatchFetchRequest()
  }

  dispatchFetchRequest () {
    this.props.actions.showSpinner()
  }

  dispatchFetchFailure (error) {
    this.props.actions.FetchUserInfoFailure(error)
    this.props.actions.hideSpinner()
  }

  dispatchFetchSuccess (userInfo) {
    this.props.actions.FetchUserInfoSuccess(userInfo)
    const info = this.props.state.userInfo.data
    this.setState({
      userInfo: info
    })
  }

  fetchUserInfo () {
    const token = this.props.state.cardList.cards.jwtToken
    const payLoad = {
      'jwtToken': token
    }
    UserInfoService
      .getUserInfo(payLoad)
      .then(response => {
        this.props.actions.hideSpinner()
        const UserInfo = response.data
        this.dispatchFetchSuccess(UserInfo)
      })
      .catch(e => {
        this.dispatchFetchFailure(e)
        this.props.actions.hideSpinner()
      })
  }

  render () {
    const card = this.props.state.selectedCard && this.props.state.selectedCard.data
    const { showOTPField, otpValue, errorMessage } = this.state
    const CardNumber = card && card.number
    const cardDigits = this.getCardDigits(CardNumber)
    return (
      <StepUp>
        <PageContainer>
          <StepUpWrapper>
            <H1 proLight>{AppConstants.VERIFY_PIN}</H1>
            <StepUpVerfication>
              <P>
                {`${AppConstants.PIN_CHANGE_INFO_1} ${cardDigits}${AppConstants.PIN_CHANGE_INFO_2}`}
              </P>
              <p>
                {this.state.userInfo && AppUtils.formatMobileNumber(this.state.userInfo.data.mobileNumber)}
              </p>
              {
                showOTPField
                  ? <VerifyOTP>
                    <InputText id='otp-text' name='otp-text' data-test-id='otp-text' length={6} maxLength={6} onChange={this.handleOTPChange} inputValue={otpValue} error errorMessage={errorMessage} />
                    <Anchor tabIndex={0} id='resendSMS'data-test-id='resendSMS' name='resendSMS' onClick={this.resendSMS}>{AppConstants.SEND_NEW_CODE}</Anchor>
                    <Button id='verify-otp-continue' name='verify-otp-continue' data-test-id='verify-otp-continue' variant='normal' size='medium' onClick={this.verifyOTP}>
                      {AppConstants.CONTINUE}
                    </Button>
                  </VerifyOTP>
                  : <SendOTP>
                    <Button id='sms-navigate' name='sms-navigate' data-test-id='sms-navigate' variant='normal' size='medium' onClick={this.sendSMSAndNavigate}>
                      {AppConstants.SEND_SMS_CODE}
                    </Button>
                  </SendOTP>
              }
              <Anchor tabIndex={0} id='cancel-send-sms' name='cancel-send-sms' data-test-id='cancel-send-sms' onClick={this.onCacelClick}><P>{AppConstants.CANCEL}</P></Anchor>
            </StepUpVerfication>
          </StepUpWrapper>
        </PageContainer>
        <PageFooter>
          <CenterDiv>
            <p>{AppConstants.PAGE_FOOTER_TEXT_1}</p>
            <p>{AppConstants.PAGE_FOOTER_TEXT_2}</p>
          </CenterDiv>
        </PageFooter>
      </StepUp>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SMSLanding)
