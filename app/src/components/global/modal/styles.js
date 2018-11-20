import styled, { css, keyframes } from 'styled-components'
import styleVars from '../../../common/styles-global/global'
import Heading from '../heading'

const slideup = keyframes`
from {
  margin-top: 100%;
  opacity: 0.68;
}
to {
  margin-top: 0%;
  opacity: 0.68;
}
`
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.1);
  padding: ${styleVars.dimensions.$spacing48};
  z-index: 1000000;
  max-height: 700px;
  overflow-y: auto;
  @media ${styleVars.breakpoints.mobile} {
    padding: ${styleVars.dimensions.$spacing48} ${styleVars.dimensions.$spacing0};
  }
`

export const ModalLayout = styled.div`
  border: 1px solid ${styleVars.color.white};
  width: ${props => props.width}px;
  height: ${props => props.height ? props.height : 'auto'}px;
  margin-left: auto;
  margin-right: auto;
  background: ${styleVars.color.background_color};
  animation: ${props => props.addAnimation ? slideup : null} 0.45s ease-out;
  animation-iteration-count: 1;
  @media ${styleVars.breakpoints.mobile} {
    width: 320px;
    height:900px;
  }
`

export const ModalHeader = styled.div`
  text-align: center;
  background: ${styleVars.color.white};
  padding: ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing24};
  a {
    text-decoration: none;
    position:relative;
    bottom:${styleVars.dimensions.$spacing24};
    &:hover {
      text-decoration: none;
    }
    &:focus {
      text-decoration: none;
    }
    float: right;
    cursor: pointer;
  }
  font-family: ${styleVars.fonts.fontFamily};
  font-size: ${styleVars.dimensions.$spacing16};
  line-height: 20px;
  letter-spacing: -0.1;
  @media ${styleVars.breakpoints.mobile} {
    padding: ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16};
  }
`

export const Span = styled.span`
  ${props => props.D3 && css`
  font-family: myriad-pro;
  font-weight: ${styleVars.fonts.fontLightWt};
  font-size: 26px;
  line-height: 32px;
  letter-spacing: -0.25;
  `}
`

export const ModalBody = styled.div`
    padding: ${styleVars.dimensions.$spacing24};
    background: ${styleVars.color.background_color};
  @media ${styleVars.breakpoints.mobile}{
      padding: ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16};
    }
`

export const ModalFooter = styled.div`
 padding: ${styleVars.dimensions.$spacing24};
 background: ${styleVars.color.background_color};
 button {
  margin-top: ${styleVars.dimensions.$spacing0};
  width: 100px;
  &:nth-child(1) {
    float: right;
  }
}

  @media ${styleVars.breakpoints.mobile} {
  padding: ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16};
  display: table;
  width:100%;
  button {
    width: 100%;
    margin-bottom: ${styleVars.dimensions.$spacing16};
  }
  }
`
export const Hr = styled.hr`
 margin-top: 0px;
 margin-bottom: 0px;
`

export const Anchor = styled.a`
`

export const HeadingWrapper = styled(Heading)`
  margin-bottom:0px;
`
