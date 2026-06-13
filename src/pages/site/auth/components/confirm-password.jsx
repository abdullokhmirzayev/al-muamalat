import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, Hash, Lock, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const ConfirmPasswordForm = ({ email, initialOtp = '', onSubmit }) => {
	const [showPass, setShowPass] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: email,
			otp: initialOtp,
			newPassword: '',
			confirmPassword: '',
		},
	})

	// eslint-disable-next-line react-hooks/incompatible-library
	const password = watch('newPassword')

	return (
		<div className='w-full max-w-md mx-auto space-y-6'>
			<div className=' mb-8'>
				<h2 className='text-3xl font-bold text-slate-900'>Set New Password</h2>
				<p className='text-slate-500'>
					Please enter the code and your new password.
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				{/* 1. Email (Disabled/Readonly) */}
				<div className='relative'>
					<Input
						{...register('email')}
						disabled
						className='h-14 rounded-xl bg-slate-50 border-slate-200 pl-11'
					/>
					<Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5' />
				</div>

				{/* 2. OTP Input */}
				<div className='relative'>
					<Input
						{...register('otp', {
							required: 'OTP kodini kiriting',
							minLength: { value: 6, message: "Kod 6 ta raqam bo'lishi kerak" },
						})}
						placeholder='Enter 6-digit code'
						maxLength={6}
						className={`h-14 rounded-xl pl-11 focus-visible:ring-[#009688] ${errors.otp ? 'border-red-500' : ''}`}
					/>
					<Hash className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5' />
					{errors.otp && (
						<p className='text-red-500 text-xs mt-1'>{errors.otp.message}</p>
					)}
				</div>

				{/* 3. New Password */}
				<div className='relative'>
					<Input
						type={showPass ? 'text' : 'password'}
						placeholder='New Password'
						{...register('newPassword', {
							required: 'Yangi parol shart',
							minLength: { value: 8, message: "Kamida 8 ta belgi bo'lsin" },
						})}
						className='h-14 rounded-xl pl-11 pr-11 focus-visible:ring-[#009688]'
					/>
					<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5' />
					<button
						type='button'
						onClick={() => setShowPass(!showPass)}
						className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'
					>
						{showPass ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				</div>

				{/* 4. Confirm Password */}
				<div className='relative'>
					<Input
						type={'password'}
						placeholder='Confirm New Password'
						{...register('confirmPassword', {
							required: 'Parolni tasdiqlang',
							validate: value => value === password || 'Parollar mos kelmadi',
						})}
						className='h-14 rounded-xl pl-11 pr-11 focus-visible:ring-[#009688]'
					/>
					<Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5' />
				</div>
				{errors.confirmPassword && (
					<p className='text-red-500 text-xs mt-1'>
						{errors.confirmPassword.message}
					</p>
				)}

				<Button
					type='submit'
					disabled={isSubmitting}
					className='w-full h-14 rounded-xl bg-[#009688] hover:bg-teal-700 text-white font-bold text-lg transition-all'
				>
					{isSubmitting ? 'Updating...' : 'Update Password'}
				</Button>
			</form>
		</div>
	)
}
