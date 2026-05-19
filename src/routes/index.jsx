import { createBrowserRouter } from 'react-router-dom'
import { authRoutes } from './auth-routes'
import { dashboardRoutes } from './dashboard-routes'
import { siteRoutes } from './site-routes'

export const router = createBrowserRouter([
	siteRoutes,
	authRoutes,
	...dashboardRoutes,
])
