import { request } from '@/services/request'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import ProfileCourses from './components/courses'
import ProfileInfo from './components/profile-info'

const ProfilePage = () => {
	const { data: apiResponse } = useQuery({
		queryKey: ['userData'],
		queryFn: () => request.get('/users/me').then(res => res.data),
	})

	const user = apiResponse?.data

	const { mutate: updateMutate } = useMutation({
		mutationKey: ['user', user?.user_id],
		mutationFn: data => request.put(`/users/${user?.user_id}`, data),
		onSuccess: () => {
			toast.success('Changes saved successfully')
		},
		onError: error => {
			toast.error(error.message)
		},
	})

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			full_name: '',
			address: '',
			password: '',
			phone_number: '',
		},
	})

	useEffect(() => {
		if (user) {
			reset({
				full_name: user.full_name || '',
				address: user.address || '',
				phone_number: user.phone_number || '',
			})
		}
	}, [user, reset])

	const onSubmit = formData => {
		updateMutate(formData)
	}

	// logout
	const { mutate: logoutMutate, isLoading: isLogoutLoading } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () =>
			request.post('/v2/auth/logout', {
				refreshToken: localStorage.getItem('refreshToken'),
			}),
		onSuccess: () => {
			localStorage.clear()
			toast.success('Logout successfully')
			window.location.href = '/sign-in'
		},
	})

	const handleLogout = () => {
		logoutMutate()
	}

	const {
		data: coursesMy,
		isLoading: isLoadingCoursesMy,
		isError: isErrorCoursesMy,
	} = useQuery({
		queryKey: ['courses-my'],
		queryFn: () => request.get('/courses/my').then(res => res.data),
	})

	return (
		<div className='p-8 max-w-6xl mx-auto'>
			<header className='mb-8'>
				<h1 className='text-2xl font-bold text-slate-900'>My profile</h1>
				<p className='text-slate-500'>
					Manage personal information and purchased courses
				</p>
			</header>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<ProfileInfo
					user={user}
					onSubmit={handleSubmit(onSubmit)}
					handleSubmit={handleSubmit}
					register={register}
					handleLogout={handleLogout}
					isLogoutLoading={isLogoutLoading}
				/>

				<ProfileCourses
					courses={coursesMy}
					isLoading={isLoadingCoursesMy}
					isError={isErrorCoursesMy}
					userId={user?.user_id}
				/>
			</div>
		</div>
	)
}

export default ProfilePage
