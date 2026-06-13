import RichEditor from '@/components/shared/rich-editor'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form' // Controller qo'shildi

const DashboardCourses = () => {
	const {
		register,
		handleSubmit,
		control, // Custom komponentlarni boshqarish uchun kerak
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			title: '',
			subtitle: '',
			message1: '',
			message2: '',
		},
	})

	// Forma muvaffaqiyatli validatsiyadan o'tganda ishlaydi
	const handleSave = data => {
		console.log("Yuborilayotgan ma'lumotlar:", data)
		// data ichida { title, subtitle, message1, message2 } hamma qiymatlar bo'ladi

		// Serverga API so'rov yuborilgandan so'ng formani tozalash uchun:
		// reset()
	}

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<div className='max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
				{/* Sarlavha qismi */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold text-gray-800'>
						Yangi Course Yaratish
					</h2>
					<p className='text-sm text-gray-500'>
						Malumotlarni to'liq va aniq kiriting
					</p>
				</div>

				<form onSubmit={handleSubmit(handleSave)} className='space-y-6'>
					{/* Shadcn Inputlar qatori */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Title
							</label>
							<Input
								type='text'
								placeholder='Title'
								className='w-full focus-visible:ring-1 focus-visible:ring-teal-500 rounded'
								{...register('title', { required: 'Title kiritilishi shart' })}
								disabled={isSubmitting}
							/>
							{errors.title && (
								<p className='text-xs font-medium text-red-500 mt-1'>
									{errors.title.message}
								</p>
							)}
						</div>

						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Subtitle
							</label>
							<Input
								type='text'
								placeholder='Subtitle'
								className='w-full focus-visible:ring-1 focus-visible:ring-teal-500 rounded'
								{...register('subtitle', {
									required: 'Subtitle kiritilishi shart',
								})}
								disabled={isSubmitting}
							/>
							{errors.subtitle && (
								<p className='text-xs font-medium text-red-500 mt-1'>
									{errors.subtitle.message}
								</p>
							)}
						</div>
					</div>

					{/* Message 1 tahrirlovchisi - Controller bilan */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Message 1
						</label>
						<Controller
							name='message1'
							control={control}
							rules={{ required: "Message 1 qismi bo'sh bo'lmasligi kerak" }}
							render={({ field }) => (
								<RichEditor content={field.value} onChange={field.onChange} />
							)}
						/>
						{errors.message1 && (
							<p className='text-xs font-medium text-red-500 mt-1'>
								{errors.message1.message}
							</p>
						)}
					</div>

					{/* Message 2 tahrirlovchisi - Controller bilan */}
					<div>
						<label className='block text-sm font-medium text-gray-700 mb-2'>
							Message 2
						</label>
						<Controller
							name='message2'
							control={control}
							render={({ field }) => (
								<RichEditor content={field.value} onChange={field.onChange} />
							)}
						/>
					</div>

					{/* Pastki tugmalar qatori */}
					<div className='flex items-center space-x-3 pt-4 border-t border-gray-100'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='px-5 py-2 bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-700 transition-colors disabled:bg-teal-400'
						>
							{isSubmitting ? 'Saqlanmoqda...' : 'Saqlash'}
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
		</div>
	)
}

export default DashboardCourses
