import { Button } from '@/components/ui/button'

const ProfileCourses = () => {
	return (
		<div className='md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-bold'>Courses purchased</h2>
				<Button
					variant='secondary'
					className='bg-[#FF6B4A15] text-[#FF6B4A] hover:bg-[#FF6B4A25]'
				>
					All courses
				</Button>
			</div>

			{/* Kurs kartochkasi namunasi */}
			<div className='max-w-sm border border-slate-100 rounded-2xl overflow-hidden shadow-sm'>
				<div className='h-48 bg-teal-900 p-4 relative text-white'>
					{/* Skrinshotdagi rasm joyi */}
					<div className='text-xs opacity-75'>AAOIFI CPSS Preparatory...</div>
					<div className='mt-4 font-bold text-lg'>CPSS</div>
					<div className='absolute bottom-4 right-4 text-xs bg-orange-500 px-2 py-1 rounded'>
						In English
					</div>
				</div>
				<div className='p-4'>
					<h3 className='font-bold text-sm mb-4'>
						AAOIFI CPSS Exam Preparatory Course - In English
					</h3>
					<div className='flex gap-2'>
						<Button
							size='sm'
							variant='destructive'
							className='bg-red-500 rounded-lg text-white hover:text-red-500'
						>
							Unpaid
						</Button>
						<Button
							size='sm'
							className='bg-teal-600 hover:bg-teal-700 rounded-lg'
						>
							Make a payment
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCourses
