import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowUpRight, Star } from 'lucide-react'

const courses = [
	{
		id: 1,
		category: 'Design',
		title: 'Various versions have evolve...',
		rating: 5,
		reviews: 20,
		price: 500,
		bgColor: 'bg-[#FFC5AD]', // Sabzirang fon
		image: 'https://api.dicebear.com/7.x/bottts/svg?seed=1', // Namuna uchun rasm
	},
	{
		id: 2,
		category: 'Business',
		title: 'Various versions have evolve...',
		rating: 4,
		reviews: 102,
		price: 500,
		bgColor: 'bg-[#E0D4FF]', // Binafsharang fon
		image: 'https://api.dicebear.com/7.x/bottts/svg?seed=2',
	},
	{
		id: 3,
		category: 'Business',
		title: 'Various versions have evolve...',
		rating: 4,
		reviews: 102,
		price: 500,
		bgColor: 'bg-[#B2B1FF]', // Moviyrang fon
		image: 'https://api.dicebear.com/7.x/bottts/svg?seed=3',
	},
	{
		id: 3,
		category: 'Business',
		title: 'Various versions have evolve...',
		rating: 4,
		reviews: 102,
		price: 500,
		bgColor: 'bg-[#B2B1FF]', // Moviyrang fon
		image: 'https://api.dicebear.com/7.x/bottts/svg?seed=3',
	},
]

export default function PopularCourses() {
	return (
		<section className='w-full py-12 bg-slate-50/50'>
			<div className='container mx-auto px-4'>
				{/* Sarlavha qismi */}
				<div className='text-center mb-10 space-y-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-slate-900'>
						Most Popular Course
					</h2>
					<p className='text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
						Expert guidance for managing funds in alignment with Islamic
						principles, helping you make informed, halal investment decisions.
					</p>
				</div>

				{/* Karusel qismi */}
				<div className='relative max-w-6xl mx-auto px-12'>
					<Carousel
						opts={{
							align: 'start',
							loop: true,
							autoplay: true,
						}}
						className='w-full'
					>
						<CarouselContent className='-ml-4'>
							{courses.map(course => (
								<CarouselItem
									key={course.id}
									className='pl-4 md:basis-1/2 lg:basis-1/3'
								>
									<Card className='border-none shadow-lg rounded-[24px] overflow-hidden bg-white'>
										<CardContent className='p-4'>
											{/* Kurs rasmi va Badge */}
											<div
												className={`relative aspect-4/3 rounded-[18px] ${course.bgColor} flex items-center justify-center mb-4 overflow-hidden`}
											>
												<Badge className='absolute top-3 left-3 bg-white/90 hover:bg-white text-slate-800 border-none shadow-sm px-4 py-1 rounded-md'>
													{course.category}
												</Badge>
												<img
													src={course.image}
													alt={course.title}
													className='w-40 h-40 object-contain drop-shadow-xl'
												/>
											</div>

											{/* Kurs ma'lumotlari */}
											<h3 className='text-lg font-bold text-slate-800 mb-3 truncate'>
												{course.title}
											</h3>

											{/* Reyting */}
											<div className='flex items-center gap-1 mb-2'>
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-4 h-4 ${
															i < course.rating
																? 'fill-orange-400 text-orange-400'
																: 'fill-slate-200 text-slate-200'
														}`}
													/>
												))}
												<span className='text-slate-500 text-sm ml-1'>
													({course.reviews})
												</span>
											</div>
										</CardContent>

										<CardFooter className='p-4 pt-0 flex items-center justify-between border-t border-slate-50 mt-2'>
											<span className='text-xl font-bold text-slate-900'>
												$ {course.price}
											</span>
											<Button
												size='icon'
												className='rounded-full bg-teal-600 hover:bg-teal-700 h-10 w-10 transition-transform active:scale-90'
											>
												<ArrowUpRight className='h-5 w-5 text-white' />
											</Button>
										</CardFooter>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Navigatsiya tugmalari */}
						<CarouselPrevious className='hidden md:flex cursor-pointer -left-6 bg-teal-600 text-white hover:bg-teal-700 hover:text-white border-none h-12 w-12' />
						<CarouselNext className='hidden md:flex cursor-pointer -right-6 bg-teal-600 text-white hover:bg-teal-700 hover:text-white border-none h-12 w-12' />
					</Carousel>

					{/* Pastdagi nuqtalar (Dots) - Vizual namuna */}
					<div className='flex justify-center gap-2 mt-8'>
						<div className='h-2.5 w-2.5 rounded-full bg-teal-600' />
						<div className='h-2.5 w-2.5 rounded-full bg-slate-200' />
						<div className='h-2.5 w-2.5 rounded-full bg-slate-200' />
						<div className='h-2.5 w-2.5 rounded-full bg-slate-200' />
					</div>
				</div>
			</div>
		</section>
	)
}
