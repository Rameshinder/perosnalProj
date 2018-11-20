import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { InputTextContainer, ErrorSpan } from './styles'

export class InputText extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyup = this.handleKeyup.bind(this)
    this.handleKeypress = this.handleKeypress.bind(this)
    this.state = {showError: false}
  }

  handleChange (e) {
    this.props.onChange(e.target.value)
  }

  handleClick (e) {
    this.props.onClick && this.props.onClick(e.target.value)
  }

  handleKeyup (e) {
    this.props.onkeyup && this.props.onkeyup(e.target.value)
  }

  handleKeypress (e) {
    this.props.onKeyPress && this.props.onKeyPress(e)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !_.isEqual(this.props, nextProps) || !_.isEqual(this.state, nextState)
  }

  render () {
    return (
      <InputTextContainer >
        <input
          type={this.props.type}
          tabIndex={0}
          aria-label={this.props.ariaLabel}
          aria-required={this.props.ariaRequired}
          id={this.props.id}
          ref={this.props.id}
          data-test-id={this.props.id}
          name={this.props.name}
          maxLength={this.props.length}
          value={(this.props.inputValue && this.props.inputValue.toString()) || ''}
          onChange={e => this.handleChange(e)}
          onClick={e => this.handleClick(e)}
          onKeyUp={e => this.handleKeyup(e)}
          onKeyPress={e => this.handleKeypress(e)}
          placeholder={this.props.placeholderText}
          readOnly={this.props.readOnly}
          data-required={this.props.required}
        />
        {this.props.error && <ErrorSpan>{this.props.errorMessage}</ErrorSpan>}
      </InputTextContainer>
    )
  }
}

InputText.propTypes = {
  patternRegex: PropTypes.string,
  errorMessage: PropTypes.string,
  defaultErrorMessage: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onkeyup: PropTypes.func,
  onKeyPress: PropTypes.func,
  name: PropTypes.string,
  autocapsformat: PropTypes.bool,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  placeholderText: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  length: PropTypes.number
}

InputText.defaultProps = {
  autocapsformat: false
}

export default InputText
