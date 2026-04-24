import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import Verify from './components/Verify'

export const VerifySignUpPage = () => {
	const navigate = useNavigate()
	const auth = useAuth()

	return (
		<Verify
			type='signup'
			onSuccess={() => navigate('/profile')}
			action={auth.handleRegisterVerifyOtp}
		/>
	)
}
