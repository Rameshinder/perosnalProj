import styled from 'styled-components'
import styleVars from '../../common/styles-global/global.js'

export const StepUp = styled.div`
text-align: center;
  @media ${styleVars.breakpoints.tabletPortrait} {
    margin-top: 80px;
  }
`

export const StepUpWrapper = styled.div`
  input {
    width: 80%
  }
  button {
    width: 80%;
  }
    
  @media ${styleVars.breakpoints.tabletPortrait} {  
    width: 100%;
    border: none;
    input {
      width: 50%
    }
    button {
      width: 50%;
    }
    a {
      display: block;
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    } 
  }
  h1 {
    color: ${styleVars.color.darkBlue} !important;
  }
  
`
export const Anchor = styled.a`
  display: block;
  margin-top: ${styleVars.dimensions.$spacing24};
  margin-bottom: 0;
  p {
    margin-bottom: 0 !important;
  }
`
export const CenterDiv = styled.div`
  
  
`
export const StepUpHeader = styled.div`

`
export const StepUpVerfication = styled.div`
  width: 100%;
  text-align: center;
  p {
    max-width: 95%;
    margin-bottom: ${styleVars.dimensions.$spacing24};
  }
`
export const SendOTP = styled.div``

export const VerifyOTP = styled.div`
  a {
    margin-bottom: ${styleVars.dimensions.$spacing24};
  }
`
