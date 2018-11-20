import styled from 'styled-components'
import { Div } from 'glamorous'

export const FooterContainer = styled(Div)`
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  background: #007dba;
  width: 100%;
  -webkit-font-smoothing: auto;
`

export const FooterWrapper = styled(Div)`
  display: block;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 959px) and (min-width: 768px)
    .footerSection {
      width: 768px;
  }
  @media (max-width: 767px) and (min-width: 480px)
    .footerSection {
        width: 480px;
  }
`
export const FooterText = styled(Div)`
  font-family: MyriadPro-Regular,arial;
  display: block;
  font-size: 13px;
  letter-spacing: -0.1px;
  line-height: 20px;
  color: #fff;
  text-decoration: none!important;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 36px;
`
