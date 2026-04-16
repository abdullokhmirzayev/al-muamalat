import Image from 'next/image'

const IEPHero = () => {
	const learningPoints = [
		'Gain a comprehensive understanding of Islamic finance principles and ethics.',
		'Build a portfolio with 10+ real-world projects in Islamic financial services.',
		'Learn to develop and manage Sharia-compliant financial products.',
		'Master key concepts in Islamic banking, investment, and wealth management.',
		'Understand the fundamentals of risk management in Islamic finance.',
		'Develop skills to work as an Islamic finance consultant.',
	]

	const benefits = [
		'Lifetime access',
		'Video lessons',
		'Tests',
		'Projects',
		'Downloadable resources',
		'Access via mobile device',
	]

	return (
		<div className='min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50'>
			{/* Header Section */}
			<div className='pt-18 pb-14 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-4xl mx-auto text-center space-y-4'>
					<h1 className='text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight'>
						International educational programs
					</h1>
					<p className='text-lg text-slate-600 max-w-lg mx-auto leading-relaxed'>
						Al Muamalat Education's international study programs offer an
						in-depth learning experience at leading Islamic financial
						institutions around the world.
					</p>
				</div>
			</div>

			{/* Content Section */}
			<div className='px-4 sm:px-6 lg:px-8 pb-20'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
						{/* What you'll learn - Left Column */}
						<div className='bg-[#F3F8FF] rounded-2xl p-9 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300'>
							<h2 className='text-3xl text-center font-medium text-slate-900 mb-8'>
								What you'll learn
							</h2>
							<div className='space-y-5'>
								{learningPoints.map((point, index) => (
									<div key={index} className='flex gap-4 items-center group'>
										<div className='shrink-0 mt-1'>
											<div className='flex items-center justify-center  transition-colors duration-200'>
												<Image
													src='/images/tick-double.png'
													alt='Check'
													width={35}
													height={35}
												/>
											</div>
										</div>
										<p className='text-slate-700 text-xl '>{point}</p>
									</div>
								))}
							</div>
						</div>

						<div className='bg-[#F3F8FF] rounded-2xl p-9 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300'>
							<h2 className='text-3xl text-center font-medium text-slate-900 mb-8'>
								Why should you study at <br className='hidden sm:block' />
								"AL-MUAMALAT"?
							</h2>
							<div className='space-y-5'>
								{benefits.map((benefit, index) => (
									<div key={index} className='flex items-start gap-4 group'>
										<div className='shrink-0 mt-1'>
											<div className='flex items-center justify-center h-6 w-6 rounded-lg  transition-colors duration-200'>
												<div className='h-2.5 w-2.5 rounded-full bg-black' />
											</div>
										</div>
										<span className='text-slate-700 text-xl leading-relaxed font-medium'>
											{benefit}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className='absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none hidden lg:block' />
			<div className='absolute bottom-0 left-0 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none hidden lg:block' />
		</div>
	)
}

export default IEPHero
