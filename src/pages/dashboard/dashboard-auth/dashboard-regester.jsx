import Logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useDashboardRegester } from '@/hooks/use-dashboard-auth'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			full_name: '',
			phone_number: '',
			password: '',
		},
	})

	// Yangi Register hookini chaqiramiz
	const { mutate, isPending } = useDashboardRegester()

	const onSubmit = async data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen w-full flex-col items-center justify-center bg-[#F8F9FA] px-4 font-sans text-slate-800'>
			{/* Logo */}
			<div className='mb-10 text-center select-none'>
				<a
					href='/'
					className='flex items-center justify-center gap-2 group relative h-14'
				>
					<img src={Logo} alt='Logo' className='object-contain h-full' />
				</a>
				<h2 className='mt-4 text-xl font-bold text-slate-700'>
					Create an account
				</h2>
			</div>

			<div className='w-full max-w-105'>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
					{/* Full Name */}
					<div className='space-y-2'>
						<label
							htmlFor='full_name'
							className='text-sm font-semibold text-slate-700'
						>
							Full Name
						</label>
						<Input
							id='full_name'
							type='text'
							placeholder='John Doe'
							className={`h-12 border-slate-300 bg-slate-50/50 px-4 rounded-lg focus-visible:ring-[#1D9488] ${
								errors.full_name
									? 'border-red-500 focus-visible:ring-red-500'
									: ''
							}`}
							{...register('full_name', {
								required: 'Ism-sharif kiritilishi shart',
								minLength: {
									value: 3,
									message: "Ism kamida 3 ta belgidan iborat bo'lsin",
								},
							})}
						/>
						{errors.full_name && (
							<p className='text-xs font-medium text-red-500 mt-1'>
								{errors.full_name.message}
							</p>
						)}
					</div>

					{/* Phone Number */}
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
							placeholder='9989016935'
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

					{/* Password */}
					<div className='space-y-2'>
						<label
							htmlFor='password'
							className='text-sm font-semibold text-slate-700'
						>
							Password
						</label>
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

					{/* Submit Button */}
					<Button
						type='submit'
						disabled={isSubmitting || isPending}
						className='w-full h-12 bg-[#1D9488] hover:bg-[#17796F] text-white font-semibold text-base rounded-lg transition-colors shadow-sm disabled:opacity-70 cursor-pointer mt-2'
					>
						{isPending ? 'Yuklanmoqda...' : 'Create Account'}
					</Button>
				</form>

				{/* Back to Login Link */}
				<div className='mt-8 text-center text-sm text-slate-600'>
					Already have an account?{' '}
					<Link
						to='/dashboard/login'
						className='font-bold text-[#1D9488] hover:underline'
					>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	)
}
