import { Button } from '@/components/ui/button'
import { ImagePlus } from 'lucide-react'

export default function AccountSettings() {
	return (
		<div className='mt-8 flex flex-col md:flex-row gap-12 text-slate-800'>
			{/* Chap qism: Foydalanuvchi ma'lumotlari */}
			<div className='flex-1 space-y-6'>
				{/* Full name */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Full name
					</label>
					<div className='h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500'>
						Javohir Kubayev
					</div>
				</div>

				{/* Email */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>Email</label>
					<div className='h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500'>
						javohir.kubayev@email.com
					</div>
				</div>

				{/* Username */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Username
					</label>
					<div className='h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500'>
						javohir.kubayev
					</div>
				</div>

				{/* Phone Number */}
				<div className='space-y-2'>
					<label className='text-sm font-semibold text-slate-700'>
						Phone Number
					</label>
					<div className='h-12 w-full rounded-lg bg-slate-50 border border-transparent px-4 py-3 text-sm text-slate-500'>
						+998 | 90 169 35 28
					</div>
				</div>

				{/* Update Button */}
				<div className='pt-4'>
					<Button className='bg-[#299D91] hover:bg-[#238b80] text-white font-medium px-8 h-11 rounded-lg'>
						Update Profile
					</Button>
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
