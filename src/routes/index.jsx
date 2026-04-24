import AuthLayout from '@/components/layouts/auth-layout'
import RootLayout from '@/components/layouts/root-layout'
import { VerifySignInPage } from '@/components/pages/auth/verify-sign-in'
import { VerifySignUpPage } from '@/components/pages/auth/verify-sign-up'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import layzy pages
const Home = lazy(() => import('@/components/pages/home/home'))
const SignIn = lazy(() => import('@/components/pages/auth/sign-in'))
const SignUp = lazy(() => import('@/components/pages/auth/sign-up'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />, // Endi bu yerda xato bermaydi
		children: [{ index: true, element: <Home /> }],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: 'sign-in', element: <SignIn /> },
			{ path: 'sign-up', element: <SignUp /> },
			{ path: '/verify-sign-in', element: <VerifySignInPage /> },
			{ path: '/verify-sign-up', element: <VerifySignUpPage /> },
		],
	},
])
