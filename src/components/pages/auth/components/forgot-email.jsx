import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const ForgotEmailForm = ({ onSubmit }) => {
	const { handleSubmit, register } = useForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
			<Input
				type='email'
				placeholder='Enter your email'
				className='pr-10 h-14 rounded-[10px] placeholder:text-xl focus-visible:ring-[#009688]'
				{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
			/>

			<Button
				type='submit'
				className='h-14 rounded-[10px] w-full cursor-pointer bg-[#009688] hover:bg-teal-700 text-white font-semibold'
			>
				Send
			</Button>

			<Link to={'/sign-in'} className='text-black hover:underline cursor-pointer text-center'>  Go back</Link>
		</form>
	)
}
