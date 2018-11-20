import request from './Request'
import AppConstants from '../../utils/constant'

function getCardDetails (payLoad) {
  if (__ENV__ === 'DEV') {
    return request({
      url: AppConstants.CARD_SERVICE_SFX,
      method: 'POST',
      data: payLoad
    })
  } else {
    return request({
      url: AppConstants.PEP_URL + '/card/list?jsessionId=' + AppConstants.jSessionId,
      header: {
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      data: payLoad
    })
  }
}

const CardService = {
  getCardDetails
}

export default CardService
