import FuzzyText from '@/components/FuzzyText'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	const navigate = useNavigate()

	let statusCode = '500'
	let errorTitle = 'Kutilmagan xato'
	let errorDescription =
		"Tizimda nosozlik yuz berdi. Iltimos, qaytadan urinib ko'ring."

	if (error?.status === 404) {
		statusCode = '404'
		errorTitle = 'Sahifa topilmadi'
		errorDescription =
			"Siz qidirayotgan sahifa mavjud emas yoki manzili o'zgargan."
	} else if (error?.status === 403) {
		statusCode = '403'
		errorTitle = 'Ruxsat berilmagan'
		errorDescription =
			"Sizda ushbu sahifani ko'rish uchun yetarli huquqlar yo'q."
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-black text-white p-6 text-center select-none'>
			{/* Katta raqamli effekt */}
			<div className='mb-4'>
				<FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
					{statusCode}
				</FuzzyText>
			</div>

			{/* Xatolik sarlavhasi */}
			<h2 className='text-2xl font-semibold text-gray-200 mt-2 tracking-wide'>
				{errorTitle}
			</h2>

			{/* Xatolik haqida batafsil ma'lumot */}
			<p className='text-gray-400 max-w-sm mt-2 mb-8 text-sm leading-relaxed'>
				{errorDescription}
			</p>

			{/* Navigatsiya tugmalari */}
			<div className='flex gap-4 mt-4'>
				<button
					onClick={() => navigate(-1)}
					className='px-5 py-2 border border-gray-700 hover:border-gray-500 text-gray-300 bg-transparent rounded-md text-sm font-medium transition-all cursor-pointer'
				>
					Orqaga qaytish
				</button>
				<button
					onClick={() => navigate('/')}
					className='px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm font-medium transition-all shadow-lg shadow-teal-900/30 cursor-pointer'
				>
					Bosh sahifa
				</button>
			</div>

			{import.meta.env.DEV && error && (
				<pre className='absolute bottom-4 left-4 p-2 bg-gray-900 text-red-400 text-xs rounded border border-gray-800 max-w-md overflow-x-auto text-left'>
					Code error: {error.statusText || error.message}
				</pre>
			)}
		</div>
	)
}

export default ErrorPage
