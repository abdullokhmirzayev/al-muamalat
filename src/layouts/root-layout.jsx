// src/layouts/RootLayout.jsx
import { Footer } from '@/components/shared/footer'
import Header from '@/components/shared/header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<>
			<Header />
			<main className='pt-20'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
