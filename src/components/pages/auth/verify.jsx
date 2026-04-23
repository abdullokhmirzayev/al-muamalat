'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
	const auth = useAuth()
	const {
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: { otp: '' },
	})

	const navigate = useNavigate()

	const otpValue = watch('otp')
	const [resendTimer, setResendTimer] = useState(0)
	const inputRefs = useRef([])

	// Resend timer effect
	useEffect(() => {
		if (resendTimer > 0) {
			const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
			return () => clearTimeout(timer)
		}
	}, [resendTimer])

	// Handle individual digit input
	const handleOtpInput = (index, value) => {
		if (!/^\d*$/.test(value)) return

		const otpArray = otpValue.split('')
		otpArray[index] = value
		const newOtp = otpArray.join('')

		setValue('otp', newOtp)

		// Auto-focus next field
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus()
		}
	}

	// Handle backspace
	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
		if (e.key === 'ArrowLeft' && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
		if (e.key === 'ArrowRight' && index < 5) {
			inputRefs.current[index + 1]?.focus()
		}
	}

	// Handle paste
	const handlePaste = e => {
		e.preventDefault()
		const pastedData = e.clipboardData.getData('text')
		const digits = pastedData.replace(/\D/g, '').slice(0, 6)
		setValue('otp', digits)
	}

	const verifySubmit = () => {
		if (otpValue.length !== 6) return

		const payload = {
			email: auth.user.email,
			otp: otpValue,
		}

		auth.handleVerifyOtp(payload, () => navigate('/profile'))
	}

	const handleResend = () => {
		setValue('otp', '')
		setResendTimer(60)
		inputRefs.current[0]?.focus()
	}

	return (
		<div className='w-full max-w-md mx-auto'>
			<div className='mb-10'>
				<h2 className='text-4xl font-bold text-slate-900 mb-4'>
					Verify your email
				</h2>
				<p className='text-slate-500 text-lg'>
					We&apos;ve sent a 6-digit code to your email. Please enter it below.
				</p>
			</div>

			<form onSubmit={handleSubmit(verifySubmit)} className='space-y-8'>
				{/* OTP Input Fields */}
				<div className='space-y-3'>
					<div className='flex gap-3 justify-between'>
						{[0, 1, 2, 3, 4, 5].map(index => (
							<input
								key={index}
								ref={el => (inputRefs.current[index] = el)}
								type='text'
								inputMode='numeric'
								maxLength='1'
								value={otpValue[index] || ''}
								onChange={e => handleOtpInput(index, e.target.value)}
								onKeyDown={e => handleKeyDown(index, e)}
								onPaste={handlePaste}
								disabled={isSubmitting}
								className={`w-14 h-16 border-2 rounded-lg text-center text-2xl font-bold font-mono transition-all outline-none
									${
										errors.otp
											? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100'
											: 'border-slate-200 focus:border-[#009688] focus:ring-2 focus:ring-teal-100'
									}
									${otpValue[index] ? 'bg-slate-50' : 'bg-white'}
									disabled:opacity-50
								`}
								placeholder='–'
							/>
						))}
					</div>

					{errors.otp && (
						<p className='text-sm text-red-500 font-medium'>
							{errors.otp.message}
						</p>
					)}
				</div>

				{/* Submit Button */}
				<Button
					type='submit'
					disabled={otpValue.length !== 6 || isSubmitting}
					className='w-full bg-[#009688] cursor-pointer hover:bg-[#00796B] disabled:opacity-50 text-white py-6 rounded-xl text-base font-semibold h-auto'
				>
					{isSubmitting ? 'Verifying...' : 'Verify Account'}
				</Button>
			</form>

			{/* Resend Section */}
			<div className='mt-8 pt-8 border-t border-slate-200 text-center'>
				<p className='text-slate-600 text-base mb-3'>
					Didn&apos;t receive a code?
				</p>
				<button
					onClick={handleResend}
					disabled={resendTimer > 0}
					className={`text-[#009688] font-medium transition-all cursor-pointer
						${resendTimer > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}
					`}
				>
					{resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Code'}
				</button>
			</div>
		</div>
	)
}

export default Verify
