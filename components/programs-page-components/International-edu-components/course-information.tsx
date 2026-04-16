'use client'

import { Triangle } from 'lucide-react'
import { useState } from 'react'

const CourseInformation = () => {
	const [expandedItem, setExpandedItem] = useState<string | null>(null)

	const courseDetails = [
		{
			id: 'videos',
			title: 'Videodarslar',
			description:
				'Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.',
		},
		{
			id: 'tasks',
			title: 'Tasks',
			description:
				'Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.',
		},
	]

	const toggleItem = (id: string) => {
		setExpandedItem(expandedItem === id ? null : id)
	}

	return (
		<div className='w-full bg-linear-to-b from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-6xl mx-auto'>
				{/* Heading */}
				<h2 className='text-4xl sm:text-5xl font-bold text-slate-900 text-center mb-16'>
					Brief information about the course
				</h2>

				{/* Content Grid */}
				<div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
					{courseDetails.map(item => (
						<div key={item.id} className='space-y-4'>
							{/* Expandable Header */}
							<button
								onClick={() => toggleItem(item.id)}
								className='w-full text-left group'
							>
								<div className='flex items-center gap-2 cursor-pointer'>
									<h3 className='text-4xl font-medium text-teal-600 hover:text-teal-700 transition-colors'>
										{item.title}
									</h3>
									<Triangle
										className={`w-6 h-6 fill-teal-600 self-end text-teal-600 transition-transform duration-300 ${
											expandedItem === item.id ? 'rotate-180' : ''
										}`}
									/>
								</div>
							</button>

							{/* Description */}
							<div
								className={`overflow-hidden transition-all duration-300 ease-in-out ${
									expandedItem === item.id ? 'max-h-96' : 'max-h-full'
								}`}
							>
								<p className='text-lg text-slate-700 leading-relaxed'>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default CourseInformation
