'use client'

import { Send } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { FacebookIcon } from '../shared/icons/facebook-icon'
import { InstagramIcon } from '../shared/icons/instagram-icon'
import { TwitterXIcon } from '../shared/icons/twitterx-icon'

const team = [
	{
		name: 'Dr. Mezbah Uddin Ahmed',
		bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		image: '/images/home-out-team.png',
		socials: {
			telegram: '#',
			instagram: '#',
			facebook: '#',
			twitter: '#',
		},
	},
	{
		name: 'Dr. Sarah Al-Rashid',
		bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		image: '/images/home-out-team.png',
		socials: {
			telegram: '#',
			instagram: '#',
			facebook: '#',
			twitter: '#',
		},
	},
	{
		name: 'Prof. Khalid Mansoor',
		bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		image: '/images/home-out-team.png',
		socials: {
			telegram: '#',
			instagram: '#',
			facebook: '#',
			twitter: '#',
		},
	},
	{
		name: 'Dr. Fatima Zahra',
		bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
		image: '/images/home-out-team.png',
		socials: {
			telegram: '#',
			instagram: '#',
			facebook: '#',
			twitter: '#',
		},
	},
]

const HomeOurTeam = () => {
	const [current, setCurrent] = useState(0)

	const prev = team[(current - 1 + team.length) % team.length]
	const next = team[(current + 1) % team.length]

	return (
		// ✅ container yo'q — to'liq kenglik, carousel chetlarga chiqishi uchun
		<section className='w-full bg-white py-16 overflow-hidden'>
			{/* Header — container ichida */}
			<div className='container mx-auto px-6 text-center mb-12'>
				<h2 className='text-4xl font-bold text-slate-900 mb-4'>
					Our Expert Team
				</h2>
				<p className='text-slate-500 text-sm max-w-md mx-auto leading-relaxed'>
					Our team consists of seasoned professionals with extensive experience
					in Islamic finance and management. Each member brings a unique set of
					skills and expertise.
				</p>
			</div>

			{/* ✅ Carousel — container YO'Q, to'liq kenglik, peek ishlashi uchun */}
			<div className='flex items-center justify-center gap-4 px-4'>
				{/* Prev peek card */}
				<div
					className='hidden md:block w-56 h-60 rounded-2xl bg-teal-100/60 shrink-0 overflow-hidden relative opacity-60 scale-95 cursor-pointer'
					onClick={() => setCurrent((current - 1 + team.length) % team.length)}
				>
					<Image
						src={prev.image}
						alt={prev.name}
						fill
						className='object-cover object-top'
					/>
					<div className='absolute inset-0 bg-teal-100/40' />
					<div className='absolute bottom-4 left-4 right-4'>
						<p className='text-xs font-semibold text-slate-600 line-clamp-2'>
							{prev.name}
						</p>
					</div>
				</div>

				{/* Active card */}
				<div className='w-full max-w-[70%] bg-teal-100 rounded-[10px] px-8 py-13 flex flex-col sm:flex-row items-center gap-8 shadow-sm shrink-0 justify-evenly'>
					{/* Person image */}
					<div className='relative w-71.25 h-93.75 shrink-0'>
						<Image
							src={team[current].image}
							alt={team[current].name}
							fill
							className='object-contain object-bottom drop-shadow-md'
						/>
					</div>

					{/* Info */}
					<div className='flex flex-col gap-4'>
						<h3 className='text-3xl font-bold text-slate-900'>
							{team[current].name}
						</h3>
						<p className='text-slate-600 text-[22px] leading-relaxed max-w-lg'>
							{team[current].bio}
						</p>

						{/* ✅ Social icons — hammasi ishlaydi */}
						<div className='flex items-center gap-4 mt-1'>
							<a
								href={team[current].socials.telegram}
								className='text-slate-500 hover:text-teal-600 transition-colors'
							>
								<Send className='w-5 h-5' />
							</a>
							<a
								href={team[current].socials.instagram}
								className='text-slate-500 hover:text-teal-600 transition-colors'
							>
								<InstagramIcon />
							</a>
							<a
								href={team[current].socials.facebook}
								className='text-slate-500 hover:text-teal-600 transition-colors'
							>
								<FacebookIcon />
							</a>
							<a
								href={team[current].socials.twitter}
								className='text-slate-500 hover:text-teal-600 transition-colors'
							>
								<TwitterXIcon />
							</a>
						</div>
					</div>
				</div>

				{/* Next peek card */}
				<div
					className='hidden md:block w-56 h-60 rounded-2xl bg-teal-100/60 shrink-0 overflow-hidden relative opacity-60 scale-95 cursor-pointer'
					onClick={() => setCurrent((current + 1) % team.length)}
				>
					<Image
						src={next.image}
						alt={next.name}
						fill
						className='object-cover object-top'
					/>
					<div className='absolute inset-0 bg-teal-100/40' />
					<div className='absolute bottom-4 left-4 right-4'>
						<p className='text-xs font-semibold text-slate-600 line-clamp-2'>
							{next.name}
						</p>
					</div>
				</div>
			</div>

			{/* Dots */}
			<div className='flex items-center justify-center gap-2 mt-10 '>
				{team.map((_, i) => (
					<button
						key={i}
						onClick={() => setCurrent(i)}
						className={`rounded-full transition-all duration-300 cursor-pointer ${
							i === current
								? 'w-8 h-3 bg-teal-700'
								: 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
						}`}
					/>
				))}
			</div>
		</section>
	)
}

export default HomeOurTeam
