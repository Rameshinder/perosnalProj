import React, { Component } from 'react'
import Rating from '../rating'
import Modal from '../../global/modal'
import Heading from '../../global/heading'
import {Row} from '../../global/grid'
import Icon from '../../icon'
import Accordion from '../../global/accordion'
import FeedBackService from '../../../common/services/api/feedBackService'
import {FeedbackHeading, FeedbackRating, AcknowledgeCheck,
  Acknowledgetext, AcknowledgeCheckIcon, AcknowledgeCheckIconBorder,
  Feedbacktext, Commentsbox, Tapcall, Commentswrapper,
  FeedbackWrapper, FeedbackAckWrapper, HeadingWrapper,
  TextAreaWrapper, FeedbackWarningWrapper, Acknowledgeloader,
  FeedbackLoaderHeading, FeedbackLoaderWrapper} from './styles'
import AppConstants from '../../../common/utils/constant'
import Spinner from '../../global/spinner'
import ErrorMessage from '../../global/errorMessage'
import styleVars from '../../../common/styles-global/global'
class FeedbackForm extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState()
  }

  initialize () {
    this.onClose = this.onClose.bind(this)
    this.ratingValue = this.ratingValue.bind(this)
    this.onSend = this.onSend.bind(this)
    this.handleTextAreaContent = this.handleTextAreaContent.bind(this)
    this.onApplyClick = this.onApplyClick.bind(this)
    this.onClickSecuremail = this.onClickSecuremail.bind(this)
    this.onEnterSecureMail = this.onEnterSecureMail.bind(this)
  }

  initializeState () {
    this.state = {
      isOpen: this.props.isOpen,
      buttonDisable: true,
      acknowledgestate: false,
      ratingFeedback: null,
      ratingDescription: null,
      screenWidth: document.body.offsetWidth,
      operatingSystem: navigator.appVersion,
      browserVersion: navigator.userAgent,
      errorstate: false,
      loading: false
    }
  }
  onEnterSecureMail (e) {
    if (e.key === 'Enter') {
      this.onClickSecuremail()
    }
  }

  onSend () {
    this.setState({
      loading: true
    })
    let screenHeight = document.body.offsetHeight
    let deviceType = AppConstants.DEVICE_TYPE_DESK
    if (this.state.screenWidth > 768) {
      deviceType = AppConstants.DEVICE_TYPE_DESK
    }
    if (this.state.screenWidth > 480 && this.state.screenWidth < 769) {
      deviceType = AppConstants.DEVICE_TYPE_TAB
    }
    if (this.state.screenWidth < 481) {
      deviceType = AppConstants.DEVICE_TYPE_MOB
    }

    let osName = AppConstants.OSNAME
    if (this.state.operatingSystem.indexOf(AppConstants.OSNAME_WIN1) !== -1) { osName = AppConstants.OSNAME_WIN }
    if (this.state.operatingSystem.indexOf(AppConstants.OSNAME_MAC1) !== -1) { osName = AppConstants.OSNAME_MAC }
    if (this.state.operatingSystem.indexOf(AppConstants.OSNAME_X11) !== -1) { osName = AppConstants.OSNAME_X12 }
    if (this.state.operatingSystem.indexOf(AppConstants.OSNAME_LINUX) !== -1) { osName = AppConstants.OSNAME_LINUX }

    let cookieEnabled = navigator.cookieEnabled

    let browserName = navigator.appName
    let fullVersion = '' + parseFloat(this.state.operatingSystem)
    let majorVersion = parseInt(this.state.operatingSystem, 10)
    let nameOffset, verOffset, codeLen
    if ((verOffset = this.state.browserVersion.indexOf(AppConstants.BROWSERNAME_OPERA)) !== -1) {
      browserName = AppConstants.BROWSERNAME_OPERA
      fullVersion = this.state.browserVersion.substring(verOffset + 6)
      if ((verOffset = this.state.browserVersion.indexOf(AppConstants.VERSION)) !== -1) {
        fullVersion = this.state.browserVersion.substring(verOffset + 8)
      }
    } else if ((verOffset = this.state.browserVersion.indexOf(AppConstants.BROWSERNAME_MSIE2)) !== -1) {
      browserName = AppConstants.BROWSERNAME_MSIE1
      fullVersion = this.state.browserVersion.substring(verOffset + 5)
    } else if ((verOffset = this.state.browserVersion.indexOf(AppConstants.BROWSERNAME_CHROME)) !== -1) {
      browserName = AppConstants.BROWSERNAME_CHROME
      fullVersion = this.state.browserVersion.substring(verOffset + 7)
    } else if ((verOffset = this.state.browserVersion.indexOf(AppConstants.BROWSERNAME_SAFARI)) !== -1) {
      browserName = AppConstants.BROWSERNAME_SAFARI
      fullVersion = this.state.browserVersion.substring(verOffset + 7)
      if ((verOffset = this.state.browserVersion.indexOf(AppConstants.VERSION)) !== -1) {
        fullVersion = this.state.browserVersion.substring(verOffset + 8)
      }
    } else if ((verOffset = this.state.browserVersion.indexOf(AppConstants.BROWSERNAME_FIREFOX)) !== -1) {
      browserName = AppConstants.BROWSERNAME_FIREFOX
      fullVersion = this.state.browserVersion.substring(verOffset + 8)
    } else if ((nameOffset = this.state.browserVersion.lastIndexOf(' ') + 1) <
  (verOffset = this.state.browserVersion.lastIndexOf('/'))) {
      browserName = this.state.browserVersion.substring(nameOffset, verOffset)
      fullVersion = this.state.browserVersion.substring(verOffset + 1)
      if (browserName.toLowerCase() === browserName.toUpperCase()) {
        browserName = navigator.appName
      }
    }
    if ((codeLen = fullVersion.indexOf(';')) !== -1) {
      fullVersion = fullVersion.substring(0, codeLen)
    }
    if ((codeLen = fullVersion.indexOf(' ')) !== -1) {
      fullVersion = fullVersion.substring(0, codeLen)
    }

    majorVersion = parseInt('' + fullVersion, 10)
    if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(this.state.operatingSystem)
      majorVersion = parseInt(this.state.operatingSystem, 10)
    }

    let feedBackData =
    {
      'screenWidth': this.state.screenWidth,
      'screenHeight': screenHeight,
      'deviceType': deviceType,
      'feedbackComments': this.state.ratingDescription,
      'operatingSystem': osName,
      'browserInformation': browserName,
      'browserVersion': fullVersion,
      'reviewRating': this.state.ratingFeedback,
      'cookieEnabled': cookieEnabled
    }
    FeedBackService.getfeedBackDetails(feedBackData)
      .then(response => {
        const feedbackStatus = response.status
        if (feedbackStatus === AppConstants.RESPONSE_STATUS) {
          this.setState({
            loading: false,
            acknowledgestate: true
          })
        }
      }).catch(error => {
        if (error) {
          this.setState({
            loading: false,
            errorstate: true
          })
        }
      })
  }

  ratingValue (dataFromChild) {
    let buttonDisable = true
    if (dataFromChild > 0) {
      buttonDisable = false
    }
    this.setState({rating_Feedback: dataFromChild, buttonDisable})
  }
  onClose () {
    this.props.onClose()
    this.setState({
      acknowledgestate: false,
      buttonDisable: true
    })
  }
  onApplyClick () {
    window.open(AppConstants.IB_FEEDBACK_APPLY_LINK, '_blank')
  }
  onClickSecuremail () {
    window.open(AppConstants.IB_URL_MAIL_SFX)
    this.props.onClose()
    this.setState({
      isOpen: this.props.isOpen,
      buttonDisable: true,
      acknowledgestate: false,
      ratingFeedback: null,
      ratingDescription: null,
      screenWidth: document.body.offsetWidth,
      operatingSystem: navigator.appVersion,
      browserVersion: navigator.userAgent,
      errorstate: false,
      loading: false
    })
  }
  handleTextAreaContent (langValue) {
    this.setState({
      ratingDescription: langValue
    })
  }

  render () {
    const {loading, acknowledgestate, errorstate} = this.state
    let feedbackformcontent = null
    if (loading) {
      feedbackformcontent = (
        <FeedbackLoaderWrapper><Modal
          show={false}
          title={AppConstants.FEEDBACK_TITLE}
          cancelFooterText={AppConstants.FEEDBACK_FORM_CANCEL}
          sendFooterText={AppConstants.FEEDBACK_FORM_SUBMIT}
          disableCancel={false}
          disableSend={false}
          width={430}
          height={400}>
          <Acknowledgeloader>
            <Spinner />
          </Acknowledgeloader>
          <FeedbackLoaderHeading>
            <Heading level='2' tabIndex={0} aria-label={AppConstants.LOADER_MSG}>{AppConstants.LOADER_MSG}</Heading>
          </FeedbackLoaderHeading>
        </Modal>
        </FeedbackLoaderWrapper>
      )
    } else if (acknowledgestate) {
      feedbackformcontent = (
        <FeedbackAckWrapper><Modal
          show={false}
          cancelFooterText={AppConstants.FEEDBACK_FORM_ACK_BUTTON}
          sendFooterText={AppConstants.FEEDBACK_FORM_APPLY}
          title={AppConstants.FEEDBACK_TITLE}
          onClose={this.onClose}
          handleClick={this.onApplyClick}
          disableCancel={false}
          disableSend={false}
          width={430}
        >
          <Row collapse>
            <AcknowledgeCheck>
              <AcknowledgeCheckIconBorder>
                <AcknowledgeCheckIcon>
                  <Icon iconName={AppConstants.CHECK_ICON} color={styleVars.color.successColor} />
                </AcknowledgeCheckIcon>
              </AcknowledgeCheckIconBorder>

            </AcknowledgeCheck>
          </Row>
          <Row collapse>
            <FeedbackHeading>
              <Heading level='2' tabIndex={0} aria-label={AppConstants.FEEDBACK_ACK}>{AppConstants.FEEDBACK_ACK}</Heading>
            </FeedbackHeading>
          </Row>
          <Row collapse>
            <Acknowledgetext>
              <Heading level='4' tabIndex={0} aria-label={AppConstants.FEEDBACK_ACK_INFO}>{AppConstants.FEEDBACK_ACK_INFO}</Heading>
            </Acknowledgetext>
          </Row>
        </Modal>
        </FeedbackAckWrapper>)
    } else if (errorstate) {
      feedbackformcontent = (
        <FeedbackWarningWrapper><Modal
          show={false}
          title={AppConstants.FEEDBACK_TITLE}
          cancelFooterText={AppConstants.FEEDBACK_FORM_CANCEL}
          sendFooterText={AppConstants.FEEDBACK_FORM_SUBMIT}
          onClose={this.onClose}
          width={430}>
          <ErrorMessage heading={AppConstants.FEEDBACK_ERROR} message={AppConstants.FEEDBACK_ERROR_INFO}
            icon={AppConstants.WARNING_ICON} iconColor={styleVars.color.errorColor}
          />
        </Modal>
        </FeedbackWarningWrapper>)
    } else {
      feedbackformcontent = (
        <FeedbackWrapper><Modal
          show={false}
          cancelFooterText={AppConstants.FEEDBACK_FORM_CANCEL}
          sendFooterText={AppConstants.FEEDBACK_FORM_SUBMIT}
          title={AppConstants.FEEDBACK_TITLE}
          onClose={this.onClose}
          disableCancel={false}
          disableSend={this.state.buttonDisable}
          handleClick={this.onSend}
          width={430}>
          <Row collapse>
            <FeedbackHeading>
              <Heading level='1' proLight tabIndex={0} aria-label={AppConstants.FEEDBACK_FORM}>{AppConstants.FEEDBACK_FORM}</Heading>
            </FeedbackHeading>
          </Row>
          <Row collapse>
            <FeedbackRating>
              <Rating callbackFromParent={this.ratingValue} />
            </FeedbackRating>
            <Feedbacktext>
              <HeadingWrapper level='4' proRegularFontSize tabIndex={0} aria-label={AppConstants.FEEDBACK_FORM_RATE}>{AppConstants.FEEDBACK_FORM_RATE}</HeadingWrapper>
            </Feedbacktext>
            <Commentswrapper>
              <Accordion
                title={AppConstants.COMMENTS_HEADING}
                stayOpen={false}
                enableEnter
                id={AppConstants.COMMENTS_HEADING_ID}
                collapseAccordion
              >
                <Commentsbox>
                  <Heading level='4' tabIndex={0} aria-label={AppConstants.FEEDBACK_COMMENTS}>{AppConstants.FEEDBACK_COMMENTS}</Heading>
                  <TextAreaWrapper placeholder={AppConstants.FEEDBACK_COMMENTS_PLACEHOLDER}
                    textAreaFunc={this.handleTextAreaContent} hasTransition transitionTiming={500}
                  />
                </Commentsbox>
                <Tapcall>
                  <Heading level='4' tabIndex={0} aria-label={AppConstants.TAPCALL_INFO}>{AppConstants.TAPCALL_INFO}</Heading>
                  <Heading level='4' tabIndex={0} aria-label='Call 131344 or send us a'>{AppConstants.TAP_CALL_TEXT1 }<strong>{AppConstants.TAP_CALL_NO}</strong>{AppConstants.TAP_CALL_TEXT2}<a href onClick={this.onClickSecuremail} onKeyUp={this.onEnterSecureMail} tabIndex={0} title={AppConstants.SECUREMAIL}>{AppConstants.SECUREMAIL}</a>.</Heading>
                </Tapcall>
              </Accordion>
            </Commentswrapper>
          </Row>
        </Modal>
        </FeedbackWrapper>
      )
    }
    return (

      <div>
        {feedbackformcontent}
      </div>

    )
  }
}

export default FeedbackForm
