'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDays, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const slides = [
	{
		badge: 'Seeking Knowledge is an Obligation in Islam',
		heading: (
			<>Enhance Your1 Understanding of Islamic Ethics with Al-Muamalat</>
		),
		image: '/images/hero-student.png',
	},
	{
		badge: 'Seeking Knowledge is an Obligation in Islam',
		heading: (
			<>Enhance Your2 Understanding of Islamic Ethics with Al-Muamalat</>
		),
		image: '/images/hero-student.png',
	},
	{
		badge: 'Seeking Knowledge is an Obligation in Islam',
		heading: (
			<>Enhance Your3 Understanding of Islamic Ethics with Al-Muamalat</>
		),
		image: '/images/hero-student.png',
	},
	{
		badge: 'Seeking Knowledge is an Obligation in Islam',
		heading: (
			<>Enhance Your4 Understanding of Islamic Ethics with Al-Muamalat</>
		),
		image: '/images/hero-student.png',
	},
	// qo'shimcha slide'lar shu yerga
]

const HomeHero = () => {
	const [current, setCurrent] = useState(0)

	return (
		<section className='w-full min-h-130 bg-white relative mb-20'>
			<div className=' overflow-hidden bg-[#009688] h-[90vh]'>
				{/* 250k Students Badge */}
				<div className='absolute right-[30%] top-6 z-20 flex items-center gap-3 rounded-[20px] bg-white/80 px-8 py-5 shadow-xl'>
					<div className='flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100'>
						<CalendarDays className='h-5 w-5 text-sky-500' />
					</div>
					<div>
						<p className='text-lg font-extrabold leading-none text-slate-800'>
							250k
						</p>
						<p className='text-xs text-slate-500'>Assisted Student</p>
					</div>
				</div>

				{/* Hero image */}
				<div className='absolute inset-y-0 right-0 h-full w-[45%] hidden md:flex md:items-end z-10'>
					<div className='relative w-full h-[95%]'>
						<Image
							src={slides[current].image}
							alt='Student holding books'
							fill
							className='object-contain object-bottom'
							priority
						/>
					</div>
				</div>

				{/* Left content */}
				<div className='relative z-20 flex h-full flex-col justify-center px-10 md:px-16 lg:px-24 max-w-[60%]'>
					<Badge
						variant='outline'
						className='mb-6 border-white/20 rounded-[10px] bg-white px-6 py-4 text-[17px] font-medium text-slate-700 shadow-sm w-fit'
					>
						{slides[current].badge}
					</Badge>

					<h1 className='mb-10 text-[58px] font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl'>
						{slides[current].heading}
					</h1>

					<div className='flex flex-wrap items-center gap-35'>
						<div className='relative'>
							<Button className='rounded-[10px] bg-orange-500 px-10 py-5 h-auto text-xs font-bold uppercase tracking-widest text-white hover:bg-orange-600 shadow-lg'>
								Students&apos; Opinion
							</Button>
							<div className='mr-3 flex -space-x-2 absolute top-[6%] -right-[60%]'>
								{[
									'/images/avatar1.png',
									'/images/avatar2.png',
									'/images/avatar3.png',
								].map((src, i) => (
									<Avatar key={i} className='h-13 w-13'>
										<AvatarImage src={src} alt={`Student ${i + 1}`} />
										<AvatarFallback className='bg-slate-400 text-[10px] text-white'>
											S
										</AvatarFallback>
									</Avatar>
								))}
							</div>
						</div>

						<div>
							<div className='flex items-center gap-0.5'>
								{[1, 2, 3, 4].map(s => (
									<Star key={s} className='h-4 w-4 fill-amber-50 text-white' />
								))}
								<Star className='h-4 w-4 fill-amber-50/50 text-white' />
							</div>
							<p className='mt-1 text-xs text-white'>( 10k+ Reviews )</p>
						</div>
					</div>
				</div>
			</div>
			{/* ✅ Carousel Dots — pastda markazda */}
			<div className='absolute -bottom-11 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2'>
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`rounded-full transition-all duration-300 cursor-pointer ${
							i === current
								? 'w-8 h-3 bg-teal-800'
								: 'w-3 h-3 bg-[#D9D9D9] hover:bg-[#D9D9D9]/80'
						}`}
					/>
				))}
			</div>
		</section>
	)
}

export default HomeHero
