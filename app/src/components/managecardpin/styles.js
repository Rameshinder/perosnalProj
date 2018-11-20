import styled from 'styled-components'
import styleVars from '../../common/styles-global/global.js'
import { Row } from '../global/grid'

export const Rowwrap = styled(Row)`
  margin: 0;
  padding: 0 12px;
  text-align: left;
  padding-bottom: ${styleVars.dimensions.$spacing64};
  margin-bottom: ${styleVars.dimensions.$spacing24};
  @media ${styleVars.breakpoints.tabletPortrait} { 
   text-align: left;
   margin-bottom: 0;
  }
`

export const CenterDiv = styled.div`
  text-align: center;
  min-height: 250px;
  svg {
    width: 40px;
    height: 40px;
  }
`

export const KeypadContainer = styled.div`
  display: none;
  @media ${styleVars.breakpoints.tabletPortrait} { 
    display: block;
    border-left: 1px solid ${styleVars.color.borderColor};
    padding-left: ${styleVars.dimensions.$spacing48};
  }
`

export const ManageCardPinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  input {
    text-align: center;
    letter-spacing: ${styleVars.dimensions.$spacing12};
  }
`

export const ManageCardName = styled.div`font-size: ${styleVars.dimensions.$spacing16};`

export const PinIncorrect = styled.div`color: ${styleVars.color.errorColor};`
export const ManagePinMainLabel = styled.div``

export const ManageCardPinTextContainer = styled.div`
  padding: ${styleVars.dimensions.$spacing12} 0;
  input {
    width: 100%;
  }
  @media ${styleVars.breakpoints.tabletPortrait} { 
    input {
        width: 60%;
      }
  }
`

export const CardDetails = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  @media ${styleVars.breakpoints.tabletPortrait} { 
    text-align: left;
  }
`

export const ImageDivStyle = styled.img`
  display: inline-block;
  height: ${styleVars.dimensions.$spacing32};
  border-radius: 3px;
`

export const CardDataWrapper = styled.div`
  display: block;
  margin-left: ${styleVars.dimensions.$spacing12};
  margin-top: ${styleVars.dimensions.$spacing12};
  @media ${styleVars.breakpoints.tabletPortrait} { 
    display: inline-block;
    margin-top: 0;
  }
`

export const CardDatalabel = styled.label`
  display: block;
  font-size: ${styleVars.dimensions.$spacing16};
  margin-bottom: ${styleVars.dimensions.$spacing8}; 
`
