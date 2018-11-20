import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const Header = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
color: #004165;
padding-left: 24px;
h1 {
  display: inline-block;
  float: left;
  margin-top: 32px;
}
@media ${styleVars.breakpoints.tabletPortrait}{  
  max-width: 960px;
  padding-left: 0;
}
`

export const Helpers = styled.div`
  display: none;
  @media ${styleVars.breakpoints.tabletPortrait}{
    text-align: center;
    display: inline-block;
    float: right;
    vertical-align: middle;
    margin-top: 32px;
  }
`
