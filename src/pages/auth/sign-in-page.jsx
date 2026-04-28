import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/use-auth'
import { Eye, EyeOff, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignInPage = () => {
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate()

	const auth = useAuth()
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = data => {
		const { email, password } = data

		auth.login({ email, password }, error => {
			if (!error) {
				navigate('/verify-sign-in')
			} else {
				toast.error('Invalid email or password')
			}
		})
	}

	return (
		<>
			<h1 className='text-[86px] font-black text-slate-900 mb-10 leading-tight'>
				Get started
			</h1>
			<p className='text-xl text-slate-500 my-3'>
				Create a new account!{' '}
				<Link
					to='/sign-up'
					className='text-[#009688] font-medium hover:underline cursor-pointer'
				>
					Sign up
				</Link>
			</p>

			<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-1'>
					<Label htmlFor='email'>Email</Label>
					<div className='relative flex items-center'>
						<Input
							type='email'
							placeholder='Enter your email'
							className='pr-10 h-14 rounded-[10px] placeholder:text-xl focus-visible:ring-[#009688]'
							{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						/>
						<Mail className='absolute right-3 h-6 w-6 text-slate-400' />
					</div>
				</div>

				<div className='flex flex-col gap-1'>
					<div className='flex justify-between'>
						<Label htmlFor='password'>Password</Label>
						<Link
							to={'/forgot-password'}
							className='text-sm text-blue-300 hover:underline'
						>
							Forgot password?
						</Link>
					</div>
					<div className='relative flex items-center'>
						<Input
							type={showPassword ? 'text' : 'password'}
							placeholder='Enter password'
							className='pr-10 h-14 rounded-[10px] placeholder:text-xl focus-visible:ring-[#009688]'
							{...register('password', { required: true })}
						/>
						<button
							type='button'
							onClick={() => setShowPassword(!showPassword)}
							className='absolute right-3 text-slate-400 cursor-pointer p-1'
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>
				</div>
				<Button
					type='submit'
					className='h-14 rounded-[10px] cursor-pointer bg-[#009688] hover:bg-teal-700 text-white font-semibold'
				>
					Sign in
				</Button>
			</form>
		</>
	)
}

export default SignInPage
