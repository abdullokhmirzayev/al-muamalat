'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	const acriveStyle =
		'bg-[#009688] hover:bg-[#00796B] text-white px-8 h-10 rounded-md font-medium'
	const inActiveStyle =
		'px-8 h-10 rounded-md text-gray-500 font-medium border-gray-200'
	return (
		<div className=' bg-gray-50/30 py-36 sm:px-6 lg:px-8'>
			<div className='container max-w-6xl mx-auto space-y-6'>
				<div className='flex gap-4'>
					<Link href={'/profile'}>
						<Button
							variant={pathname === '/profile' ? 'default' : 'outline'}
							className={pathname === '/profile' ? acriveStyle : inActiveStyle}
						>
							Profile
						</Button>
					</Link>
					<Link href={'/courses'}>
						<Button
							variant={pathname === '/courses' ? 'default' : 'outline'}
							className={pathname === '/courses' ? acriveStyle : inActiveStyle}
						>
							Courses
						</Button>
					</Link>
				</div>
				{children}
			</div>
		</div>
	)
}

export default ProfileLayout
