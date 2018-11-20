import React, { Component } from 'react'
import Icon from '../icon'
import FeedbackForm from './feedbackform'
import Heading from '../global/heading'
import AppConstants from '../../common/utils/constant'
import styleVars from '../../common/styles-global/global'
import {Feedback, FeedbackLink, FeedbackWrapper} from './styles'
class FeedbackPage extends Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState(props)
  }
  initialize () {
    this.onClose = this.onClose.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  initializeState () {
    this.state = {
      isOpen: false
    }
  }
  onKeyPress (e) {
    if (e.key === 'Enter') {
      this.onClose()
    }
  }
  onClose () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const {isOpen} = this.state
    return (
      <FeedbackWrapper>
        <Feedback>
          <FeedbackLink data-test-id='FeedbackLink' onClick={this.onClose} tabIndex={0} onKeyUp={this.onKeyPress} aria-label={AppConstants.FEEDBACK_TITLE}>
            <Icon data-test-id='chatIcon' iconName={AppConstants.FEEDBACK_CHAT} color={styleVars.color.chatIcon} />
          </FeedbackLink>
          <Heading level='4' data-test-id='FeedbackChatIcon'>{AppConstants.FEEDBACK_TITLE}</Heading>
        </Feedback>
        {isOpen ? <FeedbackForm isOpen={this.state.isOpen} onClose={this.onClose} /> : null}
      </FeedbackWrapper>
    )
  }
}

export default FeedbackPage
