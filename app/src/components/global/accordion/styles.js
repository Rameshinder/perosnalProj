import styled, { css } from 'styled-components'
import styleVars from '../../../common/styles-global/global'

export const OuterWrapper = styled.div`
color: ${styleVars.color.darkBlue};
font-weight: bold;
border:1px solid ${styleVars.color.greyColor};
padding:${styleVars.dimensions.$spacing12};
background-color:${styleVars.color.iconFillColor};
${props => props.visibility && css`
&:hover{
background-color:${styleVars.color.accordion_hover_color}
}
`}
${props => props.collapseAccordion && css`
    border-left:0px;
    border-right:0px;
`}
`

export const ContentWrapper = styled.div`
padding:${styleVars.dimensions.$spacing12};
`

export const SectionWrapper = styled.div`

.beforeshowcls {
opacity: 0;
transform: translateY(-10px);
}

.showcls {
opacity: 1;
transition: 0.5s;
transition-timing-function: ease-in;
transform: translateY(0);
margin-top:${styleVars.dimensions.$spacing16};
}
.hidecls {
transition: 0.5s;
transition-timing-function: ease-out;
transform: translateY(-10px);
margin-top:${styleVars.dimensions.$spacing16};
}
`

export const IconWrapper = styled.span`
float: right;
`
