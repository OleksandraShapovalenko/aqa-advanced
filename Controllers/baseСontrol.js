const axios = require('axios')
class BaseControllers {
    constructor() {
        this._axiosConfig = {
            baseURL: 'https://qauto.forstudy.space/api',
            validateStatus: () => true
        }
        this._axios = axios.create(this._axiosConfig)
    }
   async login() {
    const respAuth = await this._axios.post('/auth/signin',{
        email: 'sam.smith@test.com',
        password: '123456789Qq',
        remember: false,
    })
    console.log(respAuth.headers['set-cookie'])
    const sid = respAuth.headers['set-cookie'][0].split(';')[0]
    this._axiosConfig.headers = {Cookie: sid}
   }  
   async get(url) {
    console.log('get url', url)
    console.log('get this._axiosConfig', JSON.stringify(this._axiosConfig.headers))
    return this._axios.get(url, this._axiosConfig)
   }
   async post(url, body) {
    console.log('post this._axiosConfig', JSON.stringify(this._axiosConfig.headers))
    return this._axios.post(url, body, this._axiosConfig)
   }
   async delete(url, body) {
    return this._axios.delete(url, {
     ...this._axiosConfig,
     ...{data: body},
    })
   }
}
module.exports.BaseControllers = BaseControllers