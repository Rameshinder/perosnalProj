import styled, { css } from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const Card = styled.div`
  display: block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  padding: 16px 24px;
  border-left: none;
  border-right: none;
  text-decoration: none;
  img {
    height: 32px;
    border-radius: 3px;
    
  }
  svg {
    color: #494949;
  }
  
  border-bottom: 1px solid #cdcdcd;
  text-style:none;
  span[data-tooltip] {
    div {
    opacity: 1 !important;
    }
    display: block;
  }
  ${props => props.nonEligible && css`
  cursor: not-allowed;
    img, div {
    
    opacity: 0.4;
    }
    &:hover {
      background-color: #fff;
    }
    &:focus {
      text-decoration: none;
      background-color: #fff;
      color: #494949 !important;
    }
`}
 }
`

export const CardContainer = styled.div`
overflow: auto;
color: #494949;
  img {
    display: inline-block;
    width: 64px;
  }
  a {
    color: #494949;
    display: block;
    &:hover {
      background-color: #e5f4fa;
    }
    &:focus {
      text-decoration: none;
      background-color: #004165;
      color: #fff !important;
      border: none;
      outline: none;
      border-bottom: 1px solid #cdcdcd;
    }
  }
  height: 350px;
  overflow: auto;
`
export const CardDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left:  12px;
  height: 35px;
  span {
    display: block;
    white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;    
  }

  @media(max-width: 480px){
    max-width: 220px;  
    span {
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis; 
    }
  }
  p {
    margin-bottom: 0;
  }
`
export const UList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  
`
export const List = styled.li`
  padding: 0;
  &:hover {
    background-color: #e5f4fa;
  }
  &:focus {
    background-color: #004165;
    border: none;
    outline: none;
  }
  
`
export const Span = styled.span`
  ${props => props.showDesk && css`
    @media ${styleVars.breakpoints.mobile}{
     display: none;
    }
  `}
  ${props => props.showMobile && css`
    @media ${styleVars.breakpoints.tabletPortrait}{
     display: none;
    }
  `}
  ${props => props.nonEligible && css`
    display: inline-block;
    float: right;
    margin-left: 24px;
    vertical-align: middle;
    margin-top: 8px;
  `}
  ${props => props.fullOpacity && css`
    opacity: 1;
  `}
`
