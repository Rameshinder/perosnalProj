import request from './Request'
import constants from '../../utils/constant'

function getfeedBackDetails (feedbackdata) {
  if (constants.API.ENV === 'DEV') {
    return request({
      url: 'http://hydpcm306686d:2025/Feedbackservice',
      method: 'OPTIONS',
      data: feedbackdata
    })
  } else {
    return request({
      url: 'http://hydpcm306686d:2025/Feedbackservice',
      method: 'OPTIONS',
      data: feedbackdata
    })
  }
}

const FeedBackService = {
  getfeedBackDetails
}

export default FeedBackService
