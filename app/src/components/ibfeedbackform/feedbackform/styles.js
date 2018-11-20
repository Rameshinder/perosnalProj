import styled from 'styled-components'
import Accordion from '../../global/accordion'
import styleVars from '../../../common/styles-global/global'
import Heading from '../../global/heading'
import TextArea from '../../global/text-area'

export let FeedbackWrapper = styled.div`
>div{
  &:nth-child(6) {
    padding-bottom: 0px;
  }
}
button {
width: 125px;
padding:${styleVars.dimensions.$spacing12};
line-height: normal;
&:nth-child(1) {
  float: right;
}
  @media ${styleVars.breakpoints.mobile} {
  padding:${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16} ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16};
  display: table;
  width:100%;
  button {
    width: 100%;
    margin-bottom: 16px;
  }
  }
}
`
export let FeedbackAckWrapper = styled.div`
button {
width: 125px;
padding:${styleVars.dimensions.$spacing12};
line-height: normal;
&:nth-child(1) {
  float: right;
}


@media ${styleVars.breakpoints.mobile} {
  padding:${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16} ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing16};
  display: table;
  width:100%;
  button {
    width: 100%;
    margin-bottom: 16px;
  }
  }
}
`
export let FeedbackWarningWrapper = styled.div`
button {
display:none;
}`
export let FeedbackLoaderWrapper = styled.div`
button {
display:none;
}
`
export let FeedbackHeading = styled.div`
text-align: center;
margin-bottom: 0px;
& > h1{
  color:${styleVars.color.darkBlue} ;
  padding: ${styleVars.dimensions.$spacing12};
  margin:${styleVars.dimensions.$spacing8}
}
& > h2{
  color:${styleVars.color.darkBlue} ;
letter-spacing: -0.02em;
margin-bottom:${styleVars.dimensions.$spacing8};
@media ${styleVars.breakpoints.mobile} {
font-size: 30px;
padding-left: ${styleVars.dimensions.$spacing64};
margin-right: ${styleVars.dimensions.$spacing64};

}
}
`
export let FeedbackRating = styled.div`
text-align: center;
`
export let AcknowledgeCheck = styled.div`
text-align: center;
margin-bottom: ${styleVars.dimensions.$spacing36};

`
export let AcknowledgeCheckIconBorder = styled.div`


border-radius: 100%;
border: 2px solid green;
height: 64px;
width:64px;
margin:auto;
line-height: 35px;
`
export let AcknowledgeCheckIcon = styled.div`

font-size: 32px;
margin-top: ${styleVars.dimensions.$spacing16};

`

export let Feedbacktext = styled.div`
text-align: center;
color:${styleVars.color.starunselectColor};
margin-top: ${styleVars.dimensions.$spacing12};


`
export let Acknowledgetext = styled.div`
text-align: center;
color:${styleVars.color.copy_Color};
opacity: 10%;
& > p{
  padding:${styleVars.dimensions.$spacing12} ${styleVars.dimensions.$spacing12} 0 ${styleVars.dimensions.$spacing12};
}
`

export let Commentswrapper = styled.div`
margin:-4px;
  width: 428px;
  @media ${styleVars.breakpoints.mobile}{
    width:318px;
    margin-left:4px;
   }
`
export let Commentsbox = styled.div`
padding: ${styleVars.dimensions.$spacing8} ${styleVars.dimensions.$spacing24} ${styleVars.dimensions.$spacing12};

& > div{
  margin-top: -20px;
}
});
`
export let Tapcall = styled.div`
  text-align:center;
  margin-top:7px;
  & > p:nth-child(1) {
      margin-top: -6px;
  }
  & > p:nth-child(2) {
      margin-top: -20px;
      margin-bottom: -12px;
  }
  @media ${styleVars.breakpoints.mobile_small}{
  display:none;
   }

  @media ${styleVars.breakpoints.mobile}{
  display:none;
   }
`
export const AccordionWrapper = styled(Accordion)`
  border-left:0px;

`
export const HeadingWrapper = styled(Heading)`
   margin-bottom:${styleVars.dimensions.$spacing12};
`

export const TextAreaWrapper = styled(TextArea)`
  margin-top:15px;
`
export let Acknowledgeloader = styled.div`
text-align: center;
margin-right: 93px;
div{
  display: inline-flex;
}
`
export let FeedbackLoaderHeading = styled.div`
margin-top: 100px;
text-align: center;
& > h2{
  color:${styleVars.color.darkBlue} ;
letter-spacing: -0.02em;
@media ${styleVars.breakpoints.mobile} {
font-size: 30px;
padding-left: 31px;
margin-right: 33px;

}
`
