import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import Verify from './components/verify'

export const VerifySignInPage = () => {
	const auth = useAuth()
	const navigate = useNavigate()
	return (
		<Verify
			type='signin'
			onSuccess={() => navigate('/')}
			action={auth.handleVerifyOtp}
		/>
	)
}
