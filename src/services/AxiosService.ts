import axios from 'axios'
import type { AxiosInstance } from 'axios'

const VUE_APP_IPIFY_API_KEY: string = 'at_VYnAXRXJgDdXkXsDcbZZadfQCjhjU'

const api: AxiosInstance = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/country,city'

})
api.interceptors.request.use(config => {
    config.params = {
        apiKey: VUE_APP_IPIFY_API_KEY,
        ...config.params
    }
    return config
})

export default api