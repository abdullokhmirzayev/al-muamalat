import DashboardHeader from '@/pages/dashboard/dashboard-home/components/dashboard-header'
import Sidebar from '@/pages/dashboard/dashboard-home/components/sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
	return (
		<div className='flex h-screen overflow-hidden bg-slate-50'>
			{/* Chap tomondagi doimiy menyu */}
			<Sidebar />

			{/* O'ng tomondagi asosiy kontent paneli */}
			<div className='flex flex-1 flex-col overflow-y-auto'>
				<DashboardHeader />

				{/* Sahifalar shu yerga yuklanadi */}
				<main className='p-6'>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
