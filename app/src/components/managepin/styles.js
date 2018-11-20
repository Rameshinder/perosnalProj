import styled from 'styled-components'
import styleVars from '../../common/styles-global/global.js'

export const ManagePinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  background: ${styleVars.color['background-color']};

  div[role='alert'] {
    width: 738px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${styleVars.dimensions.$spacing24};
    @media(max-width: 480px){
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  } 
  button {
    margin-right: 700px;
    margin-bottom: 0 !important;
  }
`

export const CardInfoText = styled.div`
  p:first-child {
    font-weight: 600;
  }
`
