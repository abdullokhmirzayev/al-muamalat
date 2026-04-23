import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { router } from './routes'

export default function App() {
	return (
		<div className=''>
			<RouterProvider router={router} />
			<ToastContainer />
		</div>
	)
}
