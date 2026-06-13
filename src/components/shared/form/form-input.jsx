import { Input } from '@/components/ui/input'
import { forwardRef } from 'react'

const FormInput = forwardRef(
	({ label, error, id, placeholder, type = 'text', ...props }, ref) => {
		return (
			<div className='w-full'>
				{label && (
					<label
						htmlFor={id}
						className='block text-sm font-medium text-gray-700 mb-2'
					>
						{label}
					</label>
				)}

				<Input
					id={id}
					type={type}
					ref={ref}
					placeholder={placeholder}
					className={`w-full focus-visible:ring-1 focus-visible:ring-teal-500 rounded ${
						error
							? 'border-red-500 focus-visible:ring-red-500'
							: 'border-gray-200'
					}`}
					{...props}
				/>

				{error && (
					<p className='text-xs font-medium text-red-500 mt-1'>
						{error.message}
					</p>
				)}
			</div>
		)
	},
)

FormInput.displayName = 'FormInput'

export default FormInput
