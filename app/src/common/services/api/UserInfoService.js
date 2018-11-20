import request from './Request'
import AppConstants from '../../utils/constant'

function getUserInfo (payLoad) {
  if (__ENV__ === 'DEV') {
    return request({
      url: AppConstants.USER_INFO_SFX,
      method: 'POST',
      data: payLoad
    })
  } else {
    return request({
      url: AppConstants.PEP_URL + '/menu/menuitems?jsessionId=' + AppConstants.jSessionId,
      header: {
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST'
    })
  }
}

const UserInfoService = {
  getUserInfo
}

export default UserInfoService
