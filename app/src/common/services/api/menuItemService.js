import request from './Request'
import AppConstants from '../../utils/constant'

function getMenuItems () {
  if (AppConstants.API.ENV === 'DEV1') {
    return request({
      url: 'v1/menu/menuItems',
      method: 'GET'
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

const MenuItemsService = {
  getMenuItems
}

export default MenuItemsService
