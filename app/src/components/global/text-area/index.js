import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {TextAreaMain, TextAreaCount, TextAreaContent} from './styles'
import AppConstants from '../../../common/utils/constant'
import ReactDOM from 'react-dom'

export class TextArea extends Component {
  constructor (props) {
    super(props)
    this.initiliazeState(props)
    this.initialize()
    this.initiliazeState = this.initiliazeState.bind(this)
  }

  initialize () {
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  initiliazeState (props) {
    const {textAreaTitle, rows, cols, placeholder, maxlength, autofocus} = props
    this.state = {
      textAreaTitle,
      rows,
      cols,
      placeholder,
      maxlength,
      autofocus,
      remainingCharacters: null,
      maxlengthCount: null
    }
  }

  componentDidMount () {
    let {hasTransition, transitionTiming} = this.props
    this.setState({remainingCharacters: (this.props.maxlength !== undefined ? this.props.maxlength : 250)})
    this.setState({maxlengthCount: (this.props.maxlength !== undefined ? this.props.maxlength : 250)})
    if (hasTransition) {
      setTimeout(() => {
        this.refs.textArea && ReactDOM.findDOMNode(this.refs.textArea).focus()
      }, transitionTiming)
    }
  }

  handleFocus () {
    this.props.onFocus()
  }

  handleBlur () {
    this.props.onBlur()
  }

  handleChange=(value) => {
    const totalCharactersEntered = value.length
    const totalCharacters = this.state.maxlengthCount
    let remainingCount = totalCharacters - totalCharactersEntered
    this.setState({remainingCharacters: remainingCount})
    this.props.textAreaFunc(value)
  }

  render () {
    const {textAreaTitle, rows, cols, placeholder, remainingCharacters, autofocus} = this.state
    return (
      <TextAreaMain>
        <TextAreaContent title={textAreaTitle}
          data-test-id={`${textAreaTitle}-textarea`}
          id={`${textAreaTitle}-textarea`}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          maxLength={this.state.maxlengthCount}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={() => { this.handleChange(document.getElementById(`${textAreaTitle}-textarea`).value) }}
          autoFocus={autofocus}
          ref={AppConstants.TEXT_AREA}
        />
        <TextAreaCount for={`${textAreaTitle}-textarea`}>{remainingCharacters}</TextAreaCount>
      </TextAreaMain>
    )
  }
}

TextArea.propTypes = {
  textAreaTitle: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  hasTransition: PropTypes.boolean,
  transitionTiming: PropTypes.number
}

TextArea.defaultProps = {
  transitionTiming: 500
}
export default TextArea
