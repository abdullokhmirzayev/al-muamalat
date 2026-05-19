import { ConfirmPasswordForm } from '@/pages/site/auth/components/confirm-password'
import { ForgotPassword } from '@/pages/site/auth/forgot-password-page'
import { VerifySignInPage } from '@/pages/site/auth/verify-sign-in-page'
import { VerifySignUpPage } from '@/pages/site/auth/verify-sign-up-page'
import { lazy } from 'react'

const AuthLayout = lazy(() => import('@/layouts/auth-layout'))
const SignIn = lazy(() => import('@/pages/site/auth/sign-in-page'))
const SignUp = lazy(() => import('@/pages/site/auth/sign-up-page'))

export const authRoutes = {
	element: <AuthLayout />,
	children: [
		{ path: '/sign-in', element: <SignIn /> },
		{ path: '/sign-up', element: <SignUp /> },
		{ path: '/verify-sign-in', element: <VerifySignInPage /> },
		{ path: '/verify-sign-up', element: <VerifySignUpPage /> },
		{ path: '/forgot-password', element: <ForgotPassword /> },
		{ path: '/forgot-password-confirm', element: <ConfirmPasswordForm /> },
	],
}
