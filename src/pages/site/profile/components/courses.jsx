import { Button } from '@/components/ui/button'
import { useMakePayment } from '@/hooks/use-make-payment'
import { PaymentButton } from './payment-button'

// API_URL ni loyihangizga qarab moslang (agar .env dan kelayotgan bo'lsa)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const ProfileCourses = ({ courses, isLoading, isError, userId }) => {
	if (isLoading) return <div className='p-6'>Loading...</div>
	if (isError)
		return <div className='p-6 text-red-500'>Error loading courses.</div>
	if (!courses?.data?.courses?.length)
		return <div className='p-6'>No courses found.</div>

	const purchasedCourses = courses.data.courses

	console.log(courses)

	const { makePayment, isLoading: isPaying } = useMakePayment()

	const handlePayment = courseId => {
		const submitData = {
			course_id: courseId,
			user_id: userId,
		}
		makePayment(submitData)
	}

	return (
		<div className='md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-bold'>Courses purchased</h2>
				<Button
					variant='secondary'
					className='bg-teal-200 text-teal-950 hover:bg-teal-400 cursor-pointer'
				>
					All courses
				</Button>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
				{purchasedCourses.map(item => {
					const courseDetail = item.courses[0]
					const isPaid = item.purchase_status === 'success'

					// Rasm URL manzilini tekshirib olish
					const imageUrl = courseDetail?.images?.[0]?.src
						? `${API_URL}/uploads/images/${courseDetail.images[0].src}`
						: null

					return (
						<div
							key={item.id}
							className='border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col'
						>
							{/* Kurs rasm qismi o'zgartirildi */}
							<div className='h-48 relative text-white flex flex-col justify-center items-center text-center overflow-hidden bg-teal-900'>
								{imageUrl ? (
									<>
										{/* Asosiy rasm */}
										<img
											src={imageUrl}
											alt={courseDetail.name_en}
											className='absolute inset-0 w-full h-full object-cover z-0'
										/>
										{/* Matnlar yaxshi o'qilishi uchun qorong'u qatlam (overlay) */}
										<div className='absolute inset-0 bg-black/50 z-10' />
									</>
								) : null}

								{/* Kontent z-20 klassi bilan rasm ustiga chiqarildi */}
								<div className='relative z-20 p-4 flex flex-col justify-center items-center h-full w-full'>
									<div className='text-xs opacity-75 uppercase tracking-wider'>
										{courseDetail.name_en.split('-')[0]}
									</div>
									<div className='mt-2 font-bold text-2xl'>
										{courseDetail.name_en.match(/CPFAS|CPSS/) || 'Course'}
									</div>
									<div className='absolute bottom-4 right-4 text-xs bg-orange-500 px-2 py-1 rounded shadow-sm'>
										In English
									</div>
								</div>
							</div>

							{/* Kurs ma'lumotlari */}
							<div className='p-4 flex flex-col grow'>
								<h3 className='font-bold text-sm mb-4 line-clamp-2 h-10'>
									{courseDetail.name_en}
								</h3>

								<div className='flex gap-2 mt-auto'>
									{item.purchase_status === 'created' ? (
										<>
											<Button
												size='sm'
												variant='destructive'
												className='bg-red-500 rounded-lg text-white text-xs px-3 hover:text-red-500'
											>
												Unpaid
											</Button>
											<PaymentButton
												courseId={courseDetail.id}
												userId={userId}
											/>
										</>
									) : (
										<Button
											size='sm'
											className='bg-green-600 hover:bg-green-700 rounded-lg w-full'
										>
											Continue Learning
										</Button>
									)}
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProfileCourses
