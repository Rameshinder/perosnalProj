import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const Container = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
border: 1px solid #cdcdcd;
background: #fff;
position: relative;
padding-top: ${styleVars.dimensions.$spacing36};
padding-bottom: ${styleVars.dimensions.$spacing72};
padding: 36px 0 72px 0;

@media ${styleVars.breakpoints.tabletPortrait}{  
  width: 738px;
  padding: ${styleVars.dimensions.$spacing48};
  max-height: 650px;
}
`
export const Footer = styled.div`
    width: 100%;
    border-left: none;
    border-right: none;
    border-bottom: none;
    position: absolute;
    bottom: 0;
    left: 0;
    div:last-child {
      width: 100%;  
    }
@media ${styleVars.breakpoints.tabletPortrait}{
  div:last-child {
    width: 100%;  
  }
}
`
