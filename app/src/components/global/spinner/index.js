import React from 'react'
import Icon from '../../icon/index'

import { SpinnerContainer, CircularBackground } from './styles.js'

const Spinner = () => {
  return (
    <SpinnerContainer>
      <CircularBackground width='72' height='72'>
        <circle className='path' cx='36' cy='36' r='34' fill='none' strokeWidth='2' strokeMiterlimit='10' />
      </CircularBackground>
      <Icon iconName='Action Menu' />
    </SpinnerContainer>
  )
}

export default Spinner
