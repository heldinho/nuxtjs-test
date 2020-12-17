import Axios from 'axios'

const local = 'http://localhost/api/'
const serve = 'http://api.atvbk.me/api/v1/'

export const Api = Axios.create({
  baseURL: local
})

export const Login = (action, data) => {
  return Api.post(`accounts.php?action=${action}`, data)
}

export const CreateAccount = (action, data) => {
  return Api.post(`accounts.php?action=${action}`, data)
}

export const ShowBalance = action => {
  const data = {
    token: localStorage.getItem('tokenSys')
  }
  return Api.post(`accounts.php?action=${action}`, data)
}

export const ShowExtractAccount = action => {
  const data = {
    token: localStorage.getItem('tokenSys')
  }
  return Api.post(`accounts.php?action=${action}`, data)
}

export const TransferAmount = (action, data) => {
  const _data = {
    token: localStorage.getItem('tokenSys'),
    ...data
  }
  return Api.post(`accounts.php?action=${action}`, _data)
}

export default Api
