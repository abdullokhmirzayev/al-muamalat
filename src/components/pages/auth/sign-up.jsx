import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, User } from 'lucide-react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const countries = [
	{ code: 'UZ', flag: UzbFlag, name: 'Uzbekistan' },
	{ code: 'US', flag: EnFlag, name: 'United States' },
]

// images
import AvatarImg1 from '@/assets/avatar1.png'
import EnFlag from '@/assets/en.png'
import Logo from '@/assets/logo.png'
import UzbFlag from '@/assets/uzb.png'
import SingPageRight from './components/sign-right'

const SignUpPage = () => {
	return (
		<main className='min-h-screen flex'>
			{/* ========== LEFT SIDE ========== */}
			<div className='flex-1 flex flex-col px-10 py-8 md:px-16'>
				{/* Top nav */}
				<div className='flex items-center justify-between mt-24'>
					{/* Logo */}
					<a
						href='/'
						className='flex items-center gap-2 group relative w-59.75 h-14'
					>
						<img src={Logo} alt='Logo' className='object-contain' />
					</a>

					{/* Ask Diyor */}
					<div className='flex items-center gap-10 relative left-[17%] z-10'>
						<div className='text-right'>
							<p className='text-xl text-slate-400'>Questions?</p>
							<p className='text-3xl font-semibold text-[#009688]'>Ask Diyor</p>
						</div>
						<div className='relative w-20 h-20 rounded-full overflow-hidden border-8 border-white'>
							<img
								src={AvatarImg1}
								alt='Diyor'
								className='object-cover w-full'
							/>
						</div>
					</div>
				</div>

				{/* Form area */}
				<div className='flex-1 flex flex-col justify-center max-w-lg'>
					<h1 className='text-[86px] font-black text-slate-900 leading-tight'>
						Get started
					</h1>

					{/* Already have account */}
					<p className='text-xl text-slate-500'>
						Already have an account?{' '}
						<a
							href='/sign-in'
							className='text-[#009688] font-semibold hover:underline'
						>
							Sign in
						</a>
					</p>

					<div className='flex flex-col gap-4 mt-3'>
						{/* Name */}
						<div className='relative'>
							<Input
								type='text'
								placeholder='Enter your name'
								className='pr-10 h-14 rounded-[10px] border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:ring-[#009688] placeholder:text-xl'
							/>
							<User className='absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 pointer-events-none' />
						</div>

						{/* Email */}
						<div className='relative'>
							<Input
								type='email'
								placeholder='Enter your email'
								className='pr-10 h-14 rounded-[10px] border-slate-200 bg-white text-sm placeholder:text-slate-400 focus-visible:ring-[#009688] placeholder:text-xl'
							/>
							<Mail className='absolute right-3 top-1/2 -translate-y-1/2 h- w-6 text-slate-400 pointer-events-none' />
						</div>

						{/* Country selector */}
						<div className='relative'>
							{/* Country selector */}
							<Select defaultValue='UZ'>
								<SelectTrigger className='h-14! w-full rounded-[10px] border-slate-200 bg-white text-sm text-slate-700 focus:ring-[#009688] focus:ring-2 focus:ring-offset-0'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{countries.map(c => (
										<SelectItem key={c.code} value={c.code}>
											<div className='flex items-center gap-2'>
												<div className='relative w-6 h-4 shrink-0 overflow-hidden rounded-sm'>
													<img
														src={c.flag}
														alt={c.name}
														className='object-cover'
													/>
												</div>
												<span>{c.name}</span>
											</div>
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						{/* Log in button */}
						<Button className='h-14 rounded-[10px] bg-[#009688] hover:bg-teal-700 text-white font-semibold text-base mt-1 cursor-pointer'>
							Log in
						</Button>
					</div>
				</div>
			</div>

			<SingPageRight />
		</main>
	)
}

export default SignUpPage
