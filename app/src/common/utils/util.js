import AppConstants from './constant'
import _ from 'lodash'

export const areEligibleCardsAvailable = (cards) => {
  let eligibleCardsAvailable = false
  if (cards.length > 0) {
    _.forEach(cards, (card) => {
      if (card.eligibleFor.indexOf('SetPin') !== -1) {
        eligibleCardsAvailable = true
        return eligibleCardsAvailable
      }
    })
  }
  return eligibleCardsAvailable
}

export const formatMobileNumber = (mobileNumber) => {
  if (mobileNumber && mobileNumber.length > 9) {
    const formattedNumber = mobileNumber.split('')
    formattedNumber.splice(4, 0, ' ')
    formattedNumber.splice(8, 0, ' ')
    return formattedNumber.concat()
  }
}

export const handleLogOut = () => {
  window.location.href = AppConstants.IB_URL_LOGOUT
}

export const handleNavigationToExternalUrl = (url) => {
  // window.location.href = url
  var request

  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    request = new window.XMLHttpRequest()
  } else if (window.ActiveXObject) { // IE
    try {
      request = new window.ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      try {
        request = new window.ActiveXObject('Microsoft.XMLHTTP')
      } catch (e) {
        // console.log('external navigation failed')
      }
    }
  }
  request.open('GET', url)
  request.setRequestHeader('Token', AppConstants.jSessionId)
  // request.setRequestHeader('Authorization', 'Basic ' + AppConstants.jSessionId)
  request.send()
}

export const updateURL = (sessionId) => {
  AppConstants.jSessionId = sessionId
  const urlProfile = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PROFILE_SFX
  const urlHome = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_HOME_SFX
  const urlPayment = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_PAYMENT_SFX
  const urlApply = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_APPLY_SFX
  const urlLogout = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_LOGOUT_SFX
  const urlContactus = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_CONTACTUS_SFX
  const urlMail = AppConstants.IB_URL_DOMAIN + AppConstants.jSessionId + AppConstants.IB_URL_MAIL_SFX

  AppConstants.IB_URL_HOME = urlHome
  AppConstants.IB_URL_PAYMENT = urlPayment
  AppConstants.IB_URL_APPLY = urlApply
  AppConstants.IB_URL_PROFILE = urlProfile
  AppConstants.IB_URL_LOGOUT = urlLogout
  AppConstants.IB_URL_CONTACTUS = urlContactus
  AppConstants.IB_URL_MAIL = urlMail
}

const getImageForFMM = (productSubCode) => {
  switch (productSubCode) {
    case 'MA': {
      return 'BaseProd_2_IMG_19.png'
    }
    default: {
      return 'BaseProd_2_IMG_1.png'
    }
  }
}

const getImageForPCP = (productSubCode) => {
  switch (productSubCode) {
    case '001': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '002': {
      return 'BaseProd_2_IMG_7.png'
    }
    case '003': {
      return 'BaseProd_2_IMG_8.png'
    }
    case '005': {
      return 'BaseProd_2_IMG_74.png'
    }
    case '006': {
      return 'BaseProd_2_IMG_75.png'
    }
    case '007': {
      return 'BaseProd_2_IMG_9.png'
    }
    case '008': {
      return 'BaseProd_2_IMG_17.png'
    }
    case '009': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '010': {
      return 'BaseProd_2_IMG_11.png'
    }
    case '011': {
      return 'BaseProd_2_IMG_12.png'
    }
    case '012': {
      return 'BaseProd_2_IMG_16.png'
    }
    case '020': {
      return 'BaseProd_2_IMG_13.png'
    }
    case '021': {
      return 'BaseProd_2_IMG_11.png'
    }
    case '030': {
      return 'BaseProd_2_IMG_12.png'
    }
    case '031': {
      return 'BaseProd_2_IMG_14.png'
    }
    case '048': {
      return 'BaseProd_2_IMG_15.png'
    }
    case '060': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '061': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '062': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '990': {
      return 'BaseProd_2_IMG_19.png'
    }
    case '991': {
      return 'BaseProd_2_IMG_19.png'
    }
    default: {
      return 'BaseProd_2_IMG_1.png'
    }
  }
}

const getImageForPCV = (productSubCode) => {
  switch (productSubCode) {
    case '032': {
      return 'BaseProd_2_IMG_22.png'
    }
    case '034': {
      return 'BaseProd_2_IMG_Lowrate.png'
    }
    case '046':
    case '045':
    case '044':
    case '043':
    case '042':
    case '041':
    case '047': {
      return 'BaseProd_2_IMG_17.png'
    }
    case '049': {
      return 'BaseProd_2_IMG_23.png'
    }
    default: {
      return 'BaseProd_2_IMG_1.png'
    }
  }
}

export const getCardName = (productCode, productSubCode) => {
  switch (productCode) {
    case 'CDA': {
      return 'BaseProd_2_IMG_1.png'
    }
    case 'DDA': {
      return 'BaseProd_2_IMG_3.png'
    }
    case 'FMM': {
      return getImageForFMM(productSubCode)
    }
    case 'IIP':
    case 'FMV': {
      return 'BaseProd_2_IMG_19.png'
    }
    case 'ILS': {
      return 'BaseProd_2_IMG_4.png'
    }
    case 'PCB': {
      return 'BaseProd_2_IMG_66.png'
    }
    case 'PCP': {
      return getImageForPCP(productSubCode)
    }
    case 'PCQ': {
      return 'BaseProd_2_IMG_3.png'
    }
    case 'PCV': {
      return getImageForPCV(productSubCode)
    }
    case 'SSI':
    case 'RSV': {
      return 'BaseProd_2_IMG_19.png'
    }
    default: {
      return 'BaseProd_2_IMG_1.png'
    }
  }
}

const Util = {
  handleLogOut, getCardName, areEligibleCardsAvailable, handleNavigationToExternalUrl, updateURL, formatMobileNumber
}

export default Util
