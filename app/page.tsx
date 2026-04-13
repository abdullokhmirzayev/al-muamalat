import HomeHero from '@/components/home-page-components/home-hero'
import HomeServices from '@/components/home-page-components/home-services'

export default function Home() {
	return (
		<main className='mt-20 flex flex-col items-center justify-center'>
			<HomeHero />
			<HomeServices />
		</main>
	)
}
