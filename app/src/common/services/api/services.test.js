const mockTrue = {API: {
  ENV: 'DEV',
  URL: 'http://localhost:8080'
},
PEP_URL: 'abc'
}
const mockFalse = {API: {
  ENV: 'DEV1',
  URL: 'http://localhost:4589'
},
PEP_URL: 'xyz'
}

describe('UserInfoService', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  test('invoking getUserInfo for true', () => {
    jest.mock('../../utils/constant', () => mockTrue)
    const UserInfoService = require('./UserInfoService')
    expect(__ENV__).toBe('DEV')
    UserInfoService.default.getUserInfo()
  })
  test('invoking getUserInfo for false', () => {
    jest.mock('../../utils/constant', () => mockFalse)
    const UserInfoService = require('./UserInfoService')

    expect(__ENV__).toBe('DEV')
    UserInfoService.default.getUserInfo()
  })
})

describe('CardService', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  test('invoking getCardDetails for true', () => {
    jest.mock('../../utils/constant', () => mockTrue)
    const appConstants = require('../../utils/constant')
    const CardService = require('./cardService')

    expect(appConstants.API.ENV).toBe('DEV')
    CardService.default.getCardDetails()
  })
  test('invoking getCardDetails for false', () => {
    jest.mock('../../utils/constant', () => mockFalse)
    const appConstants = require('../../utils/constant')
    const CardService = require('./cardService')

    expect(appConstants.API.ENV).toBe('DEV1')
    CardService.default.getCardDetails()
  })
})

describe('MenuItemsService', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('invoking getMenuItems for true', () => {
    jest.mock('../../utils/constant', () => mockTrue)
    process.env.PEP_URL = ''
    const appConstants = require('../../utils/constant')
    const MenuItemsService = require('./menuItemService')

    expect(appConstants.API.ENV).toBe('DEV')
    expect(appConstants.PEP_URL).toBe('abc')
    MenuItemsService.default.getMenuItems()
  })
  test('invoking getMenuItems for false', () => {
    jest.mock('../../utils/constant', () => mockFalse)
    const appConstants = require('../../utils/constant')
    const MenuItemsService = require('./menuItemService')

    expect(appConstants.API.ENV).toBe('DEV1')
    expect(appConstants.PEP_URL).toBe('xyz')

    MenuItemsService.default.getMenuItems()
  })
  test('invoking getfeedBackDetails for true', () => {
    jest.mock('../../utils/constant', () => mockTrue)
    const appConstants = require('../../utils/constant')
    const FeedBackService = require('./feedbackService')

    expect(appConstants.API.ENV).toBe('DEV')
    expect(appConstants.PEP_URL).toBe('abc')
    FeedBackService.default.getfeedBackDetails()
  })
  test('invoking getfeedBackDetails for false', () => {
    jest.mock('../../utils/constant', () => mockFalse)
    const appConstants = require('../../utils/constant')
    const FeedBackService = require('./feedbackService')

    expect(appConstants.API.ENV).toBe('DEV1')
    expect(appConstants.PEP_URL).toBe('xyz')

    FeedBackService.default.getfeedBackDetails()
  })
})
