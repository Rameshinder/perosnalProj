import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'
import { Div, Span } from 'glamorous'

export const HeaderWrapper = styled.div`
  background-color: ${styleVars.color.darkBlue};
  -webkit-font-smoothing: auto !important;
`
export const Logo = styled.img`
  width: 103px;
  height: 42px;
  margin-top: 8px;
`
export const HeaderRow = styled(Div)`
  display: flex;
  height: 60px;
  margin: 0 35px;
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`

export const ContextMenuButton = styled.button`
  margin-left: auto;
  margin-top: 10px;
  background: transparent;
  text-decoration: none;
  top: 10px;
  right: 15px;
  cursor: pointer;
  padding: 0px 12px;
  border: none;
  &:hover, &:focus, &:active {
    background-color: #FFF;
    color: #0093d8;
    -moz-box-shadow: 0 1px 0 rgba(0,0,0,0.3);
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.3);
    box-shadow: 0 1px 0 rgba(0,0,0,0.3);
    -moz-border-radius: 3px 3px 0 0;
    -webkit-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0;
  }
  @media (min-width: 769px) {
    display : none;
  }
`
export const ContextMenu = styled(Div)`
  background: white;
  list-style: none;
  margin-bottom: 0;
  cursor: pointer;
  width: 290px;
  -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
  -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
  position: fixed;
  top: 60px;
  right: 20px;
  @media (min-width: 769px) {
    display : none;
  }
`

export const IconMore = styled(Span)`
  font-size: 36px;
  font-weight: 100;
  padding-bottom: 26px;
  display: inherit;
  transform: rotate(90deg);
`

export const MenuListItem = styled(Div)`
  padding: 16px;
  background-color: #FFF;
  color: #007dba;
  font-size: 16px;
  text-decoration: none;
  line-height: 1em;
  font-weight: bold;
  &:hover {
    background-color: #0093d8;
    color: #FFF;
  }
`

export const MenuListItemLink = styled.a`
  text-decoration: none;
  line-height: 1em;
  &:focus {
    text-decoration: none;
  }
  color: #0072AC;
  &:hover {
      cursor: pointer;
      color: #0093D8;
      text-decoration: none;
  }
`

export const LogoutButton = styled.button`
  margin-top: 14px;
  margin-left: 19px;
  padding: 6px 10px;
  background-color: #007dba;
  border: 1px solid #004165;
`

export const Link = styled.a`
  color: white;
  font-size: 14px;
  &:focus {
    text-decoration: none;
  }
  &:hover {
      cursor: pointer;
      color: #0093D8;
      text-decoration: none;
  }
`
export const LinkWrapper = styled(Div)`
  margin-left: auto;
  @media (max-width: 768px) {
    display : none;
  }
`
export const LinkContainer = styled(Div)`
  color: white;
  text-align: center;
  float: left;
  cursor: pointer;
  padding-right: 37px;
  &:hover {
    color: #0093D8;
    a {
      color: #0093D8;
    }
  }
`
export const MailLinkContainer = styled(Div)`
  color: white;
  text-align: center;
  float: left;
  cursor: pointer;
  padding-right: 20px;
  color: #FFF;
  &:hover {
    color: #0093D8;
    a {
      color: #0093D8;
    }
  }
`
export const LinkInnerWrapper = styled(Div)`
  float: left;
  padding: 10px 0;
`

export const LogoutText = styled(Span)`
  margin-left: 8px;
`

export const LinkText = styled(Span)`
  margin-left: 8px;
`
