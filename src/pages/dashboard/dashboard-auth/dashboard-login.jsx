import Logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useDashboardAuth } from '@/hooks/use-dashboard-auth'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function SignInPage() {
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			phone_number: '',
			password: '',
		},
	})

	const { mutate, isPending } = useDashboardAuth()

	const onSubmit = async data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen w-full flex-col items-center justify-center bg-[#F8F9FA] px-4 font-sans text-slate-800'>
			{/* Logo */}
			<div className='mb-10 text-center select-none'>
				<a
					href='/'
					className='flex items-center gap-2 group relative w-59.75 h-14'
				>
					<img src={Logo} alt='Logo' className='object-contain' />
				</a>
			</div>

			<div className='w-full max-w-105'>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
					<div className='space-y-2'>
						<label
							htmlFor='phone_number'
							className='text-sm font-semibold text-slate-700'
						>
							Phone Number
						</label>
						<Input
							id='phone_number'
							type='text'
							placeholder='9981234567'
							className={`h-12 border-slate-300 bg-slate-50/50 px-4 rounded-lg focus-visible:ring-[#1D9488] ${
								errors.phone_number
									? 'border-red-500 focus-visible:ring-red-500'
									: ''
							}`}
							{...register('phone_number', {
								required: 'Telefon raqam kiritilishi shart',
								pattern: {
									value: /^[0-9]+$/,
									message: 'Faqat raqamlar kiritilishi kerak',
								},
							})}
						/>
						{errors.phone_number && (
							<p className='text-xs font-medium text-red-500 mt-1'>
								{errors.phone_number.message}
							</p>
						)}
					</div>

					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='text-sm font-semibold text-slate-700'
							>
								Password
							</label>
							{/* <Link
								to='/forgot-password'
								className='text-xs font-semibold text-[#1D9488] hover:underline'
							>
								Forgot Password?
							</Link> */}
						</div>

						<div className='relative'>
							<Input
								id='password'
								type={showPassword ? 'text' : 'password'}
								placeholder='••••••••••••'
								className={`h-12 border-slate-300 bg-slate-50/50 pr-12 pl-4 rounded-lg focus-visible:ring-[#1D9488] ${
									errors.password
										? 'border-red-500 focus-visible:ring-red-500'
										: ''
								}`}
								{...register('password', {
									required: 'Parol kiritilishi shart',
									minLength: {
										value: 4,
										message: "Parol kamida 4 ta belgidan iborat bo'lsin",
									},
								})}
							/>
							<button
								type='button'
								onClick={() => setShowPassword(!showPassword)}
								className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
							>
								{showPassword ? (
									<EyeOff className='h-5 w-5' />
								) : (
									<Eye className='h-5 w-5' />
								)}
							</button>
						</div>
						{errors.password && (
							<p className='text-xs font-medium text-red-500 mt-1'>
								{errors.password.message}
							</p>
						)}
					</div>

					<Button
						type='submit'
						disabled={isSubmitting}
						className='w-full h-12 bg-[#1D9488] hover:bg-[#17796F] text-white font-semibold text-base rounded-lg transition-colors shadow-sm disabled:opacity-70 cursor-pointer'
					>
						{isPending ? 'Yuklanmoqda...' : 'Login'}
					</Button>
				</form>

				<div className='mt-8 text-center'>
					<Link
						to='/dashboard/register'
						className='text-sm font-bold text-[#1D9488] hover:underline'
					>
						Create an account
					</Link>
				</div>
			</div>
		</div>
	)
}
