import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SignInPage = () => {
	return (
		<main className='min-h-screen flex'>
			{/* ========== LEFT SIDE ========== */}
			<div className='flex-1 flex flex-col px-10 py-8 md:px-16'>
				{/* Top nav */}
				<div className='flex items-center justify-between mt-24'>
					{/* Logo */}
					{/* Logo Qismi */}
					<Link
						href='/'
						className='flex items-center gap-2 group relative w-59.75 h-14'
					>
						<Image
							src='/images/logo.png'
							alt='Logo'
							fill
							className='object-contain'
						/>
					</Link>

					{/* Ask Diyor */}
					<div className='flex items-center gap-3 relative left-[17%] z-10'>
						<div className='text-right'>
							<p className='text-xl text-slate-400'>Questions?</p>
							<p className='text-3xl font-semibold text-[#009688]'>Ask Diyor</p>
						</div>
						<div className='relative w-20 h-20 rounded-full overflow-hidden border-8 border-white'>
							<Image
								src='/images/avatar1.png'
								alt='Diyor'
								fill
								className='object-cover'
							/>
						</div>
					</div>
				</div>

				{/* Form area */}
				<div className='flex-1 flex flex-col justify-center max-w-lg'>
					<h1 className='text-[86px] font-black text-slate-900 mb-10 leading-tight'>
						Get started
					</h1>

					<div className='flex flex-col gap-4'>
						{/* Email */}
						<div className='relative'>
							<Input
								type='email'
								placeholder='Enter your email'
								className='pr-10 h-12 rounded-xl border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:ring-teal-500'
							/>
							<Mail className='absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none' />
						</div>

						{/* Password */}
						<Input
							type='password'
							placeholder='Password'
							className='h-12 rounded-xl border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:ring-teal-500'
						/>

						{/* Sign in button */}
						<Button className='h-12 rounded-xl bg-[#009688] hover:bg-teal-700 text-white font-semibold text-sm mt-1'>
							Sign in
						</Button>
					</div>

					{/* Register link */}
					<p className='text-center text-xl text-slate-500 mt-5'>
						Create a new account !{' '}
						<Link
							href='/sign-up'
							className='text-[#009688] font-medium hover:underline'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>

			{/* ========== RIGHT SIDE ========== */}
			<div className='hidden md:flex w-[48%] bg-[#009688] rounded-[2.5rem] flex-col items-center justify-between py-12 px-10 relative overflow-hidden m-5'>
				{/* Decorative blobs */}
				<div className='absolute -top-15 -right-15 w-52 h-52 rounded-full bg-teal-500/40' />
				<div className='absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-teal-700/40' />

				{/* Illustration */}
				<div className='relative w-full flex-1 flex items-center justify-center'>
					<Image
						src='/images/sign-img.png'
						alt='Sign in illustration'
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
		</main>
	)
}

export default SignInPage
