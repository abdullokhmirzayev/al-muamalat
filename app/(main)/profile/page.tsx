import Profile from '@/components/profile-page-components/profile'
import { Button } from '@/components/ui/button'

export default function ProfileSettings() {
	return (
		// Full screen background with a subtle gray tint
		<div className=' bg-gray-50/30 py-36 sm:px-6 lg:px-8'>
			{/* Tailwind Container to constrain width and center */}
			<div className='container max-w-6xl mx-auto space-y-6'>
				{/* Top Navigation Tabs */}
				<div className='flex gap-4'>
					<Button className='bg-[#009688] hover:bg-[#00796B] text-white px-8 h-10 rounded-md font-medium'>
						Profile
					</Button>
					<Button
						variant='outline'
						className='px-8 h-10 rounded-md text-gray-500 font-medium border-gray-200'
					>
						Courses
					</Button>
				</div>

				{/* Main Profile Card */}
				<Profile />
			</div>
		</div>
	)
}
