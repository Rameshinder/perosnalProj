import styled from 'styled-components'
import Neat, { gridContainer, gridColumn, gridMedia, gridCollapse, gridPush } from 'neat-components'
import styleVars from '../../../common/styles-global/global'

const noGapGrid = Neat({
  gutter: '0px'
})

const XlMedia = Neat({
  media: `${styleVars.breakpoints.desktop_extra_large}`
})

const LgMedia = Neat({
  media: `${styleVars.breakpoints.desktop_large}`
})

const MdMedia = Neat({
  media: `${styleVars.breakpoints.desktop}`
})

const SmMedia = Neat({
  media: `${styleVars.breakpoints.tablet}`
})

const XsMedia = Neat({
  media: `${styleVars.breakpoints.mobile}`
})

const common = () => {
  return `
    min-height: auto;
  `
}
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  ${gridContainer()};
`

export const BodyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  margin-bottom: ${styleVars.dimensions.$spacing64};
  ${gridContainer()};
  @media ${styleVars.breakpoints.desktop} {
    width: 768px;
  }
  @media ${styleVars.breakpoints.desktop_large} {
    width: 960px;
  }
  @media ${styleVars.breakpoints.desktop_extra_large} {
    width: 1280px;
  }
`

export const Row = styled.div`
  display: table;
  ${props => props.nogap ? gridColumn(noGapGrid, 12)
    : props.collapse ? gridCollapse(props.theme) : gridColumn(props.theme, 12)}
`

export const Column = styled.div`
 ${common()}

 ${props => props.nogap ? gridMedia(XlMedia, [{
    ...gridColumn(noGapGrid, props.xl)
  }])
    : gridMedia(XlMedia, [{
      ...gridColumn(props.theme, props.xl)
    }])}

 ${props => props.nogap ? gridMedia(LgMedia, [{
    ...gridColumn(noGapGrid, props.lg)
  }])
    : gridMedia(LgMedia, [{
      ...gridColumn(props.theme, props.lg)
    }])}

 ${props => props.nogap ? gridMedia(MdMedia, [{
    ...gridColumn(noGapGrid, props.md)
  }])
    : gridMedia(MdMedia, [{
      ...gridColumn(props.theme, props.md)
    }])}

 ${props => props.nogap ? gridMedia(SmMedia, [{
    ...gridColumn(noGapGrid, props.sm)
  }])
    : gridMedia(SmMedia, [{
      ...gridColumn(props.theme, props.sm)
    }])}

 ${props => props.nogap ? gridMedia(XsMedia, [{
    ...gridColumn(noGapGrid, props.xs)
  }])
    : gridMedia(XsMedia, [{
      ...gridColumn(props.theme, props.xs)
    }])}
`

export const Push = styled.p`
${props => gridColumn(props.theme, 1)}
${props => gridPush(props.theme, props.col)}
`
