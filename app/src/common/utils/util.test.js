import * as Util from './util'
import * as mockData from './mockData'

describe('Testing switch cases', () => {
  for (let i = 0; i < mockData.CDASubCode.length; i++) {
    it('Tests for CDA products', () => {
      const func = Util.getCardName('CDA', mockData.CDASubCode[i])
      expect(func).toBe('BaseProd_2_IMG_1.png')
    })
  }

  for (let i = 0; i < mockData.DDASubCode.length; i++) {
    it('Tests for DDA products', () => {
      const func = Util.getCardName('DDA', mockData.DDASubCode[i])
      expect(func).toBe('BaseProd_2_IMG_3.png')
    })
  }

  for (let i = 0; i < mockData.SSISubCode.length; i++) {
    it('Tests for SSI products', () => {
      const func = Util.getCardName('SSI', mockData.SSISubCode[i])
      expect(func).toBe('BaseProd_2_IMG_19.png')
    })
  }

  for (let i = 0; i < mockData.FMVSubCode.length; i++) {
    it('Tests for FMV products', () => {
      const func = Util.getCardName('FMV', mockData.FMVSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_19.png')
    })
  }

  for (let i = 0; i < mockData.IIPSubCode.length; i++) {
    it('Tests for IIP products', () => {
      const func = Util.getCardName('IIP', mockData.IIPSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_19.png')
    })
  }

  for (let i = 0; i < mockData.ILSSubCode.length; i++) {
    it('Tests for ILS products', () => {
      const func = Util.getCardName('ILS', mockData.ILSSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_4.png')
    })
  }

  for (let i = 0; i < mockData.PCBSubCode.length; i++) {
    it('Tests for PCB products', () => {
      const func = Util.getCardName('PCB', mockData.PCBSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_66.png')
    })
  }

  for (let i = 0; i < mockData.FMMSubCode.length; i++) {
    it('Tests for FMM products', () => {
      const func = Util.getCardName('FMM', mockData.FMMSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_19.png')
    })
  }

  for (let i = 0; i < mockData.RSVSubCode.length; i++) {
    it('Tests for RSV products', () => {
      const func = Util.getCardName('RSV', mockData.RSVSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_19.png')
    })
  }

  for (let i = 0; i < mockData.PCQSubCode.length; i++) {
    it('Tests for PCQ products', () => {
      const func = Util.getCardName('PCQ', mockData.PCQSubCode[i])
      expect(func).toBe('BaseProd_2_IMG_3.png')
    })
  }

  for (let i = 0; i < mockData.PCVSubCode.length; i++) {
    it('Tests for PCV products', () => {
      const func = Util.getCardName('PCV', mockData.PCVSubCode[i])
      if (mockData.PCVSubCode[i] === '049') {
        expect(func).toBe('BaseProd_2_IMG_23.png')
      } else if (mockData.PCVSubCode[i] === '032') {
        expect(func).toBe('BaseProd_2_IMG_22.png')
      } else if (mockData.PCVSubCode[i] === '034') {
        expect(func).toBe('BaseProd_2_IMG_Lowrate.png')
      } else {
        expect(func).toBe('BaseProd_2_IMG_17.png')
      }
    })
  }

  for (let i = 0; i < mockData.PCPSubCode.length; i++) {
    it('Tests for PCP products', () => {
      const func = Util.getCardName('PCP', mockData.PCPSubCode[i])
      if (mockData.PCPSubCode[i] === '002') {
        expect(func).toBe('BaseProd_2_IMG_7.png')
      } else if (mockData.PCPSubCode[i] === '003') {
        expect(func).toBe('BaseProd_2_IMG_8.png')
      } else if (mockData.PCPSubCode[i] === '004') {
        expect(func).toBe('BaseProd_2_IMG_17.png')
      } else if (mockData.PCPSubCode[i] === '005') {
        expect(func).toBe('BaseProd_2_IMG_74.png')
      } else if (mockData.PCPSubCode[i] === '006') {
        expect(func).toBe('BaseProd_2_IMG_75.png')
      } else if (mockData.PCPSubCode[i] === '007') {
        expect(func).toBe('BaseProd_2_IMG_9.png')
      } else if (mockData.PCPSubCode[i] === '008') {
        expect(func).toBe('BaseProd_2_IMG_17.png')
      } else if (mockData.PCPSubCode[i] === '010') {
        expect(func).toBe('BaseProd_2_IMG_11.png')
      } else if (mockData.PCPSubCode[i] === '011' || mockData.PCPSubCode[i] === '030') {
        expect(func).toBe('BaseProd_2_IMG_12.png')
      } else if (mockData.PCPSubCode[i] === '012') {
        expect(func).toBe('BaseProd_2_IMG_16.png')
      } else if (mockData.PCPSubCode[i] === '020') {
        expect(func).toBe('BaseProd_2_IMG_13.png')
      } else if (mockData.PCPSubCode[i] === '021') {
        expect(func).toBe('BaseProd_2_IMG_11.png')
      } else if (mockData.PCPSubCode[i] === '031') {
        expect(func).toBe('BaseProd_2_IMG_14.png')
      } else if (mockData.PCPSubCode[i] === '048') {
        expect(func).toBe('BaseProd_2_IMG_15.png')
      } else {
        expect(func).toBe('BaseProd_2_IMG_19.png')
      }
    })
  }
})

describe('DEFAULT CASES', () => {
  for (let i = 0; i < mockData.Products.length; i++) {
    it(`default value for ${mockData.Products[i]}`, () => {
      const func = Util.getCardName(mockData.Products[i])
      if (mockData.Products[i] === 'CDA') {
        expect(func).toBe('BaseProd_2_IMG_1.png')
      } else if (mockData.Products[i] === 'DDA' || mockData.Products[i] === 'PCQ') {
        expect(func).toBe('BaseProd_2_IMG_3.png')
      } else if (mockData.Products[i] === 'ILS') {
        expect(func).toBe('BaseProd_2_IMG_4.png')
      } else if (mockData.Products[i] === 'PCB') {
        expect(func).toBe('BaseProd_2_IMG_66.png')
      } else if (mockData.Products[i] === 'IIP' || mockData.Products[i] === 'FMV' ||
    mockData.Products[i] === 'SSI' || mockData.Products[i] === 'RSV') {
        expect(func).toBe('BaseProd_2_IMG_19.png')
      } else {
        expect(func).toBe('BaseProd_2_IMG_1.png')
      }
    })
  }

  it('default value', () => {
    const func = Util.getCardName()
    expect(func).toBe('BaseProd_2_IMG_1.png')
  })
})

describe('UTILS', () => {
  test('areEligibleCardsAvailable invoked returns false', () => {
    expect(Util.areEligibleCardsAvailable({})).toBeFalsy()
  })

  test('areEligibleCardsAvailable invoked returns true', () => {
    expect(Util.areEligibleCardsAvailable(mockData.cards)).toBeTruthy()
  })

  test('invoking updateURL', () => {
    const AppConstants = require('./constant')
    Util.updateURL('111')
    expect(AppConstants.default.IB_URL_HOME).toBe('http://appau301mel5125.globaltest.anz.com:9080/IBAU/BANKAWAYTRAN;jsessionid=0000111:-1?fromReactApp=home')
  })

  test('invoking handleNavigationToExternalUrl ', () => {
    window.XMLHttpRequest = jest.fn(() => mockData.mockXHR)
    let request = window.XMLHttpRequest()
    Util.handleNavigationToExternalUrl('http://airbnb.io/enzyme/')
    expect(request.open).toHaveBeenCalled()
  })

  test('invoking handleLogOut  ', () => {
    Util.handleLogOut()
    expect(window.location.href).toBe('about:blank')
  })
})
