import { useAuth } from '@/hooks/use-auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmPasswordForm } from './components/confirm-password'
import { ForgotEmailForm } from './components/forgot-email'

export const ForgotPassword = () => {
	const [step, setStep] = useState(1) // 1: Email, 2: OTP, 3: New Password
	const [email, setEmail] = useState('')

	const navigate = useNavigate()
	const auth = useAuth()

	// 1-bosqich: Emailni yuborish
	const handleEmailSubmit = data => {
		setEmail(data.email)

		auth.handleForgotPassword(data, () => {
			setStep(2)
			localStorage.removeItem('tempEmail')
		})
	}

	const handleFinalSubmit = data => {
		const payload = {
			email: email,
			otp: data.otp,
			newPassword: data.newPassword,
		}

		auth.handleForgotConfirm(payload, () => {
			navigate('/sign-in')
		})
	}

	return (
		<div>
			{step === 1 && <ForgotEmailForm onSubmit={handleEmailSubmit} />}
			{step === 2 && (
				<ConfirmPasswordForm email={email} onSubmit={handleFinalSubmit} />
			)}
		</div>
	)
}
