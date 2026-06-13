import RichEditor from '@/components/shared/form/rich-editor'
import { Controller } from 'react-hook-form'

const FormEditor = ({ control, name, label, error, rules = {}, ...props }) => {
	return (
		<div className='w-full'>
			{label && (
				<label className='block text-sm font-medium text-gray-700 mb-2'>
					{label}
				</label>
			)}

			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field }) => (
					<RichEditor
						content={field.value}
						onChange={field.onChange}
						{...props}
					/>
				)}
			/>

			{error && (
				<p className='text-xs font-medium text-red-500 mt-1'>{error.message}</p>
			)}
		</div>
	)
}

export default FormEditor
