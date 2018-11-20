import React from 'react'
import PropTypes from 'prop-types'
import Button from '@anz/button'
import AppConstant from '../../../common/utils/constant'
import Icon from '../../icon/index'
import styleVars from '../../../common/styles-global/global'
import {
  ModalBackdrop,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Hr,
  Anchor,
  HeadingWrapper
} from './styles'
import ReactDOM from 'react-dom'
class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.initialize = this.initialize.bind(this)
    this.initialize()
    this.initializeState(props)
  }

  initialize () {
    this.closeModal = this.closeModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  initializeState (props) {
    const {show, title, cancelFooterText, sendFooterText, height, width, disableCancel, disableSend} = props
    this.state = {
      show,
      title,
      cancelFooterText,
      sendFooterText,
      height,
      width,
      disableCancel,
      disableSend
    }
  }
  componentDidMount () {
    this.refs.modalCmp && ReactDOM.findDOMNode(this.refs.modalCmp).focus()
  }
  componentWillReceiveProps (nextProps) {
    this.initializeState(nextProps)
  }
  closeModal () {
    this.props.onClose()
  }
  handleClick () {
    this.props.handleClick()
    this.refs.modalCmp && ReactDOM.findDOMNode(this.refs.modalCmp).focus()
  }

  render () {
    const {show, title, cancelFooterText, sendFooterText, height, width, disableCancel, disableSend} = this.state
    return (
      <ModalBackdrop>
        <ModalLayout tabIndex={0} addAnimation={show} height={height} width={width} ref={AppConstant.MODAL_REF} title={AppConstant.MODAL_TITLE} role={AppConstant.MODAL_ROLE} data-test-id={AppConstant.MODAL_REF}>
          <ModalHeader>
            <HeadingWrapper level='2' tabIndex={0} aria-label={title}>{title} </HeadingWrapper>
            <Anchor href='javascript:void(0)' tabIndex={0} onClick={this.closeModal} onKeyPress={this.closeModal} title={AppConstant.CLOSE}>
              <Icon iconName={AppConstant.MODAL_CLOSE_ICON} color={styleVars.color.crossiconModal} />
            </Anchor>
          </ModalHeader>
          <Hr />
          <ModalBody>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            { sendFooterText
              ? <Button variant='normal' size='small' disabled={disableSend} onClick={this.handleClick}> {sendFooterText} </Button>
              : null
            }
            { cancelFooterText
              ? <Button variant='ghost' size='small' disabled={disableCancel} onClick={this.closeModal}> {cancelFooterText} </Button>
              : null
            }
          </ModalFooter>
        </ModalLayout>
      </ModalBackdrop>
    )
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  cancelFooterText: PropTypes.string.isRequired,
  disableCancel: PropTypes.bool,
  disableSend: PropTypes.bool,
  sendFooterText: PropTypes.string.isRequired
}

Modal.defaultProps = {
  disableCancel: true,
  disableSend: true
}

export default Modal
