import DashboardHeader from '@/pages/dashboard/dashboard-home/components/dashboard-header'
import Sidebar from '@/pages/dashboard/dashboard-home/components/sidebar'
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
	const token = localStorage.getItem('dashboardToken')

	if (!token) {
		return <Navigate to='/dashboard/login' replace />
	}

	return (
		<div className='flex h-screen overflow-hidden bg-slate-50'>
			<Sidebar />

			<div className='flex flex-1 flex-col overflow-y-auto'>
				<DashboardHeader />

				<main className='p-6'>
					<Suspense fallback={<div>Loading...</div>}>
						<Outlet />
					</Suspense>
				</main>
			</div>
		</div>
	)
}
