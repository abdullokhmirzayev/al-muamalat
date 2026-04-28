import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogOut, Save, UserCircle } from 'lucide-react' // Save iconini qo'shdik
import { useState } from 'react'

const ProfileInfo = ({ user, onSubmit, register }) => {
	// Tahrirlash holatini boshqarish uchun state
	const [isEditing, setIsEditing] = useState(false)

	const handleEditClick = e => {
		e.preventDefault()
		setIsEditing(true)
	}

	const handleInternalSubmit = data => {
		onSubmit(data)
		setIsEditing(false)
	}

	return (
		<div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit'>
			<div className='flex flex-col items-center mb-6'>
				<div className='w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-4'>
					{user?.image_src ? (
						<img
							src={user.image_src}
							alt='Avatar'
							className='rounded-full object-cover'
						/>
					) : (
						<UserCircle className='w-16 h-16 text-slate-400' />
					)}
				</div>
				<h2 className='text-xl font-bold'>{user?.full_name}</h2>
				<p className='text-slate-400 text-sm'>+{user?.phone_number}</p>
			</div>

			<form onSubmit={handleInternalSubmit} className='space-y-4'>
				{/* Ism */}
				<div className='space-y-1'>
					<Label className='text-[10px] uppercase font-bold text-slate-400'>
						Enter your name
					</Label>
					<Input
						{...register('full_name')}
						disabled={!isEditing} // Statega qarab boshqariladi
						className={`h-12 rounded-[10px] border-none ${!isEditing ? 'bg-slate-50' : 'bg-white ring-1 ring-slate-200'}`}
					/>
				</div>

				{/* Manzil */}
				<div className='space-y-1'>
					<Label className='text-[10px] uppercase font-bold text-slate-400'>
						Enter your address (Optional)
					</Label>
					<Input
						{...register('address')}
						placeholder='Address'
						disabled={!isEditing}
						className={`h-12 rounded-[10px] border-none ${!isEditing ? 'bg-slate-50' : 'bg-white ring-1 ring-slate-200'}`}
					/>
				</div>

				{/* Parol */}
				<div className='space-y-1'>
					<Label className='text-[10px] uppercase font-bold text-slate-400'>
						Enter password
					</Label>
					<Input
						type='password'
						{...register('password')}
						placeholder='Password'
						disabled={!isEditing}
						className={`h-12 rounded-[10px] border-none ${!isEditing ? 'bg-slate-50' : 'bg-white ring-1 ring-slate-200'}`}
					/>
				</div>

				{/* Telefon (Odatda o'zgartirib bo'lmaydi, shuning uchun doim disabled qoldirishingiz mumkin) */}
				<div className='space-y-1'>
					<Label className='text-[10px] uppercase font-bold text-slate-400'>
						Your phone number
					</Label>
					<Input
						{...register('phone_number')}
						disabled
						className='bg-slate-50 border-none h-12 text-slate-400'
					/>
				</div>

				<div className='pt-4'>
					{isEditing ? (
						/* Tahrirlash rejimidagi SAVE tugmasi */
						<Button
							type='submit'
							className='w-full bg-[#009688] hover:bg-teal-700 h-12 rounded-xl text-white font-semibold'
						>
							<Save className='w-4 h-4 mr-2' /> Save Changes
						</Button>
					) : (
						/* Oddiy holatdagi UPDATE va LOGOUT tugmalari */
						<div className='flex gap-3'>
							<Button
								type='button'
								onClick={handleEditClick}
								className='flex-1 bg-[#FF6B4A] hover:bg-[#fa5a35] h-12 rounded-xl text-white'
							>
								Update
							</Button>
							<Button
								type='button'
								variant='outline'
								className='flex-1 border-slate-200 h-12 rounded-xl text-slate-600'
							>
								<LogOut className='w-4 h-4 mr-2' /> Log out
							</Button>
						</div>
					)}
				</div>
			</form>
		</div>
	)
}

export default ProfileInfo
