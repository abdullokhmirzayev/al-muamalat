import axios from 'axios'

const request = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: import.meta.env.VITE_API_URL,
	params: {},
})

request.interceptors.request.use(
	response => {
		const token = localStorage.getItem('userToken')
		if (token) {
			response.headers['Authorization'] = `Bearer ${token}`
		}
		return response
	},
	error => {
		return Promise.reject(error)
	},
)

request.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401) {
			try {
				const refreshToken = localStorage.getItem('refreshToken')
				const response = await axios.post(
					`${import.meta.env.VITE_API_URL}/auth/refresh`,
					{
						refreshToken: refreshToken,
					},
				)
				const { accessToken } = response.data
				localStorage.setItem('userToken', accessToken)
				return axios(error.config)
			} catch (refreshError) {
				window.location.href = '/login'
			}
		}
		return Promise.reject(error)
	},
)

export { request }
