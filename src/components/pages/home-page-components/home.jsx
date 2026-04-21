// home.jsx faylida
// import HomeHero from './home-page-components/home-hero'
import HomeHero from './home-hero'
import HomeOurTeam from './home-our-team'

const Home = () => {
	return (
		<main className='flex flex-col items-center justify-center'>
			<HomeHero />
			<HomeOurTeam />
		</main>
	)
}

export default Home
