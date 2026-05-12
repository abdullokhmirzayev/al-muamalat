import { request } from '@/services/request'
import { useMutation } from '@tanstack/react-query'
import { Check } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Payment = ({ courseId, userId }) => {
	const services = [
		{
			title: 'Space for creative ideas',
			desc: 'Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.',
		},
		{
			title: 'Engaging and fun curriculum',
			desc: 'Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own. With Cyber Square kids have fun while they learn without frustrations.',
		},
		{
			title: 'Professional teaching methods',
			desc: 'We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.',
		},
	]

	const features = [
		'Space for creative ideas',
		'Engaging and fun curriculum',
		'Professional teaching methods',
		'Learn from AI & Data Science experts',
		'Courses by IIT, NIT, and IIM alumni',
		'UK certification upon completion',
		'Personalized one-to-one training',
	]

	const { handleSubmit } = useForm()

	const { mutate } = useMutation({
		mutationKey: ['payment'],
		mutationFn: payload => request.post('/courses/user', payload),
		onSuccess: res => {
			toast.success('Successful')

			request.get(`/courses/purchase/${res?.data?.data?.id}`).then(res => {
				const url = res.data?.data?.data

				if (url) {
					const aTeg = document.createElement('a')
					aTeg.href = url
					aTeg.target = '_blank'
					document.body.append(aTeg)
					aTeg.click()
					aTeg.remove()
				}
			})
		},

		onError: error => {
			toast.error(error.message)
		},
	})

	const onSubmit = () => {
		const submitData = {
			course_id: courseId,
			user_id: userId,
		}
		mutate(submitData)
	}

	return (
		<div className='flex items-center justify-center min-h-screen bg-[#f3f4f6] p-4'>
			<div className='flex flex-col md:flex-row max-w-5xl w-full bg-white shadow-xl overflow-hidden'>
				<div className='md:w-[48%] bg-[#009485] text-white p-10 md:p-16'>
					<h2 className='text-[28px] font-bold mb-12'>Our Services</h2>

					<div className='space-y-12 mt-10'>
						{services.map((service, index) => (
							<div key={index} className='flex gap-4'>
								<div className='mt-1.5 shrink-0'>
									<Check className='w-5 h-5 text-white' strokeWidth={3} />
								</div>
								<div>
									<h3 className='font-bold text-[19px] mb-2 leading-tight'>
										{service.title}
									</h3>
									<p className='text-[14px] opacity-95 leading-relaxed text-left'>
										{service.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='md:w-[52%] bg-white p-10 md:p-16 flex flex-col'>
					<h2 className='text-[32px] font-bold text-gray-900 mb-12'>Payment</h2>

					<div className='grow mt-10'>
						<ul className='space-y-4'>
							{features.map((feature, index) => (
								<li
									key={index}
									className='flex items-center text-gray-700 text-[15px] font-normal tracking-tight'
								>
									{/* Rasmda nuqtalar juda kichik yashil rangda */}
									<span className='w-1.5 h-1.5 bg-[#009485] rounded-full mr-4 shrink-0'></span>
									{feature}
								</li>
							))}
						</ul>
					</div>

					<div className='mt-12'>
						<button
							onClick={handleSubmit(onSubmit)}
							className='bg-[#009485] hover:bg-[#007a6e] text-white font-bold py-3.5 px-12 rounded-md transition-all cursor-pointer'
						>
							Purchase Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
