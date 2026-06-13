import DashboardForm from '@/components/shared/form/dashborad-form'

const DashboardLessons = () => {
	const handleCreateLesson = async data => {
		console.log("Yangi kurs ma'lumotlari:", data)
	}

	return (
		<div className='p-6 bg-gray-50 min-h-screen'>
			<DashboardForm
				titleText='Yangi Lesson Yaratish'
				subtitleText="Kurs ma'lumotlarini to'liq va aniq kiriting"
				onSubmit={handleCreateLesson}
			/>
		</div>
	)
}

export default DashboardLessons
