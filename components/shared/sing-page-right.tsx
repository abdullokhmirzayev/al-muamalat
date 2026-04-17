import Image from 'next/image'

const SingPageRight = () => {
	return (
		<div className='hidden md:flex w-[48%] bg-[#009688] rounded-[2.5rem] flex-col items-center justify-between py-12 px-10 relative overflow-hidden m-5'>
			{/* Decorative blobs */}
			<div className='absolute -top-15 -right-15 w-52 h-52 rounded-full bg-teal-500/40' />
			<div className='absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-700/40' />

			{/* Illustration */}
			<div className='relative w-full flex-1 flex items-center justify-center'>
				<Image
					src='/images/sign-img.png'
					alt='Sign up illustration'
					width={380}
					height={380}
					className='object-contain drop-shadow-xl relative z-10'
				/>
			</div>

			{/* Bottom text */}
			<div className='text-center relative z-10'>
				<h2 className='text-white text-4xl font-bold leading-snug max-w-lg mx-auto'>
					Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
				</h2>
			</div>
		</div>
	)
}

export default SingPageRight
