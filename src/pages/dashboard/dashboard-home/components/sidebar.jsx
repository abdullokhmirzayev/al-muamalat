import Logo from '@/assets/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	BookOpen,
	LayoutDashboard,
	LogOut,
	MoreVertical,
	Settings,
} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Sidebar() {
	const navigate = useNavigate()

	// Yon paneldagi menyu ro'yxati
	const navItems = [
		{ name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
		{ name: 'Courses', path: '/dashboard/courses', icon: BookOpen },

		{ name: 'Settings', path: '/dashboard/settings', icon: Settings },
	]

	const handleLogout = () => {
		localStorage.removeItem('dashboardToken')
		localStorage.removeItem('dashboardRefreshToken')
		navigate('/dashboard/login')
		toast.success('Logout Successful')
	}

	return (
		<aside className='flex w-64 flex-col justify-between bg-[#1A1C22] text-slate-300 transition-all duration-300'>
			{/* Yuqori qism: Logo va Menyu */}
			<div>
				{/* Logo */}
				<div className='flex h-20 items-center px-8 text-2xl font-bold tracking-wider select-none'>
					<a
						href='/'
						className='flex items-center gap-2 group relative w-59.75 h-14'
					>
						<img src={Logo} alt='Logo' className='object-contain' />
					</a>
				</div>

				{/* Navigatsiya linklari */}
				<nav className='mt-6 flex flex-col gap-2 px-4'>
					{navItems.map(item => (
						<NavLink
							key={item.name}
							to={item.path}
							end={item.path === '/dashboard'} // Asosiy yo'l uchun exact match
							className={({ isActive }) =>
								`flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
									isActive
										? 'bg-[#299D91] text-white shadow-md'
										: 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
								}`
							}
						>
							<item.icon className='h-5 w-5' />
							{item.name}
						</NavLink>
					))}
				</nav>
			</div>

			{/* Pastki qism: Logout va User Profile */}
			<div className='flex flex-col gap-4 p-4'>
				{/* Logout tugmasi */}
				<button
					onClick={handleLogout}
					className='flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-400 transition-colors hover:bg-red-500/30 hover:text-white w-full cursor-pointer'
				>
					<LogOut className='h-5 w-5' />
					Logout
				</button>

				{/* Profil qismi */}
				<div className='flex items-center justify-between border-t border-slate-800 pt-4 px-2'>
					<div className='flex items-center gap-3'>
						<Avatar className='h-10 w-10 border border-slate-700'>
							{/* Rasmni o'zingizning haqiqiy user rasmingizga o'zgartirasiz */}
							<AvatarImage src='https://github.com/shadcn.png' alt='User' />
							<AvatarFallback className='bg-slate-800 text-white'>
								TR
							</AvatarFallback>
						</Avatar>
						<div className='flex flex-col text-left'>
							<span className='text-sm font-semibold text-white'>
								Tanzir Rahman
							</span>
							<span className='text-xs text-slate-500 cursor-pointer hover:underline'>
								View profile
							</span>
						</div>
					</div>
					<button className='text-slate-500 hover:text-white transition-colors cursor-pointer'>
						<MoreVertical className='h-5 w-5' />
					</button>
				</div>
			</div>
		</aside>
	)
}
