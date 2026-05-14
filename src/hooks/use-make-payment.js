import { request } from '@/services/request'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useMakePayment = () => {
	const mutation = useMutation({
		mutationKey: ['payment'],
		mutationFn: payload => request.post('/courses/user', payload),
		onSuccess: res => {
			toast.success('Successful')

			const purchaseId = res?.data?.data?.id
			if (purchaseId) {
				request.get(`/courses/purchase/${purchaseId}`).then(response => {
					const url = response.data?.data?.data

					if (url) {
						const aTeg = document.createElement('a')
						aTeg.href = url
						aTeg.target = '_blank'
						document.body.append(aTeg)
						aTeg.click()
						aTeg.remove()
					}
				})
			}
		},
		onError: error => {
			toast.error(error?.response?.data?.message || error.message)
		},
	})

	return {
		makePayment: mutation.mutate,
		isLoading: mutation.isPending,
		error: mutation.error,
	}
}
