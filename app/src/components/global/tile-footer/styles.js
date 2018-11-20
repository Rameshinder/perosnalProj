import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const FooterContainer = styled.div`
  width: 100%;
  padding: 24px;
  background-color: #f7f7f7;
  border-top: 1px solid #cdcdcd;
  margin-left: auto;
  margin-right: auto;
  button {
    margin-top: 0;
    width: 100%;
    &:first-child {
      margin-bottom: 24px;
    }
  }
  @media ${styleVars.breakpoints.tabletPortrait}{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 738px;
  padding: 24px 32px 24px 32px;
  button {
    margin-top: 0;
    margin-bottom: 0;
    min-width: 100px;
    max-width: 120px;
    &:first-child {
      margin-bottom: 0;
    }
    &:last-child {
      margin-left: auto;
    }
  }
  
}`
