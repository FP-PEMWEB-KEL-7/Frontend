import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pemwebfp.zecrea.my.id/api'
})

export default instance