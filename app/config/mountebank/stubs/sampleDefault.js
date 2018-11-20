module.exports = () => {
  let sampleImposter = {}
  sampleImposter.port = 4545
  sampleImposter.protocol = 'http'
  sampleImposter.name = 'Sample Stub'
  sampleImposter.stubs = []
  sampleImposter.stubs.push(sampleStub)

  return sampleImposter
}

let sampleStub = {
  'predicates': [
    {
      'equals': {
        'method': 'POST',
        'path': '/skeleton/api/sampleStub'
      }
    }
  ],
  'responses': [
    {
      'is': {
        'statusCode': 200,
        'headers': {},
        'body': {
          sampleResponse: 'Successful'
        }
      },
      '_behaviors': {
        'wait': 500
      }
    }
  ]
}
