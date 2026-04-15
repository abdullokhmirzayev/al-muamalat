import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'

interface CourseCardProps {
	category: string
	title: string
	price: number
	rating: number
	reviews: number
	image: string
	color: string
}

export const CourseCard = ({
	category,
	title,
	price,
	rating,
	reviews,
	image,
	color,
}: CourseCardProps) => {
	return (
		<Card className='border-0 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]'>
			<CardContent className='p-4'>
				{/* Rasm qismi */}
				<div
					className={`${color} rounded-xl p-6 relative aspect-4/3 flex items-center justify-center`}
				>
					<span className='absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-[10px] font-bold px-3.5 py-1.5 rounded-[6px] uppercase tracking-wider'>
						{category}
					</span>
					<Image
						src={image}
						alt={title}
						width={160}
						height={160}
						className='object-contain'
					/>
				</div>

				{/* Ma'lumotlar qismi */}
				<div className='mt-4 space-y-2'>
					<h3 className='font-semibold text-gray-800 line-clamp-1'>{title}</h3>

					<div className='flex items-center gap-1'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={14}
								className={`${i < Math.floor(rating) ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}`}
							/>
						))}
						<span className='text-xs text-gray-400 ml-1'>({reviews})</span>
					</div>

					<div className='flex items-center justify-between pt-2'>
						<span className='text-xl font-bold text-gray-900'>$ {price}</span>
						<button className='bg-[#009688]/40 text-[#009688] p-2 rounded-xl hover:text-white hover:bg-[#00796B] transition-colors'>
							<ArrowUpRight size={20} />
						</button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
