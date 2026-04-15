import { Footer } from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<div className='mt-14 mb-20'>{children}</div>
			<Footer />
		</>
	)
}
