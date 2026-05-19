import { Button } from '@/components/ui/button'
import { useMakePayment } from '@/hooks/use-make-payment'

export const PaymentButton = ({ courseId, userId }) => {
	const { makePayment, isLoading } = useMakePayment()

	return (
		<Button
			size='sm'
			className='bg-teal-600 hover:bg-teal-700 cursor-pointer'
			onClick={() => makePayment({ course_id: courseId, user_id: userId })}
			disabled={isLoading}
		>
			{isLoading ? 'Processing...' : 'Make a payment'}
		</Button>
	)
}
