import axios from 'axios'
// import constants from '../../utils/constant'
/**
 * Create an Axios Client with defaults
 */

/**
 * Request Wrapper with default success/error actions
 */

const client = axios.create({
  baseURL: PEP_URL
})

/// TODO: Remove console logs, async
const request = function (options) {
  const onSuccess = function (response) {
    return response
  }
  const onError = function (error) {
    return Promise.reject(error.response || error.message)
  }
  return client(options).then(onSuccess).catch(onError)
}

export default request
