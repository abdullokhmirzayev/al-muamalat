// home.jsx faylida
// import HomeHero from './home-page-components/home-hero'
import HomeHero from './components/home-hero'
import HomeOurTeam from './components/home-our-team'
import HomeServices from './components/home-services'

const Home = () => {
	return (
		<main className='flex flex-col items-center justify-center'>
			<HomeHero />
			<HomeServices />
			<HomeOurTeam />
		</main>
	)
}

export default Home
