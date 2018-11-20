import React from 'react'
import PropTypes from 'prop-types'
import Paths from './paths'
import styleVars from '../../common/styles-global/global'
const Icon = props => (
  <svg viewBox={props.viewBox || '0 0 32 32'} width='1em' height='1em' focusable='false'>
    <path
      id={`${props.id}-data-id`}
      d={Paths[props.iconName]}
      fill={props.color || styleVars.color.chatIcon}
      stroke={props.stroke}
      strokeWidth={props.strokeWidth}
      strokeLinejoin={props.strokeLinejoin}
      transform={props.transform}
    />
  </svg>
)

Icon.propTypes = {
  iconName: PropTypes.string,
  color: PropTypes.string
}

export default Icon
