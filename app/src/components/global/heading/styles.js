import styled, {css} from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const H1 = styled.h1`
  font-family: ${styleVars.fonts.fontFamily};
  font-weight: ${styleVars.fonts.fontSemiboldWt};
  line-height: 32px;
  font-size: 32px;
  letter-spacing: -0.25px;
  margin-top: 0;
  margin-bottom: 24px;
  @media ${styleVars.breakpoints.mobile} {
    font-size: 28px;
  }
  ${props => props.proLight && css`
    font-weight: ${styleVars.fonts.fontLightWt};
  `}
`

export const H2 = styled.h2`
  font-family: ${styleVars.fonts.fontFamily};
  font-weight: ${styleVars.fonts.fontLightWt};
  line-height: 32px;
  font-size: 26px;
  letter-spacing: -0.25px;
  margin-top: 0;
  margin-bottom: 24px;
  @media ${styleVars.breakpoints.mobile} {
    font-size: 23px;
  }
`

export const H3 = styled.h3`
  font-family: ${styleVars.fonts.fontFamily};
  font-weight: ${styleVars.fonts.fontSemiboldWt};
  line-height: 24px;
  font-size: 20px;
  letter-spacing: -0.1px;
  margin-top: 0;
  margin-bottom: 24px;
  ${props => props.proLight && css`
    font-weight: ${styleVars.fonts.fontLightWt};
  `}
`
export const P = styled.p`
  font-family: ${styleVars.fonts.fontFamily};
  font-weight: ${styleVars.fonts.fontRegularWt};
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.1px;
  margin-top: 0;
  margin-bottom: 24px;
  ${props => props.semiBold && css`
    font-weight: ${styleVars.fonts.fontSemiboldWt};
  `}
  ${props => props.proRegularFontSize && css`
    font-size: 14px;
    letter-spacing: 0px;
  `}
`
