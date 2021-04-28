import axios from 'axios'

axios.defaults.baseURL = 'http://www.jobsofferings.cn:4398'

const env = process.env.NODE_ENV

if (env === 'development') {
  axios.defaults.baseURL = 'http://localhost:4398'
} else if (env === 'production') {
  axios.defaults.baseURL = 'http://www.jobsofferings.cn:4398'
}

export const axiosGet = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        data,
      })
      .then(function (res) {
        resolve(res)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export function axiosPost(url: string, data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(function (res) {
        resolve(res)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
