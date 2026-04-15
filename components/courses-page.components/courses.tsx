import { courses } from '@/lib/data'
import { CourseCard } from './course-card'

export default function Courses() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{courses.map(course => (
				<CourseCard key={course.id} {...course} />
			))}
		</div>
	)
}
