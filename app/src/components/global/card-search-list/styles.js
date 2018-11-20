import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const CardSearch = styled.div`
 max-height: 500px;
 width: 100%;
 margin-left: auto;
 margin-right: auto;
 background: #fff;
 margin-top: -32px;
 @media ${styleVars.breakpoints.tabletPortrait}{
  
  margin-bottom: ${styleVars.dimensions.$spacing64};
 }
`
export const CardSearchHeading = styled.div`
  width: 100%;
  border-bottom: 1px solid #cdcdcd;
  padding-left: ${styleVars.dimensions.$spacing24};
  @media ${styleVars.breakpoints.tabletPortrait}{   
    padding-left: 0
  }
  margin-top: ${styleVars.dimensions.$spacing12};
  margin-bottom: 0;
  
`
export const SearchInput = styled.div`
  width: 100%;
  padding: ${styleVars.dimensions.$spacing12} ${styleVars.dimensions.$spacing12};
  border: none;
  border-bottom: 1px solid #cdcdcd;
  div, input {
    display: inline-block;
    border: none;
    width: 80%;
    margin-left: 0;
    vertical-align: top;
    &:focus {
      border: none;
      outline:none;
    }
    &:focus {
     box-shadow: none;
    }
    input {
      padding-left: ${styleVars.dimensions.$spacing8};
    }
  }
  a {
    margin-top: 12px;
    &:first-child {
      float: left;
      color: #0072ac;
      transform: rotate(270deg); 
    }
    &:last-child {
      float: right;
      color: #000;
    }
  }
  margin-left: auto;
  margin-right: auto;
`

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`
export const NoCards = styled.div`
  background-color: #fff;
  text-align: center;
  margin-top: ${styleVars.dimensions.$spacing24};
  margin-bottom: ${styleVars.dimensions.$spacing64};
`
