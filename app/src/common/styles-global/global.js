const styleVars = {
  app: {
    // Assets path to map images and fonts
    'assets-path': '../assets/'
  },
  color: {
    // Color theme
    'text_color': '#148CC0',
    'background_color': '#f7f7f7',
    'darkBlue': '#004165',
    'copy_Color': '#494949',
    'white_color': '#ffffff',
    'icon_blue': '#0093d8',
    'errorColor': '#d53d39',
    'successColor': '#008A02',
    'borderColor': '#E2E2E2',

    // Color names as per CX
    'white': '#FFFFFF',
    'white_hover': '#ESF4FA',
    'ocean_blue': '#007DBA',
    'ocean_blue_hover': '#0093D8',
    'green': '#008A02',
    'green_hover': '#00A303',
    'red': '#D73B33',
    'red_hover': '#D9534F',

    // Additional colors
    'anzGrey1': '#333333',
    'anzGrey2': '#494949',
    'anzGrey3': '#8E8E8E',
    'anzGrey4': '#BBBBBB',
    'anzGrey5': '#CDCDCD',
    'anzGrey6': '#EEEEEE',
    'anzGrey7': '#F7F7F7',
    'deepCurrent': '#004165',
    'linkBlue': '#0072AC',
    'anzRed': '#D53D39',
    'westCoastSunset': '#DF7A00',
    'lightOrange': '#A7CAB2',

    // Alerts
    'alertBlue': '#E2F4FC',
    'alertGreen': '#E4FBED',
    'alertRed': '#FFEDE9',
    'alertOrange': '#FFEAD8'

  },

  fonts: {
    'fontFamily': 'myriad-pro',

    'fontSemiboldWt': '600',
    'fontLightWt': '300',
    'fontRegularWt': '400'
  },

  dimensions: {
    '$spacing8': '8px',
    '$spacing12': '12px',
    '$spacing16': '16px',
    '$spacing24': '24px',
    '$spacing32': '32px',
    '$spacing36': '36px',
    '$spacing48': '48px',
    '$spacing64': '64px',
    '$spacing72': '72px'
  },
  breakpoints: {
    'desktop_extra_large': '(min-width: 1281px)',
    'desktop_large': '(min-width: 961px) and (max-width: 1280px)',
    'desktop': '(min-width: 769px) and (max-width: 960px)',
    'tablet': '(min-width: 481px) and (max-width: 768px)',
    'tabletPortrait': '(min-width: 769px)',
    'mobile': '(max-width: 480px)',
    'mobile_small': '(max-width: 320px)'
  }
}

export {
  styleVars as default
}
