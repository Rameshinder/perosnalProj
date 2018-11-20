import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon'
import Heading from '../heading'
import { Container, Message, IconWrapper } from './styles'

class ErrorMessage extends Component {
  constructor (props) {
    super(props)
    this.initializeState = this.initializeState.bind(this)
    this.initializeState(props)
  }

  initializeState (props) {
    const {heading, message, icon, iconColor} = props
    this.state = {
      heading,
      message,
      icon,
      iconColor
    }
  }

  render () {
    const {heading, message, icon, iconColor} = this.state
    return (
      <Container>
        {icon ? <IconWrapper>
          <Icon iconName={icon} color={iconColor} data-test-id={icon} />
        </IconWrapper> : null}
        <Heading level='1' tabIndex={0} aria-label={heading}> {heading} </Heading>
        <Message tabIndex={0} aria-label={message}>
          {message}
        </Message>
      </Container>
    )
  }
}

ErrorMessage.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string
}

export default ErrorMessage
