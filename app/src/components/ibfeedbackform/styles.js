import styled from 'styled-components'
import styleVars from '../../common/styles-global/global'
export const Feedback = styled.div`
padding-right: ${styleVars.dimensions.$spacing32}+${styleVars.color.$spacing64};
margin-top: ${styleVars.dimensions.$spacing32};
float:right;
text-align: center;
`

export const FeedbackLink = styled.a`
display: inline-block;
cursor: pointer;
}
`
export const FeedbackWrapper = styled.div`
width:100%;
display: inline-block;
`
