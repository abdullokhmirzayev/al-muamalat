import { Footer } from '@/components/shared/footer'
import Header from '@/components/shared/header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='pt-20 grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
