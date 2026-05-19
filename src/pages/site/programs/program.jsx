import { request } from '@/services/request'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import CourseInfo from './components/course-information'
import InternEduHero from './components/intern-edu-hero'
import Payment from './components/payment'

const Program = () => {
	const { courseId } = useParams()
	const { data: courseList } = useQuery({
		queryKey: ['course-list'],
		queryFn: () => request.get('/courses/main').then(res => res?.data),
	})

	const { data: userData } = useQuery({
		queryKey: ['userData'],
		queryFn: () => request.get('/users/me').then(res => res.data),
	})

	const userId = userData?.data?.user_id

	const selectedCourse = courseList?.data?.find(
		course => course?.course_id === courseId,
	)

	return (
		<>
			<section>
				<header className='text- max-w-7xl mx-auto'>
					<h1 className='text-[40px] font-bold'>{selectedCourse?.name_uz}</h1>
					{selectedCourse?.description_uz ? (
						<div
							className='text-base text-gray-600'
							dangerouslySetInnerHTML={{
								__html: selectedCourse?.description_uz
									?.replace(/\\n/g, '')
									?.replace(/\\"/g, '"'),
							}}
						/>
					) : (
						''
					)}
				</header>

				<InternEduHero />
				<CourseInfo />
				{/* <PopularCourses /> */}
				<Payment courseId={courseId} userId={userId} />
			</section>
		</>
	)
}

export default Program
