import FormEditor from '@/components/shared/form/form-editor' // Yangi reusable muharrir
import FormInput from '@/components/shared/form/form-input'
import { useForm } from 'react-hook-form'

const DashboardForm = ({
	titleText = 'Yangi Qayd Yaratish',
	subtitleText = "Ma'lumotlarni to'liq va aniq kiriting",
	defaultValues = { title: '', subtitle: '', message1: '', message2: '' },
	onSubmit,
	isEdit = false,
}) => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: defaultValues,
	})

	return (
		<div className='max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
			<div className='mb-6'>
				<h2 className='text-xl font-bold text-gray-800'>{titleText}</h2>
				<p className='text-sm text-gray-500'>{subtitleText}</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
				{/* Reusable Inputlar */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					<FormInput
						id='title'
						label='Title'
						placeholder='Title kiriting'
						disabled={isSubmitting}
						error={errors.title}
						{...register('title', { required: 'Title kiritilishi shart' })}
					/>

					<FormInput
						id='subtitle'
						label='Subtitle'
						placeholder='Subtitle kiriting'
						disabled={isSubmitting}
						error={errors.subtitle}
						{...register('subtitle', {
							required: 'Subtitle kiritilishi shart',
						})}
					/>
				</div>

				{/* Message 1 - Reusable FormEditor */}
				<FormEditor
					name='message1'
					control={control}
					label='Message 1'
					error={errors.message1}
					rules={{ required: "Message 1 qismi bo'sh bo'lmasligi kerak" }}
				/>

				{/* Message 2 - Reusable FormEditor (Majburiy emas) */}
				<FormEditor
					name='message2'
					control={control}
					label='Message 2'
					error={errors.message2}
				/>

				{/* Tugmalar */}
				<div className='flex items-center space-x-3 pt-4 border-t border-gray-100'>
					<button
						type='submit'
						disabled={isSubmitting}
						className='px-5 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-colors disabled:bg-teal-400'
					>
						{isSubmitting ? 'Saqlanmoqda...' : isEdit ? 'Yangilash' : 'Saqlash'}
					</button>
					<button
						type='button'
						onClick={() => reset()}
						className='px-5 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors border'
					>
						Bekor qilish
					</button>
				</div>
			</form>
		</div>
	)
}

export default DashboardForm
