import { ConfirmPasswordForm } from '@/pages/auth/components/confirm-password'
import { ForgotPassword } from '@/pages/auth/forgot-password-page'
import { VerifySignInPage } from '@/pages/auth/verify-sign-in-page'
import { VerifySignUpPage } from '@/pages/auth/verify-sign-up-page'
import ProfilePage from '@/pages/profile/profile-page'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import layzy pages
const RootLayout = lazy(() => import('@/layouts/root-layout'))
const Home = lazy(() => import('@/pages/home/home-page'))
const AuthLayout = lazy(() => import('@/layouts/auth-layout'))
const SignIn = lazy(() => import('@/pages/auth/sign-in-page'))
const SignUp = lazy(() => import('@/pages/auth/sign-up-page'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />, // Endi bu yerda xato bermaydi
		children: [
			{ index: true, element: <Home /> },
			{ path: '/profile', element: <ProfilePage /> },
		],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: 'sign-in', element: <SignIn /> },
			{ path: 'sign-up', element: <SignUp /> },
			{ path: '/verify-sign-in', element: <VerifySignInPage /> },
			{ path: '/verify-sign-up', element: <VerifySignUpPage /> },
			{ path: '/forgot-password', element: <ForgotPassword /> },
			{ path: '/forgot-password-confirm', element: <ConfirmPasswordForm /> },
		],
	},
])
