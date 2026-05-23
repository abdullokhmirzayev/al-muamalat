import { dashboardRequest } from '@/services/dashboard-request'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useDashboardAuth = () => {
	const navigate = useNavigate()

	return useMutation({
		mutationFn: formData =>
			dashboardRequest.post('auth/signin', formData).then(res => res.data),
		onSuccess: data => {
			console.log(data?.data?.tokens)

			if (data.success && data?.data?.tokens) {
				localStorage.setItem('dashboardToken', data?.data?.tokens?.accessToken)
				localStorage.setItem(
					'dashboardRefreshToken',
					data?.data?.tokens?.refreshToken,
				)
			}
			toast.success('Login Successful')
			navigate('/dashboard')
		},
		onError: error => {
			console.log('Error: ', error.response?.data)
			toast.error(error.response?.data?.message)
		},
	})
}

export const useDashboardRegester = () => {
	const navigate = useNavigate()

	return useMutation({
		mutationFn: payload =>
			dashboardRequest.post('auth/signup', payload).then(res => res.data),

		onSuccess: data => {
			console.log(data)
			toast.success('Signup Successful')
			navigate('/dashboard')
		},

		onError: error => {
			console.log('Error: ', error.response?.data)
			toast.error(error.response?.data?.message)
		},
	})
}
