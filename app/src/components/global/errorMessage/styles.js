import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const Container = styled.div`
  display: block;
  text-align: center;
  line-height: 1.4;
  width: 100%;
  > h1{
    color: #ce0a0a;
  font-weight: ${styleVars.fonts.fontLightWt};
  margin:${styleVars.dimensions.$spacing8} ${styleVars.dimensions.$spacing0};
    }
`
export const Message = styled.div`
  display: block;
  margin: auto ${styleVars.dimensions.$spacing4};
  @media ${styleVars.breakpoints.mobile} {
    margin:auto;
  }
`

export let IconWrapper = styled.div`
font-size: 64px;
margin-top: ${styleVars.dimensions.$spacing4};
`
