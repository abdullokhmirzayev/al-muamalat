import { lazy } from 'react'

const DashboardLayout = lazy(() => import('@/layouts/dashboard-layout'))
const DashboardHome = lazy(
	() => import('@/pages/dashboard/dashboard-home/dashboard-home'),
)
const DashboardLogin = lazy(
	() => import('@/pages/dashboard/dashboard-auth/dashboard-login'),
)

export const dashboardRoutes = [
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [{ index: true, element: <DashboardHome /> }],
	},
	{
		path: '/dashboard/login',
		element: <DashboardLogin />,
	},
]
