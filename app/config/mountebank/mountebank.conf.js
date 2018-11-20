let axios = require('axios')

let env = require('konfig')({
  path: './app/config'
})

let sampleStubs = require('./stubs/sampleDefault')

const ROOT_URL = env.properties.mountebankUrl
let imposters = {'imposters': []}

imposters.imposters.push(sampleStubs())

const axiosInstance = axios.create({
  baseURL: ROOT_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Promise.resolve(axiosInstance.put('/imposters', imposters)
  .then(function (response) {
    console.log('Mountebank setup finished.')
  })
  .catch(function (error) {
    console.log(error)
  })
)
