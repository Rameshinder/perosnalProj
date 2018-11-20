//
// Follow below ways to use H1,H2,H3 and P tags :-
// - H1 is mapped to D1
// - H1 with props proLight is mapped to D2

// - H2 is mapped to D3

// - H3 is mapped to D5
// - H3 with props proLight is mapped to D6

// - P is mapped to D8
// - P with props semiBold is mapped to D10
// - P with props proRegularFontSize is mapped to D13

import React from 'react'
import PropTypes from 'prop-types'

import { H1, H2, H3, P } from './styles'

const Heading = (props) => {
  switch (props.level) {
    case '1':
      return (
        <H1 {...props}>{props.children}</H1>
      )
    case '2':
      return (
        <H2 {...props}>{props.children}</H2>
      )
    case '3':
      return (
        <H3 {...props}>{props.children}</H3>
      )
    case '4':
      return (
        <P {...props}>{props.children}</P>
      )
    default:
      return (
        <H1 {...props}>{props.children}</H1>
      )
  }
}

Heading.propTypes = {
  level: PropTypes.string

}

export {H1, H2, H3, P}

export default Heading
