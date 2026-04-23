import { createContext, useState } from 'react'

import { toast } from 'react-toastify'
import { request } from '../services/request'

const defaultProvider = {
	user: null,
	loading: false,
	setUser: () => null,
	setLoading: () => Boolean,
	login: () => Promise.resolve(),
	register: () => Promise.resolve(),
	logout: () => Promise.resolve(),
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(defaultProvider.user)
	const [loading, setLoading] = useState(defaultProvider.loading)

	const handleLogin = (params, callback) => {
		setLoading(true)
		request
			.post('/v2/auth/signin/init', params)
			.then(response => {
				console.log(response.data)
				localStorage.setItem('userToken', response.data.accessToken)
				localStorage.setItem('refreshToken', response.data.refreshToken)
				setUser({ ...response.data.user, email: params.email })
				if (callback) callback()
			})
			.catch(error => {
				console.log(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const handleVerifyOtp = params => {
		request
			.post('/v2/auth/signin/verify', params)
			.then(response => {
				console.log(response.data)
			})
			.catch(error => {
				console.log(error)
			})
			.finally(() => {
				toast.success('OTP is valid')
			})
	}

	const handleRegister = params => {
		setLoading(true)
		request
			.post('/v2/auth/signup/init', params)
			.then(response => {
				console.log(response.data)
				localStorage.setItem('userToken', response.data.accessToken)
				localStorage.setItem('refreshToken', response.data.refreshToken)
				setUser(response.data.user)
			})
			.catch(error => {
				console.log(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const values = {
		user,
		loading,
		login: handleLogin,
		register: handleRegister,
		handleVerifyOtp,
	}

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
