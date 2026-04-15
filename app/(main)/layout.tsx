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
			<div className='mb-20 flex-1'>{children}</div>
			<Footer />
		</>
	)
}
