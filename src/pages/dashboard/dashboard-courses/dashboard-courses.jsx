import DashboardForm from '@/components/shared/form/dashborad-form'

const DashboardCourses = () => {
	const handleCreateCourse = async data => {
		console.log("Yangi kurs ma'lumotlari:", data)
	}

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<DashboardForm
				titleText='Yangi Course Yaratish'
				subtitleText="Kurs ma'lumotlarini to'liq va aniq kiriting"
				onSubmit={handleCreateCourse}
			/>
		</div>
	)
}

export default DashboardCourses
