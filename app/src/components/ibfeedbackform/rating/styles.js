import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'
export const MainWrapper = styled.div`
height: 36px;
`

export let RatingWrapper = styled.div`
    display:flex;
    flex-direction: normal;
    justify-content:space-around;
    padding:0 .2em;
    text-align:center;
    width:17em;
    margin: 0 auto;
    & > label{
      margin-right: -8px;
    }
&:hover >label svg path {
    stroke: ${styleVars.color.chatIcon};
     cursor: pointer;
  }
  `
export let StarRating = styled.input`
display: none;
&:hover ~ label #starrate-data-id {
      stroke:${styleVars.color.starunselectColor};
    }
&:hover + label #starrate-data-id {
 stroke:${styleVars.color.chatIcon}
 }
 + label:hover ~ label #starrate-data-id{
stroke:${styleVars.color.starunselectColor}
}
+ label:hover #starrate-data-id{
stroke:${styleVars.color.chatIcon}
}
  `

export const IconWrapper = styled.span`
    &:focus{
      outline:none
    }
    > svg{
      transform:scale(1.26984,1.176470);
      width: 40px;
      height: 36px;
    }
`
