import DashnoardSettings from '@/pages/dashboard/dashboard-home/dashnoard-settings'
import { lazy } from 'react'

const DashboardLayout = lazy(() => import('@/layouts/dashboard-layout'))
const DashboardHome = lazy(
	() => import('@/pages/dashboard/dashboard-home/dashboard-home'),
)
const DashboardLogin = lazy(
	() => import('@/pages/dashboard/dashboard-auth/dashboard-login'),
)

const DashboardRegister = lazy(
	() => import('@/pages/dashboard/dashboard-auth/dashboard-regester'),
)

export const dashboardRoutes = [
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{ index: true, element: <DashboardHome /> },

			{
				path: '/dashboard/login',
				element: <DashboardLogin />,
			},

			{
				path: '/dashboard/register',
				element: <DashboardRegister />,
			},
			{
				path: '/dashboard/settings',
				element: <DashnoardSettings />,
			},
		],
	},
]
