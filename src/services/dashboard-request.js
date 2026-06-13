import axios from 'axios'

const dashboardRequest = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	params: {},
})

dashboardRequest.interceptors.request.use(
	config => {
		const token = localStorage.getItem('dashboardToken')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}
		return config
	},
	error => Promise.reject(error),
)

dashboardRequest.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config

		if (
			error.response &&
			error.response.status === 401 &&
			!originalRequest._retry
		) {
			originalRequest._retry = true

			try {
				const refreshToken = localStorage.getItem('dashboardRefreshToken')

				if (!refreshToken) throw new Error('Dashboard refresh token topilmadi')

				const response = await axios.post(
					`${import.meta.env.VITE_API_URL}/auth/refresh`,
					{ refreshToken: refreshToken },
				)

				const { accessToken } = response.data
				localStorage.setItem('dashboardToken', accessToken)

				originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
				return axios(originalRequest)
			} catch (refreshError) {
				localStorage.removeItem('dashboardToken')
				localStorage.removeItem('dashboardRefreshToken')
				window.location.href = '/dashboard/login'

				console.log(refreshError)
			}
		}
		return Promise.reject(error)
	},
)

export { dashboardRequest }
