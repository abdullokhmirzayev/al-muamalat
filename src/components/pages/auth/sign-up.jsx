import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, Mail, Phone, User } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<>
			<h1 className='text-[86px] font-black text-slate-900 leading-tight'>
				Get started
			</h1>
			<p className='text-xl text-slate-500'>
				Already have an account?{' '}
				<Link
					to='/sign-in'
					className='text-[#009688] font-semibold hover:underline'
				>
					Sign in
				</Link>
			</p>

			<form className='flex flex-col gap-4 mt-3'>
				<div className='grid grid-cols-2 gap-3'>
					<AuthInput name='firstName' placeholder='First name' Icon={User} />
					<AuthInput name='lastName' placeholder='Last name' Icon={User} />
				</div>

				<AuthInput
					name='email'
					type='email'
					placeholder='Enter your email'
					Icon={Mail}
				/>

				<div className='relative'>
					<Input
						type={showPassword ? 'text' : 'password'}
						placeholder='Enter password'
						className='pr-10 h-14 rounded-[10px] focus-visible:ring-[#009688]'
					/>
					<button
						type='button'
						onClick={() => setShowPassword(!showPassword)}
						className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer'
					>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				</div>

				<AuthInput
					name='phoneNumber'
					type='tel'
					placeholder='Enter phone number'
					Icon={Phone}
				/>

				<Button
					type='submit'
					className='h-14 rounded-[10px] bg-[#009688] hover:bg-teal-700 text-white font-semibold cursor-pointer'
				>
					Sign Up
				</Button>
			</form>
		</>
	)
}

// Takrorlanuvchi Inputlar uchun kichik ichki komponent (faqat shu faylda yoki alohida)
const AuthInput = ({ Icon, ...props }) => (
	<div className='relative'>
		<Input
			{...props}
			className='pr-10 h-14 rounded-[10px] border-slate-200 focus-visible:ring-[#009688]'
		/>
		{Icon && (
			<Icon className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none' />
		)}
	</div>
)

export default SignUpPage
