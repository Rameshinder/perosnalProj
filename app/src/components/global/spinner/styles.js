import styled from 'styled-components'
// import styleVars from '../../../styles/global.js'

export const SpinnerContainer = styled.div`
  svg:last-child {
    font-size: 32px;
    color: #007dba;
    margin-top: 20px;
    margin-left: 20px;
  }

  svg {
    position: absolute;
    z-index: 1;
  }

  svg:not(:last-child) {
    animation: rotate 2s linear infinite;
    transform-origin: center center;
   
    .path {
      stroke-dasharray: 6, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite;
      stroke-linecap: round;
      stroke: #007dba;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 6, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Circular = styled.svg``

export const CircularBackground = styled.svg`
  position: absolute;
  .path {
    stroke: #e2e2e2;
  }
`
