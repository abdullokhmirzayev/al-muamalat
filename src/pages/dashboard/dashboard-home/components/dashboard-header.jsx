import { Bell, ChevronsRight, Search } from 'lucide-react'

export default function DashboardHeader() {
	// Bugungi sanani dizayndagi kabi formatlash (Masalan: May 23, 2026)
	const today = new Date().toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})

	return (
		<header className='flex min-h-20 items-center justify-between px-8 bg-[#F8F9FA] border-b-2 border-gray-200'>
			{/* Chap qism: Sarlavha va Sana */}
			<div className='flex items-center gap-3 text-slate-400'>
				<ChevronsRight className='h-5 w-5 hidden sm:block' />
				<span className='text-sm font-medium'>{today}</span>
			</div>

			{/* O'ng qism: Qidiruv va Bildirishnomalar */}
			<div className='flex items-center gap-6'>
				{/* Bildirishnoma (Qo'ng'iroqcha) */}
				<button className='relative p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer'>
					<Bell className='h-6 w-6' />
					{/* Yashil indikator nuqta */}
					<span className='absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[#299D91] ring-2 ring-[#F8F9FA]'></span>
				</button>

				{/* Qidiruv maydoni */}
				<div className='relative hidden md:block'>
					<input
						type='text'
						placeholder='Search here'
						className='h-12 w-72 rounded-full bg-white pl-6 pr-12 text-sm text-slate-700 outline-none shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all focus:ring-2 focus:ring-[#299D91]/30 placeholder:text-slate-400'
					/>
					<button className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer'>
						<Search className='h-5 w-5' />
					</button>
				</div>
			</div>
		</header>
	)
}
