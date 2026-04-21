import AuthLayout from '@/components/layouts/auth-layout'
import RootLayout from '@/components/layouts/root-layout'
import SignInPage from '@/components/pages/auth/sign-in'
import SignUpPage from '@/components/pages/auth/sign-up'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import layzy pages
const Home = lazy(() => import('@/components/pages/home/home'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />, // Endi bu yerda xato bermaydi
		children: [{ index: true, element: <Home /> }],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: 'sign-in', element: <SignInPage /> },
			{ path: 'sign-up', element: <SignUpPage /> },
		],
	},
])
