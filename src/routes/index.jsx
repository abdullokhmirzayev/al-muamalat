import RootLayout from '@/components/layouts/root-layout'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import layzy pages
const Home = lazy(() => import('@/components/pages/home/home'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			// { path: 'signin', element: <SignIn /> },
			// { path: 'signup', element: <SignUp /> },
		],
	},
])
