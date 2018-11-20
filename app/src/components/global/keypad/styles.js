import styled from 'styled-components'

export const Maincontainer = styled.div`
  width:300px;
  p{
  margin-left: 10px;
  font-size:14px
  }`

export const RowWrapper = styled.div`
    display: flex;  
    flex-wrap: wrap;
    align-content: space-between;    
    button {
      width: 22%;
      margin-left: 10px;
      margin-bottom: 10px;
      background: #E2E2E2;
      color:#999;
      line-height:normal;     
    } 
    button:hover {
      background: #E2E2E2;
    }
    button:focus {
      background: #E2E2E2;
    }
  `

export const KeyDisplayDiv = styled.div`
  line-height: initial;
  `

export const KeyNumber = styled.div`
  `

export const KeyText = styled.div`
  font-size:10px
  `
