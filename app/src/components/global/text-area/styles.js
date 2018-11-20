import styled from 'styled-components'
import styleVars from '../../../common/styles-global/global'
export const TextAreaMain = styled.div`
        display: inline-block;
        width: 100%;`
export const TextAreaCount = styled.label`
        float: none;
        position: absolute;
        margin-left: -${styleVars.dimensions.$spacing36};
        margin-top:${styleVars.dimensions.$spacing12};
        font-size:14px;`

export const TextAreaContent = styled.textarea`
        width: 100%;
        height: 110px;
        padding:  ${styleVars.dimensions.$spacing16} ${styleVars.dimensions.$spacing48} ${styleVars.dimensions.$spacing16} ${styleVars.dimensions.$spacing16};
        box-sizing: border-box;
        border-radius: 2px;
        -webkit-appearance: none;
        font-family: MyriadPro-Regular, Arial;
        font-size: 16px;
        border: 1px solid ${styleVars.color.textareaContent};
        overflow: hidden;
        resize:none;
        &::-webkit-input-placeholder {
        color:${styleVars.color.starunselectColor};
        ${''}
        opacity: 10%;
        }`
