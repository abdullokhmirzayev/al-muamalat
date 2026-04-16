import HomeHero from '@/components/home-page-components/home-hero'
import HomeOurTeam from '@/components/home-page-components/home-our-team'
import HomeServices from '@/components/home-page-components/home-services'

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center'>
			<HomeHero />
			<HomeServices />
			<HomeOurTeam />
		</main>
	)
}
