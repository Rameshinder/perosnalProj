import styled, {css} from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const InputTextContainer = styled.div`
input {
  color: #494949;
  padding: 0 12px;
  border: 1px solid #E2E2E2;
  border-radius: 4px;
  height: 38px;
  font-family: ${styleVars.fonts.fontFamily};
  font-weight: ${styleVars.fonts.fontRegularWt};
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.1px;
  
  &[readonly] {
    box-shadow: none !important;
    &:focus {
      
      box-shadow: 0 0 5px 0 rgba(0,144,222,0.4);
    }
  }
 
  &::-webkit-input-placeholder {
    color: #747678;
  }
  &:-ms-input-placeholder {
    color: #747678;
  }
    ${props => props.error && css`
    border-color: ${styleVars.color.errorColor} !important;
  `}
  @media ${styleVars.breakpoints.tabletPortrait}{ 
    height: 44px;
    font-size: ${styleVars.dimensions.$spacing16};
    padding: 0 18px;
   }
} 
`
export const ErrorSpan = styled.div`
  display: block;
  color: ${styleVars.color.errorColor};
  margin-top: ${styleVars.dimensions.$spacing16};
  margin-bottom: ${styleVars.dimensions.$spacing16};
`
