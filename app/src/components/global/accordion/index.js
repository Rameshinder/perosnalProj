import React, { Component } from 'react'

import { SectionWrapper, OuterWrapper, IconWrapper } from './styles'
import Icon from '../../icon'
import AppConstants from '../../../common/utils/constant'

export default class Accordion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      innerAccCls: AppConstants.ACCORD_BEFORE_CLS,
      visibility: props.stayOpen
    }

    this.handleClick = this.handleClick.bind(this)
    this.onEnterKeyPress = this.onEnterKeyPress.bind(this)
  }

  handleClick () {
    let { visibility } = this.state

    if (!visibility) {
      this.setState({
        visibility: true,
        innerAccCls: AppConstants.ACCORD_BEFORE_CLS
      })
      setTimeout(() => {
        this.setState({
          innerAccCls: AppConstants.ACCORD_SHOW_CLS
        })
      }, 500)
    } else {
      this.setState({
        innerAccCls: AppConstants.ACCORD_HIDE_CLS
      })

      setTimeout(() => {
        this.setState({
          visibility: false,
          innerAccCls: AppConstants.ACCORD_SHOW_CLS
        })
      }, 1000)
    }
  }
  onEnterKeyPress (e) {
    let {enableEnter} = this.props
    if (enableEnter !== false) {
      if (e.key === 'Enter') {
        this.handleClick()
      }
    }
  }

  render () {
    let { innerAccCls, visibility } = this.state
    let {title, collapseAccordion, children} = this.props

    return (
      <SectionWrapper data-test-id='accordion'>
        <OuterWrapper onClick={this.handleClick} data-test-id={`${title}-accordion`} tabIndex={0} onKeyUp={this.onEnterKeyPress} visibility={visibility} aria-controls='t1' aria-expanded={visibility} role='tree' aria-label={`${title}Accordion`} collapseAccordion={collapseAccordion}>
          {title}
          <IconWrapper>
            {visibility
              ? <Icon iconName={AppConstants.ARROW_UP_ICON} />
              : <Icon iconName={AppConstants.ARROW_DOWN_ICON} />}
          </IconWrapper>
        </OuterWrapper>
        <div aria-hidden={!visibility} role='treeitem'>
          {visibility && <div className={innerAccCls}>
            {children}</div>}
        </div>
      </SectionWrapper>
    )
  }
}
