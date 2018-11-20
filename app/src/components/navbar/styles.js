import styled from 'styled-components'
import styleVars from '../../common/styles-global/global.js'

export const NavbarContainer = styled.div`
`

export const UList = styled.ul`
list-style-type: none;
margin-top: 0px;
margin-bottom: 0px;
height: 60px;
background-color: #FFF;
padding-left: 32px;
padding-right: 32px;
border-bottom: 1px solid #dcdcdc;
z-index: 999;
`
export const List = styled.li`
display: inline-block;
color: #0072AC;
text-align: center;
padding: 21px 16px 13px 16px;
font-size: 18px;
&:hover {
  cursor: pointer;
  border-bottom: 3px solid #0093D8;
}
`
export const Anchor = styled.a`
color: #0072AC;
&:hover {
    cursor: pointer;
    color: #0093D8;
    text-decoration: none;
}
`
export const ButtonDiv = styled.div`
display: none;
@media ${styleVars.breakpoints.tabletPortrait} {
  display: block;
  float: right;
  padding-top: 5px;
}
`
