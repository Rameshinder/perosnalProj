import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const Footer = styled.div`
  padding: 0 12px;
  text-align: center;
  margin-top: ${styleVars.dimensions.$spacing32};
  margin-bottom: ${styleVars.dimensions.$spacing32};
  @media ${styleVars.breakpoints.tabletPortrait}{
    width: 738px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${styleVars.dimensions.$spacing48};
    margin-bottom: ${styleVars.dimensions.$spacing48};
  }
`
