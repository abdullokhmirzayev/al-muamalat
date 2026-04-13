import { Button } from '@/components/ui/button'
import {
	Building2,
	ClipboardCheck,
	Coins,
	Globe,
	GraduationCap,
	ShoppingCart,
} from 'lucide-react'

const services = [
	{
		icon: Coins,
		title: 'Islamic Fund Management',
		description:
			'We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.',
		bg: 'bg-blue-100',
		iconBg: 'bg-blue-200',
		iconColor: 'text-blue-500',
	},
	{
		icon: Globe,
		title: 'International Relations',
		description:
			'We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.',
		bg: 'bg-teal-100',
		iconBg: 'bg-teal-200',
		iconColor: 'text-teal-500',
	},
	{
		icon: GraduationCap,
		title: 'Education and Training',
		description:
			'We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.',
		bg: 'bg-pink-100',
		iconBg: 'bg-pink-200',
		iconColor: 'text-pink-500',
	},
	{
		icon: Building2,
		title: 'For Islamic Banks',
		description:
			'We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.',
		bg: 'bg-purple-100',
		iconBg: 'bg-purple-200',
		iconColor: 'text-purple-500',
	},
	{
		icon: ShoppingCart,
		title: 'Islamic Capital Market',
		description:
			'We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.',
		bg: 'bg-gray-100',
		iconBg: 'bg-gray-300',
		iconColor: 'text-gray-500',
	},
	{
		icon: ClipboardCheck,
		title: 'Shariah Compliance Audit',
		description:
			'We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.',
		bg: 'bg-yellow-100',
		iconBg: 'bg-yellow-200',
		iconColor: 'text-yellow-600',
	},
]

const HomeServices = () => {
	return (
		<section className='w-full px-6 py-16 md:px-16 lg:px-32.5 bg-white'>
			{/* Header */}
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold text-slate-900 mb-4'>Our services</h2>
				<p className='text-slate-500 text-xl max-w-xl mx-auto leading-relaxed'>
					Expert guidance for managing funds in alignment with Islamic
					principles, helping you make informed, halal investment decisions.
				</p>
			</div>

			{/* Grid */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{services.map((service, i) => {
					const Icon = service.icon
					return (
						<div
							key={service.title}
							className={`${service.bg} rounded-2xl p-6 flex flex-col justify-between gap-6`}
						>
							{/* Top: icon + title */}
							<div className='flex items-center gap-4'>
								<div
									className={`${service.iconBg} h-21 w-21 rounded-full flex items-center justify-center shrink-0`}
								>
									<Icon className={`h-14 w-14 ${service.iconColor}`} />
								</div>
								<h3 className='text-2xl font-bold text-slate-800 leading-tight'>
									{service.title}
								</h3>
							</div>

							{/* Description */}
							<p className='text-slate-600 text-[17px] leading-relaxed'>
								{service.description}
							</p>

							{/* Button */}
							<Button className='w-full rounded-[10px] bg-slate-900 hover:bg-slate-700 text-white font-medium py-5 text-sm'>
								Learn more
							</Button>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default HomeServices
