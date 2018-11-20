export const cards = [
  {
    'number': '4072200010054642',
    'productCode': 'PCP',
    'productSubCode': '008',
    'designCode': '0',
    'status': '',
    'name': 'MR PATRICK GLEN WILKINS',
    'category': 'CREDIT',
    'type': 'ANZ Frequent Flyer Platinum Visa',
    'primary': true,
    'activationRequired': false,
    'eligibleFor': [
      'AppleWalletProvisioning',
      'CardActivation',
      'SetPin',
      'ShowTC'
    ],
    'cardSetID': '4072200010054642',
    'reissued': false
  },
  {
    'number': '4622397029822304',
    'productCode': 'PCP',
    'productSubCode': '061',
    'designCode': '0',
    'status': '',
    'name': 'MR PATRICK GLEN WILKINS',
    'category': 'DEBIT',
    'type': 'ANZ Frequent Flyer Platinum Visa',
    'primary': true,
    'activationRequired': false,
    'eligibleFor': [
      'CardActivation',
      'ShowTC',
      'SetPin'
    ],
    'cardSetID': '4622397029822304',
    'reissued': false
  }
]

export const CDASubCode = ['AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AP', 'AQ', 'AR', 'AT', 'EH', 'EI',
  'WM', 'WN', 'WO', 'WP', 'WQ', 'WR']

export const DDASubCode = ['01', '02', '03', '04', '05', 'BC', 'BP', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CM', 'CN',
  'CO', 'CS', 'CX', 'DR', 'EB', 'ED', 'ES', 'ET', 'EU', 'EV', 'EW', 'FB', 'FM',
  'GS', 'GT', 'HA', 'HB', 'HC', 'HD', 'HI', 'HL', 'HS', 'I1', 'I2', 'I3', 'IA', 'JR', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'LA',
  'M1', 'M2', 'M3', 'M4', 'MB', 'NE', 'NF', 'NG', 'NH', 'NI', 'NJ', 'NM', 'NP', 'PC', 'PD', 'PF', 'PG', 'PH', 'PL', 'PM', 'PR', 'PS',
  'PT', 'PV', 'PX', 'PY', 'PZ', 'RB', 'RC', 'RD', 'RN', 'RW', 'S1', 'S2', 'S3', 'S4', 'SA', 'SB', 'SC', 'SD', 'SE', 'SH', 'SN', 'SS',
  'ST', 'SU', 'SV', 'SW', 'V2', 'XE', 'XY', 'ZD', 'ZE', 'ZN', 'ZR']

export const ILSSubCode = ['300', 'ABC', 'AVB', 'BAB', 'BAC', 'BBC', 'BCC', 'BFB', 'BIC', 'BMC', 'BVB', 'BVC', 'BVD', 'BVI', 'CAC', 'CFB',
  'CFC', 'CVB', 'CVC', 'DFL', 'DMC', 'FFB', 'FVB', 'FVC', 'GVB', 'HAB', 'HBB', 'HBC', 'HBD', 'HDC', 'HEB', 'HEC', 'HEF', 'HEH',
  'HEL', 'HFB', 'HFC', 'HFD', 'HHB', 'HIC', 'HIH', 'HIL', 'HLB', 'HLC', 'HPD', 'HRC', 'HRH', 'HRL', 'HVB', 'HVC', 'HVH', 'HVL',
  'HVQ', 'IAB', 'IAC', 'IAD', 'IBB', 'IBC', 'IBD', 'IDC', 'IEC', 'IFB', 'IFC', 'IFD', 'ILC', 'IOC', 'IPD', 'IRB', 'IRC', 'IVB',
  'IVC', 'IVQ', 'NEB', 'NEC', 'OAB', 'OAC', 'ODC', 'OFB', 'OFC', 'OIB', 'OIC', 'OLB', 'OMB', 'ONB', 'ONC', 'OPB', 'OPC', 'OTB',
  'OVB', 'OVC', 'RAB', 'REB', 'REC', 'RFB', 'RVB', 'SCC', 'SFC', 'SHC', 'SIC', 'SMC', 'SPC', 'SSC', 'SSF', 'SSL', 'STC', 'SUC',
  'SVC', 'SYC', 'TAB', 'TFB', 'TRB', 'TVB', 'TVC']

export const FMMSubCode = ['MA']

export const FMVSubCode = ['2P', '2S', 'WP', 'WS']

export const IIPSubCode = ['IAC', 'IAL']

export const PCBSubCode = ['050', '051', '080']

export const PCPSubCode = ['001', '060', '061', '062', '990', '991', '009', '002', '003',
  '005', '006', '007', '008', '010', '011', '030', '012', '020', '021', '031', '048']

export const PCQSubCode = ['065', '066']

export const PCVSubCode = ['032', '034', '041', '042', '043', '044', '045', '046', '047', '049']

export const RSVSubCode = ['BA', 'BB', 'BD', 'BE', 'BG']

export const SSISubCode = ['PEN', 'SUP', 'TRR']

export const Products = ['CDA', 'DDA', 'ILS', 'FMM', 'FMV', 'IIP', 'PCB', 'PCP', 'PCQ', 'PCV', 'RSV', 'SSI']

export const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  setRequestHeader: jest.fn()
}
