import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SecuritySettings() {
	return (
		<div className='max-w-lg space-y-6 text-slate-800 animate-in fade-in duration-300'>
			{/* Old Password */}
			<div className='space-y-2'>
				<label className='text-sm font-semibold text-slate-700'>
					Old Password
				</label>
				<Input
					type='password'
					placeholder='•••••••••••'
					className='h-12 border-transparent bg-slate-50 focus-visible:ring-[#299D91] rounded-lg'
				/>
			</div>

			{/* New Password */}
			<div className='space-y-2'>
				<label className='text-sm font-semibold text-slate-700'>
					New Password
				</label>
				<Input
					type='password'
					placeholder='•••••••••••'
					className='h-12 border-transparent bg-slate-50 focus-visible:ring-[#299D91] rounded-lg'
				/>
			</div>

			{/* Retype Password */}
			<div className='space-y-2'>
				<label className='text-sm font-semibold text-slate-700'>
					Retype Password
				</label>
				<Input
					type='password'
					placeholder='•••••••••••'
					className='h-12 border-transparent bg-slate-50 focus-visible:ring-[#299D91] rounded-lg'
				/>
			</div>

			{/* Phone Number (Faqat ko'rsatish uchun dizayndagi kabi) */}
			<div className='space-y-2 pt-2'>
				<label className='text-sm font-semibold text-slate-700'>
					Phone Number
				</label>
				<div className='flex h-12 w-full items-center rounded-lg bg-white px-4 text-sm text-slate-500'>
					+998 | 90 169 35 28
				</div>
			</div>

			{/* Update Button */}
			<div className='pt-4'>
				<Button className='h-11 rounded-lg bg-[#299D91] px-8 font-medium text-white hover:bg-[#238b80]'>
					Update Password
				</Button>
			</div>
		</div>
	)
}
