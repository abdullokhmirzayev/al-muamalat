// src/layouts/RootLayout.jsx
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/footer'
import Header from '../shared/header'

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
