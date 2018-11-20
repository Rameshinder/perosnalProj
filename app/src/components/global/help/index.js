import React from 'react'
import PropTypes from 'prop-types'

import HelpIcon from '../../icon'
import { Anchor } from './styles'

export default function Help (props) {
  return (
    <Anchor href={props.link} tabIndex={0} target='_blank'>
      <HelpIcon iconName='Help' />
      <span>Help</span>
    </Anchor>
  )
}

Help.propTypes = {
  link: PropTypes.string
}
