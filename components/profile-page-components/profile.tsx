import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../ui/button'

const Profile = () => {
	return (
		<Card className='border-0 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-xl overflow-hidden bg-white'>
			{/* Header containing Avatar, Name, and Save Button */}
			<CardHeader className='flex flex-row items-center justify-between space-y-0 p-8 sm:p-10 pb-6 sm:pb-8'>
				<div className='flex items-center gap-5'>
					<Avatar className='h-18 w-18'>
						{/* Replace src with your actual image path */}
						<AvatarImage
							src='/images/avatar3.png'
							alt='Alexa Rawles'
							className='object-cover'
						/>
						<AvatarFallback className='bg-gray-200 text-gray-600 text-xl'>
							AR
						</AvatarFallback>
					</Avatar>
					<h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight'>
						Alexa Rawles
					</h2>
				</div>
				<Button className='bg-[#009688] hover:bg-[#00796B] text-white px-8 h-10 rounded-md font-medium hidden sm:flex'>
					Save
				</Button>
			</CardHeader>

			{/* Form Fields */}
			<CardContent className='p-8 sm:p-10 pt-0 sm:pt-0'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8'>
					{/* First Name */}
					<div className='space-y-3'>
						<Label
							htmlFor='firstName'
							className='text-[15px] text-gray-600 font-normal'
						>
							First Name
						</Label>
						<Input
							id='firstName'
							placeholder='Your First Name'
							className='bg-gray-50/50 border-gray-100 h-12 text-[15px] rounded-lg shadow-sm focus-visible:ring-[#009688]'
						/>
					</div>

					{/* Last Name */}
					<div className='space-y-3'>
						<Label
							htmlFor='lastName'
							className='text-[15px] text-gray-600 font-normal'
						>
							Last Name
						</Label>
						{/* Note: In the image, the placeholder says "Your First Name", but I changed it to "Your Last Name" for better UX */}
						<Input
							id='lastName'
							placeholder='Your Last Name'
							className='bg-gray-50/50 border-gray-100 h-12 text-[15px] rounded-lg shadow-sm focus-visible:ring-[#009688]'
						/>
					</div>

					{/* Address */}
					<div className='space-y-3'>
						<Label
							htmlFor='address'
							className='text-[15px] text-gray-600 font-normal'
						>
							Address
						</Label>
						<Input
							id='address'
							placeholder='Enter Your Address'
							className='bg-gray-50/50 border-gray-100 h-12 text-[15px] rounded-lg shadow-sm focus-visible:ring-[#009688]'
						/>
					</div>

					{/* Birthday */}
					<div className='space-y-3'>
						<Label
							htmlFor='birthday'
							className='text-[15px] text-gray-600 font-normal'
						>
							Birthday
						</Label>
						<Input
							type='date'
							id='birthday'
							placeholder='Enter Your Birthday'
							className='bg-gray-50/50 border-gray-100 h-12 text-[15px] rounded-lg shadow-sm focus-visible:ring-[#009688]'
						/>
					</div>
				</div>

				{/* Mobile Save Button (shows below form on small screens) */}
				<div className='mt-8 flex sm:hidden justify-end'>
					<Button className='bg-[#009688] hover:bg-[#00796B] text-white w-full px-8 h-10 rounded-md font-medium'>
						Save
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}

export default Profile
