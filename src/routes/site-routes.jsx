import { lazy } from 'react'
const RootLayout = lazy(() => import('@/layouts/root-layout'))
const Home = lazy(() => import('@/pages/site/home/home-page'))
const Profile = lazy(() => import('@/pages/site/profile/profile-page'))
const Program = lazy(() => import('@/pages/site/programs/program'))

export const siteRoutes = {
	path: '/',
	element: <RootLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'profile', element: <Profile /> },
		{ path: 'programs', element: <Program /> },
		{ path: 'programs/:courseId', element: <Program /> },
	],
}
