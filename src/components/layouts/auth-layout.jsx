import AvatarImg1 from '@/assets/avatar1.png'
import Logo from '@/assets/logo.png'
import { Outlet } from 'react-router-dom'
import SingPageRight from '../pages/auth/components/sign-right'

const AuthLayout = () => {
	return (
		<main className='min-h-screen flex'>
			{/* ========== LEFT SIDE ========== */}
			<div className='flex-1 flex flex-col px-10 py-8 md:px-16'>
				{/* Yuqori qism (Nav) - Har doim bir xil */}
				<div className='flex items-center justify-between mt-24'>
					<a href='/' className='flex items-center gap-2 w-59.75 h-14'>
						<img src={Logo} alt='Logo' className='object-contain' />
					</a>

					<div className='flex items-center gap-10 relative left-[17%] z-10'>
						<div className='text-right text-nowrap'>
							<p className='text-xl text-slate-400'>Questions?</p>
							<p className='text-3xl font-semibold text-[#009688]'>Ask Diyor</p>
						</div>
						<div className='relative w-20 h-20 rounded-full overflow-hidden border-8 border-white shadow-sm'>
							<img
								src={AvatarImg1}
								alt='Diyor'
								className='object-cover w-full h-full'
							/>
						</div>
					</div>
				</div>

				{/* O'zgaruvchan Form qismi */}
				<div className='flex-1 flex flex-col justify-center max-w-lg'>
					<Outlet />
				</div>
			</div>

			{/* O'ng taraf - Har doim bir xil */}
			<SingPageRight />
		</main>
	)
}

export default AuthLayout
