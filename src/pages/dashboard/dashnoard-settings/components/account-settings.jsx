import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { dashboardRequest } from '@/services/dashboard-request'
import { useQuery } from '@tanstack/react-query'
import { ImagePlus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function AccountSettings() {
	const [isUpdating, setIsUpdating] = useState(false)

	const {
		data: userData,
		isError: userIsError,
	} = useQuery({
		queryKey: ['dashboard-user'],
		queryFn: async () => {
			const response = await dashboardRequest('users/me').then(res => res.data)
			return response
		},
	})

	// const {} = useMutation({
	// 	mutationFn: async () => {
	// 		const req = await dashboardRequest.put(`users/${data.data.user_id}`)
	// 		console.log(req)
	// 	},
	// })

	console.log(userData)

	const onUpdating = () => {
		setIsUpdating(true)
	}

	const onCancel = () => {
		setIsUpdating(false)
	}

	const {
		register,
		handleSubmit,
		formState: { error },
	} = useForm({
		values: userData?.data,
	})

	if (userIsError) {
		return (
			<div className='mt-8 text-red-500'>
				Ma'lumotlarni yuklashda xatolik yuz berdi!
			</div>
		)
	}

	return (
		<div className='mt-8 flex flex-col md:flex-row gap-12 text-slate-800'>
			{/* Chap qism: Foydalanuvchi ma'lumotlari */}
			<div className='flex-1 space-y-6'>
				{/* Full name */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Full name
					</label>
					<Input
						className={`h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500 ${error && ''}`}
						type='text'
						placeholder='Javohir Kubayev'
						{...register('full_name')}
						disabled={!isUpdating}
					/>
				</div>

				{/* Email */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Address
					</label>``
					<Input
						className={`h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500 ${error && ''}`}
						type='text'
						placeholder='javohir.kubayev@email.com'
						{...register('email')}
						disabled={!isUpdating}
					/>
				</div>

				{/* Phone Number */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Phone Number
					</label>
					<Input
						className={`h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500 ${error && ''}`}
						type='text'
						placeholder='998901693528'
						{...register('phone_number')}
						disabled={!isUpdating}
					/>
				</div>

				{/* Update Button */}
				<div className='pt-4 flex gap-4'>
					{isUpdating ? (
						<>
							<Button
								onClick={handleSubmit(onUpdating)}
								variant='ghost'
								className='border border-[#299D91] hover:bg-[#299D91]/10 text-[#299D91] hover font-medium px-8 h-11 rounded-lg cursor-pointer'
							>
								Update
							</Button>
							<Button
								onClick={handleSubmit(onCancel)}
								className='bg-red-500 hover:bg-red-600/90 text-white font-medium px-8 h-11 rounded-lg cursor-pointer'
							>
								Cancel
							</Button>
						</>
					) : (
						<>
							<Button
								onClick={handleSubmit(onUpdating)}
								className='bg-[#299D91] hover:bg-[#238b80] text-white font-medium px-8 h-11 rounded-lg cursor-pointer'
							>
								Update Profile
							</Button>
						</>
					)}
				</div>
			</div>

			{/* O'ng qism: Profil rasmi */}
			<div className='w-full md:w-64 space-y-4'>
				<label className='text-sm font-semibold text-slate-700'>
					Your Profile Picture
				</label>

				{/* Rasm yuklash maydoni */}
				<div className='flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors'>
					<ImagePlus className='h-8 w-8 text-slate-400' />
					<span className='text-xs text-slate-500 text-center max-w-25'>
						Upload your photo
					</span>
					<input type='file' className='hidden' accept='image/*' />
				</div>
			</div>
		</div>
	)
}
