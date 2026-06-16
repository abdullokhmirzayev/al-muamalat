import ErrorPage from '@/pages/not-found'
import { createBrowserRouter } from 'react-router-dom'
import { authRoutes } from './auth-routes'
import { dashboardRoutes } from './dashboard-routes'
import { siteRoutes } from './site-routes'

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [siteRoutes, authRoutes, ...dashboardRoutes],
	},
])
