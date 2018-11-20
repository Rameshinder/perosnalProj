import React from 'react'
import { FooterContainer, FooterWrapper, FooterText } from './styles'

const Footer = () => (
  <FooterContainer data-test-id='Container_Footer'>
    <FooterWrapper data-test-id='Footer'>
      <FooterText data-test-id='Text_Footer'>
        <span>© </span>Australia and New Zealed Banking Group Limited (ANZ) <span>2018 </span><span> ABN </span><span>11 </span><span>005 357 522.</span>
      </FooterText>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer
